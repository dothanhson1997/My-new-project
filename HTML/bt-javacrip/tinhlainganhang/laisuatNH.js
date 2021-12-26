let Money =Number(prompt("Nhập số tiền gửi: "));
let interestrate = Number(prompt("Nhập % lãi suất: "));
let n =Number(prompt("Nhập năm: "));
let interest = Money * interestrate;
let PAI = Money + n * interest;
alert("Sau "+ n + " năm số tiền cả gốc lẫn lãi là: " + PAI)

