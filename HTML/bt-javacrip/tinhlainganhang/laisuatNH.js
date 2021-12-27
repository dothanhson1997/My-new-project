let Money =Number(prompt("Nhập số tiền vay: "));
let interestrate = Number(prompt("Nhập % lãi suất: "));
let n =Number(prompt("Nhập số năm: "));
let interest = Money * interestrate/100;
let PAI = Money + n * interest;
alert("Sau "+ n + " năm số tiền cả gốc lẫn lãi là: " + PAI + " VNĐ")

