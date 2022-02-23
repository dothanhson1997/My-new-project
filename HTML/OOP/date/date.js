class Date {
    day;
    month;
    year;
    constructor(d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(set_d) {
        this.day = set_d;
    }
    setMonth(set_m) {
        this.month = set_m;
    }
    setYear(set_y) {
        this.year = set_y;
    }
    setDate(d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }
    toString() {
        return this.day + "/" + this.month + "/" + this.year;
    }
}

let date1 = new Date(11, 2, 2022);
let date2 = new Date(12, 2, 2022);

console.log(date1.getDay());
date1.setDay(15);
date2.setDate(16, 2, 2023)
date2.getDay();
date2.getMonth();
date2.getYear();
document.write(date2.toString())