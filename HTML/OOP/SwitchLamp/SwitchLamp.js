class Electriclamp {
    setStatus(status) {
        this.status = status;
    }
    turnOn() {
        if (this.status) {
            alert("Light On");
        }
    }
    turnOff() {
        if (this.status == false) {
            alert("Light Off");
        }
    }
}

class SwitchButton {
    constructor(s, l) {
        this.status = s;
        this.lamp = l;
    }
    conectToLamp(Electriclamp) {
        this.lamp = Electriclamp;
    }
    switchOff() {
        this.status = false;
        this.lamp.setStatus(false);
        this.lamp.turnOff();
    }
    switchOn() {
        this.status = true;
        this.lamp.setStatus(true);
        this.lamp.turnOn();
    }
}
let lamp1 = new Electriclamp();
let switch1 = new SwitchButton(true, lamp1);
switch1.switchOn();
switch1.switchOff();