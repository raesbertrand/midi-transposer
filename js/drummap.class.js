class DrumMap {
    constructor() {
        this._mapElements = {
            "Clap": { in: null, out: null },
            "Cowbell": { in: null, out: null },
            "Cymbal China 1 Hit": { in: null, out: null },
            "Cymbal China 1 Mute/Choke": { in: null, out: null },
            "Cymbal Crash 1 Bow Tip": { in: null, out: null },
            "Cymbal Crash 1 Bow Tip Alternative": { in: null, out: null },
            "Cymbal Crash 1 Hit": { in: null, out: null },
            "Cymbal Crash 1 Hit Alternative": { in: null, out: null },
            "Cymbal Crash 1 Mute/Choke": { in: null, out: null },
            "Cymbal Crash 1 Mute/Choke Alternative": { in: null, out: null },
            "Cymbal Crash 2 Bow Tip": { in: null, out: null },
            "Cymbal Crash 2 Bow Tip Alternative": { in: null, out: null },
            "Cymbal Crash 2 Hit": { in: null, out: null },
            "Cymbal Crash 2 Hit Alternative": { in: null, out: null },
            "Cymbal Crash 2 Mute/Choke": { in: null, out: null },
            "Cymbal Crash 2 Mute/Choke Alternative": { in: null, out: null },
            "Cymbal Crash 3 Bell": { in: null, out: null },
            "Cymbal Crash 3 Bow": { in: null, out: null },
            "Cymbal Crash 3 Bow Tip": { in: null, out: null },
            "Cymbal Crash 3 Bow Tip Alternative": { in: null, out: null },
            "Cymbal Crash 3 Hit": { in: null, out: null },
            "Cymbal Crash 3 Hit Alternative": { in: null, out: null },
            "Cymbal Crash 3 Mute/Choke": { in: null, out: null },
            "Cymbal Crash 3 Mute/Choke Alternative": { in: null, out: null },
            "Cymbal Crash 4 Bow Tip": { in: null, out: null },
            "Cymbal Crash 4 Hit": { in: null, out: null },
            "Cymbal Crash 4 Mute/Choke": { in: null, out: null },
            "Cymbal Crash 4 Mute/Choke Alternative": { in: null, out: null },
            "Cymbal Splash 1 Hit": { in: null, out: null },
            "Cymbal Splash 1 Mute/Choke": { in: null, out: null },
            "Cymbal Stack 1 Hit": { in: null, out: null },
            "Electric Snare Hit": { in: null, out: null },
            "Floortom 1 Hit": { in: null, out: null },
            "Floortom 1 Hit Alternative": { in: null, out: null },
            "Floortom 1 Rim": { in: null, out: null },
            "Floortom 1 Rimshot": { in: null, out: null },
            "Floortom 2 Hit": { in: null, out: null },
            "Floortom 2 Hit Alternative": { in: null, out: null },
            "Floortom 2 Rim": { in: null, out: null },
            "Floortom 2 Rimshot": { in: null, out: null },
            "Hi Hat Cc": { in: null, out: null },
            "Hi Hat Cc Edge": { in: null, out: null },
            "Hi Hat Cc Edge Alternative": { in: null, out: null },
            "Hi Hat Cc Tip": { in: null, out: null },
            "Hi Hat Cc Tip Alternative": { in: null, out: null },
            "Hi Hat Closed": { in: null, out: null },
            "Hi Hat Closed Edge": { in: null, out: null },
            "Hi Hat Closed Edge Alternative": { in: null, out: null },
            "Hi Hat Closed Tip": { in: null, out: null },
            "Hi Hat Closed Tip Alternative": { in: null, out: null },
            "Hi Hat Loose": { in: null, out: null },
            "Hi Hat Loose Alternative": { in: null, out: null },
            "Hi Hat Loose Tip": { in: null, out: null },
            "Hi Hat Open 1": { in: null, out: null },
            "Hi Hat Open 1 Tip": { in: null, out: null },
            "Hi Hat Open 2": { in: null, out: null },
            "Hi Hat Open 2 Alternative": { in: null, out: null },
            "Hi Hat Open 2 Tip": { in: null, out: null },
            "Hi Hat Open 3": { in: null, out: null },
            "Hi Hat Open 3 Tip": { in: null, out: null },
            "Hi Hat Open 4": { in: null, out: null },
            "Hi Hat Open 4 Alternative": { in: null, out: null },
            "Hi Hat Open 4 Tip": { in: null, out: null },
            "Hi Hat Open 5": { in: null, out: null },
            "Hi Hat Open 5 Tip": { in: null, out: null },
            "Hi Hat Pedal Close Foot": { in: null, out: null },
            "Hi Hat Pedal Close Foot Alternative": { in: null, out: null },
            "Hi Hat Pedal Splash": { in: null, out: null },
            "Hi Hat Tight Edge": { in: null, out: null },
            "Hi Hat Tight Tip": { in: null, out: null },
            "Kick": { in: null, out: null },
            "Kick Alternative": { in: null, out: null },
            "Kick Left": { in: null, out: null },
            "Racktom 1 Hit": { in: null, out: null },
            "Racktom 1 Rim": { in: null, out: null },
            "Racktom 1 Rimshot": { in: null, out: null },
            "Racktom 2 Hit": { in: null, out: null },
            "Racktom 2 Hit Alternative": { in: null, out: null },
            "Racktom 2 Rim": { in: null, out: null },
            "Racktom 2 Rimshot": { in: null, out: null },
            "Racktom 3 Hit": { in: null, out: null },
            "Racktom 3 Rim": { in: null, out: null },
            "Racktom 3 Rimshot": { in: null, out: null },
            "Racktom 4 Hit": { in: null, out: null },
            "Ride 1 Bell": { in: null, out: null },
            "Ride 1 Bell Alternative": { in: null, out: null },
            "Ride 1 Bow": { in: null, out: null },
            "Ride 1 Bow Tip": { in: null, out: null },
            "Ride 1 Bow Tip Alternative": { in: null, out: null },
            "Ride 1 Edge": { in: null, out: null },
            "Ride 1 Mute/Choke": { in: null, out: null },
            "Ride 1 Mute/Choke Alternative": { in: null, out: null },
            "Shaker": { in: null, out: null },
            "Snare Hit": { in: null, out: null },
            "Snare Hit Alternative": { in: null, out: null },
            "Snare Hit Side": { in: null, out: null },
            "Snare Off": { in: null, out: null },
            "Snare Rim": { in: null, out: null },
            "Snare Rim Alternative": { in: null, out: null },
            "Snare Rimshot": { in: null, out: null },
            "Snare Rimshot Alternative": { in: null, out: null },
            "Snare Sidestick": { in: null, out: null },
            "Snare Sidestick Alternative": { in: null, out: null },
            "Sticks": { in: null, out: null },
            "Tambourine": { in: null, out: null }
        };

        this._cacheConversion = []
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
        var output = null
        let cached = this._cacheConversion[inputNote]
        if (cached) {
            output = cached
            return output
        }
        else {
            Object.entries(this._mapElements).forEach(([label, value]) => {
                let inputMap = value.in
                if (inputMap == inputNote || (Array.isArray(inputMap) && inputMap.indexOf(inputNote) > -1)) {
                    output = value.out
                }
            })
        }
        this._cacheConversion[inputNote] = output
        return output
    }
}
