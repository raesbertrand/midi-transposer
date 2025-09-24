class GuitarPro{
    constructor(){
        this._map = {
            "Cowbell": [56,99,100,101,102,103],
            "Cymbal China 1 Hit": 52,
            "Cymbal China 1 Mute/Choke": 96,
            "Cymbal Crash 1 Hit": 49,
            "Cymbal Crash 1 Mute/Choke": 97,
            "Cymbal Crash 2 Hit": 57,
            "Cymbal Crash 2 Mute/Choke": 98,
            "Cymbal Splash 1 Hit": 55,
            "Cymbal Splash 1 Mute/Choke": 95,
            "Electric Snare Hit": 40,
            "Floortom 1 Hit": 50,
            "Floortom 2 Hit": 41,
            "Hi Hat Closed": 42,
            "Hi Hat Open 1": 92,
            "Hi Hat Open 2": 46,
            "Hi Hat Pedal Close Foot": 44,
            "Kick": 36,
            "Kick Left": 35,
            "Racktom 1 Hit": 48,
            "Racktom 2 Hit": 47,
            "Racktom 3 Hit": 45,
            "Racktom 4 Hit": 43,
            "Ride 1 Bell": [53,127],
            "Ride 1 Bow": [51,126],
            "Ride 1 Edge": [59,93],
            "Ride 1 Mute/Choke": 94,
            "Snare Hit": 38,
            "Snare Rimshot": 91,
            "Snare Sidestick": [31,37]
        }
    }

    get map(){
        return this._map;
    }
}
