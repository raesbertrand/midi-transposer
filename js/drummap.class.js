class DrumMap {
    constructor() {
        this._mapElements = {
            "Snare rim shot": { in: null, out: null },
            "Snare Hit": { in: null, out: null },
            "Snare side stick": { in: null, out: null },
            "HH closed": { in: null, out: null },
            "HH half": { in: null, out: null },
            "HH open": { in: null, out: null },
            "Pedal HH ": { in: null, out: null },
            "Kick1": { in: null, out: null },
            "Kick2": { in: null, out: null },
            "High Floor Tom": { in: null, out: null },
            "High Tom": { in: null, out: null },
            "Mid Tom": { in: null, out: null },
            "Low Tom": { in: null, out: null },
            "Very Low Tom": { in: null, out: null },
            "Ride edge": { in: null, out: null },
            "Ride middle": { in: null, out: null },
            "Ride bell": { in: null, out: null },
            "Splash": { in: null, out: null },
            "China": { in: null, out: null },
            "Crash high": { in: null, out: null },
            "Crash high": { in: null, out: null },
            "Crash medium": { in: null, out: null },
            "Cowbell low": { in: null, out: null },
            "Cowbell medium": { in: null, out: null },
            "Cowbell high": { in: null, out: null }
        }
    }

    setMapElement(element, input, output) {
        this._mapElements[element].in = input;
        this._mapElements[element].out = output;
    }

    getMapElement(element) {
        return this._mapElements[element];
    }

    get mapElements() {
        return this._mapElements;
    }

    mergeMap(input, output) {
        Object.entries(this._mapElements).forEach(([e, el]) => {
            el.in = (input[e]);
            el.out = (output[e]);
        })

        return this._mapElements
    }

    searchConversion(inputNote) {
        let output = null
        console.log(this._mapElements)
        Object.entries(this._mapElements).forEach(([label, value]) => {
            console.log(value, label)
            let inputMap = value.in
            // console.log(inputMap, Array.isArray(inputMap),inputMap.find(inputNote))
            if (
                // inputMap == inputNote || 
                (Array.isArray(inputMap) 
                && inputMap.find(inputNote))) {
                    console.log('ok', inputNote, inputMap)
                output = value.out
            }
        })
    }
}