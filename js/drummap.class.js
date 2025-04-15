class DrumMap {
    constructor() {
        this._elements = {
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


        this._GPmap = {
            "Snare rim shot": 91,
            "Snare Hit": 38,
            "Snare side stick": 37,
            "HH closed": 42,
            "HH half": 92,
            "HH open": 46,
            "Pedal HH ": 44,
            "Kick1": 35,
            "Kick2": 36,
            "High Floor Tom": 50,
            "High Tom": 48,
            "Mid Tom": 47,
            "Low Tom": 45,
            "Very Low Tom": 43,
            "Ride edge": 93,
            "Ride middle": 51,
            "Ride bell": 53,
            "Splash": 55,
            "China": 52,
            "Crash high": 49,
            "Crash medium": 57,
            "Cowbell low": 99,
            "Cowbell medium": 56,
            "Cowbell high": 102
        }

        this._EZmap = {
            "Snare rim shot": 38,
            "Snare Hit": [40,39],
            "Snare side stick": null,
            "HH closed": [21,22],
            "HH half": 25,
            "HH open": 24,
            "Pedal HH ": null,
            "Kick1": 35,
            "Kick2": 36,
            "High Floor Tom": 41,
            "High Tom": 48,
            "Mid Tom": 47,
            "Low Tom": 45,
            "Very Low Tom": 43,
            "Ride edge": null,
            "Ride middle": 51,
            "Ride bell": null,
            "Splash": null,
            "China": 32,
            "Crash high": [27,28, 29],
            "Crash medium": [30,31],
            "Cowbell low": null,
            "Cowbell medium": null,
            "Cowbell high": null
        }
    }

    setElement(element, input, output) {
        this._elements[element].in = input;
        this._elements[element].out = output;
    }

    getElement(element) {
        return this._elements[element];
    }

    get elements(){
        return this._elements;
    }

    mergeMap(input, output) {
        Object.entries(this._elements).forEach(([e, el])=>{
            el.in = (input[e]);
            el.out = (output[e]);
        })

        return this._elements
    }

    get EZmap() {
        return this._EZmap;
    }

    get GPmap() {
        return this._GPmap;
    }

}