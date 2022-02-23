class Temperature {
    celsius;
    constructor(c) {
        this.celsius = c;
    }
    convertCtoK() {
        return (this.celsius + 273.15) + "K";
    }

    convertCtoF() {
        return (this.celsius * 1.8 + 32) + "F";
    }
}
let tem1 = new Temperature(20);
document.write(tem1.convertCtoF() + "<br>");
document.write(tem1.convertCtoK());
let tem2 = new Temperature(30);