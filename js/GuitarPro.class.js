class GuitarPro{
    constructor(){
        this._map = {
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
    }

    get map(){
        return this._map;
    }
}