// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  // Setter Method:
  set temperature(tempC) {
    let tempF = tempC * 9.0 / 5 + 32
    this._temperature = tempF;
  }

  // Getter Method:
  get temperature() {
    let tempC = 5/9 * (this._temperature - 32)
    return tempC;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
