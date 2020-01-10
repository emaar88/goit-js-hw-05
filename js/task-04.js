'use strict';
class StringBuilder
{
    constructor(_value)
    {
        this._value = _value;
    }
    get value()
    {
        return this._value;
    }
    append(string)
    {
        return this._value = this._value.concat(string);
    }
    prepend(string)
    {
        return this._value = string.concat(this._value)
    }
    pad(string)
    {
        return this._value = string.concat(this._value).concat(string)
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
