function isFileApiSupported() {
    return window.File && window.FileReader && window.FileList && window.Blob;
}

function setupFileDropEvents(fileDrop) {
    const toggleHover = (isHovering) =>
        fileDrop.classList.toggle("Hover", isHovering);

    fileDrop.addEventListener("dragenter", () => toggleHover(true));
    fileDrop.addEventListener("dragleave", () => toggleHover(false));
    fileDrop.addEventListener("drop", () => toggleHover(false));
}

function setupFileInputHandler() {
    const input = document.querySelector("#FileDrop input");

    input.addEventListener("change", (e) => {
        try {
            const file = e.target.files?.[0];
            if (!file) return;

            const inputClass = classes[getSelected("in")];
            const outputClass = classes[getSelected("out")];

            const inputInstance = new inputClass();
            const outputInstance = new outputClass();
            map.mergeMap(inputInstance.map, outputInstance.map);

            document.querySelector("#FileDrop #Text").textContent = file.name;
            parseFile(file);
        } catch (err) {
            console.error("Error handling file input:", err);
            alert("Une erreur est survenue lors de la sélection du fichier.");
        }
    });
}

function parseFile(file) {
    try {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                currentMidi = new Midi(e.target.result);

                document.querySelector("#ResultsText").value = JSON.stringify(currentMidi, null, 2);

                const convertedMidi = parseTracks();
                const midiData = convertedMidi.toArray();

                const [fileName, fileExtension] = file.name.split(".");
                returnFile(midiData.buffer, `${fileName}-guitarpro.${fileExtension}`, file.type);
            } catch (err) {
                console.error("Error processing MIDI file:", err);
                alert("Erreur lors de la lecture ou la conversion du fichier MIDI.");
            }
        };

        reader.onerror = (err) => {
            console.error("FileReader error:", err);
            alert("Erreur lors de la lecture du fichier.");
        };

        reader.readAsArrayBuffer(file);
    } catch (err) {
        console.error("Error setting up FileReader:", err);
        alert("Une erreur est survenue lors de la préparation de la lecture du fichier.");
    }
}

function parseTracks() {
    try {
        currentMidi.tracks.forEach(transpose);
        return currentMidi;
    } catch (err) {
        console.error("Error parsing tracks:", err);
        alert("Erreur lors de la transposition des pistes.");
        return currentMidi;
    }
}

function transpose(track) {
    try {
        track.notes.forEach(note => {
            const converted = map.searchConversion(note.midi);
            if (converted && converted !== note.midi) {
                note.midi = converted;
            }
        });
    } catch (err) {
        console.error("Error transposing track:", err);
    }
}

function returnFile(buffer, filename = "output.mid", mimeType = "audio/midi") {
    try {
        const blob = new Blob([buffer], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (err) {
        console.error("Error creating downloadable file:", err);
        alert("Erreur lors de la création ou du téléchargement du fichier.");
    }
}

function getSelected(selectId) {
    try {
        return document.getElementById(selectId).value;
    } catch (err) {
        console.error(`Error getting selected value for "${selectId}":`, err);
        return "";
    }
}

(function init() {
    const fileText = document.querySelector("#FileDrop #Text");

    if (!isFileApiSupported()) {
        fileText.textContent = "Reading files not supported by this browser";
        return;
    }

    try {
        const fileDrop = document.querySelector("#FileDrop");
        setupFileDropEvents(fileDrop);
        setupFileInputHandler();
    } catch (err) {
        console.error("Error initializing file drop area:", err);
        alert("Une erreur est survenue lors de l'initialisation.");
    }
})();

// === Variables globales ===
let currentMidi = null;

const classes = {
    EazyDrummer,
    GgdMhPv,
    GuitarPro,
};

const map = new DrumMap();

// searchJSON(obj, key, val) {
//     let results = [];
//     for (let k in obj) {
//         if (obj.hasOwnProperty(k)) {
//             if (k === key && obj[k] === val) {
//                 results.push(obj);
//             } else if (typeof obj[k] === "object") {
//                 results = results.concat(searchJSON(obj[k], key, val));
//             }
//         }
//     }
//     return results;
// }

// const synths = [];
// document
//     .querySelector("tone-play-toggle")
//     .addEventListener("play", (e) => {
//         const playing = e.detail;
//         if (playing && currentMidi) {
//             const now = Tone.now() + 0.5;
//             currentMidi.tracks.forEach((track) => {
//                 //create a synth for each track
//                 const synth = new Tone.PolySynth(Tone.Synth, {
//                     envelope: {
//                         attack: 0.02,
//                         decay: 0.1,
//                         sustain: 0.3,
//                         release: 1,
//                     },
//                 }).toDestination();
//                 synths.push(synth);
//                 //schedule all of the events
//                 track.notes.forEach((note) => {
//                     synth.triggerAttackRelease(
//                         note.name,
//                         note.duration,
//                         note.time + now,
//                         note.velocity
//                     );
//                 });
//             });
//         } else {
//             //dispose the synth and make a new one
//             while (synths.length) {
//                 const synth = synths.shift();
//                 synth.disconnect();
//             }
//         }
//     });
