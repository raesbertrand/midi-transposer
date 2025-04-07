// const midi = new Midi()

// Start function
const start = async function () {
    const midi = await Midi.fromUrl("midi/Pafoflux_drums.mid");

    // console.log(result);
    // return result;
}

    (async () => {
        // const midi = start();
        start()

        //the file name decoded from the first track
        const name = midi.name

        //get the tracks
        midi.tracks.forEach(track => {
            //tracks have notes and controlChanges
            console.log(track)
            //notes are an array
            const notes = track.notes
            notes.forEach(note => {
                console.log(note)
                //note.midi, note.time, note.duration, note.name
            })

            //the control changes are an object
            //the keys are the CC number
            track.controlChanges[64]
            //they are also aliased to the CC number's common name (if it has one)
            track.controlChanges.sustain.forEach(cc => {
                // cc.ticks, cc.value, cc.time
            })

            //the track also has a channel and instrument
            //track.instrument.name
        })


    })();