class EazyDrummer{
    constructor(){
        this._map = {
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

    get map(){
        return this._map;
    }
}