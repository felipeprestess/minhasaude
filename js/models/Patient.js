class Patient {
    constructor(name, glucose, observation) {
        this._name = name;
        this._glucose = glucose;
        this._observation = observation;
    }

    get name() {
        return this._name;
    }

    get glucose() {
        return this._glucose;
    }

    get observation() {
        return this._observation;
    }
}