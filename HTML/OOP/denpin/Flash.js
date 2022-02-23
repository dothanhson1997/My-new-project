class Batterry {
    constructor() {
        this.energy = 0;
    }
    setEnergy(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}
class FlashLamp {
    constructor(s) {
        this.status = s;
    }
    setBattergy(batterry) {
        this.batterry = batterry;
    }
    getBattergyInfo() {
        return this.batterry.getEnergy();
    }
    light() {
        this.status = true;
        this.batterry.decreaseEnergy();
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}

let batterry = new Batterry();
batterry.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattergy(batterry);

// document.write("Battery info: " + flashLamp.getBattergyInfo() + "<br/>");
// flashLamp.light();

document.write("Turn on <br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info: " + flashLamp.getBattergyInfo() + "<br/>");

// document.write("Turn off <br/>");
// flashLamp.turnOff();
// flashLamp.light();