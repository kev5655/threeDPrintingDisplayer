import {Printable} from "./Printable";

export class TemperaturValue implements Printable {
    private _value: number;
    constructor(value: number) {
        this._value = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    print(): string {
        return String(this._value) + " ºC";
    }

}