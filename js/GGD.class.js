class GGD{
    constructor(){
        this._map = {
            "Snare rim shot": 26,
            "Snare Hit": 26,
            "Snare side stick": 30,
            "HH closed": [43,44],
            "HH half": 47,
            "HH open": 46,
            "Pedal HH ": 48,
            "Kick1": 23,
            "Kick2": 24,
            "High Floor Tom": 35,
            "High Tom": 33,
            "Mid Tom": 34,
            "Low Tom": 35,
            "Very Low Tom": 36,
            "Ride edge": 62,
            "Ride middle": null,
            "Ride bell": 61,
            "Splash": 73,
            "China": 65,
            "Crash high": 52,
            "Crash medium": 54,
            "Cowbell low": null,
            "Cowbell medium": null,
            "Cowbell high": null
        }
    }

    get map(){
        return this._map;
    }
}
