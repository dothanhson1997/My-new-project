class Rectangle {
    chieudai;
    chieurong;
    constructor(cd, cr) {
        this.chieudai = cd;
        this.chieurong = cr;
    }
    getChieudai() {
        return this.chieudai;
    }
    getChieurong() {
        return this.chieurong;
    }
    setDai(set_ChieuDai) {
        this.chieudai = set_ChieuDai;
    }
    setRong(set_ChieuRong) {
        this.chieurong = set_ChieuRong;
    }
    getDientich() {
        return this.chieudai * this.chieurong;
    }
    getChuvi() {
        return (this.chieudai + this.chieurong) * 2;
    }
    toString() {
        return "Diện tích là " + this.getDientich() + " và chu vi là " + this.getChuvi() + "<br>";
    }
}

let HCN1 = new Rectangle(100, 200);
let HCN2 = new Rectangle(10, 20);
HCN1.setDai(300);
HCN1.getChieudai();
let width = HCN1.getChieudai();
let height = HCN1.getChieurong();


// document.write(HCN2.toString());
document.write(HCN1.getChieudai());

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#009933";
ctx.fillRect(100, 100, width, height);