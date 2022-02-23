let array_name = Array();
let array_sex = Array();
let array_birthday = Array();
let array_address = Array();
let array_email = Array();
let array_phone = Array();

function Add() {
    let name = document.getElementById("name").value;
    let sex = document.getElementById("sex").value;
    let address = document.getElementById("address").value;
    let birthday = document.getElementById("birthday").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    array_name.push(name);
    array_sex.push(sex);
    array_address.push(address);
    array_birthday.push(birthday);
    array_email.push(email);
    array_phone.push(phone);
}

function Dp() {
    let list = "<tr>";
    for (let i = 0; i < array_name.length; i++) {
        list += "Tên sinh viên:  " + array_name[i] + "<br>" + "Giới tính: " + array_sex[i] + "<br>" + "Sinh ngày: " + array_birthday[i] + "<br>" + "Địa chỉ: " + array_address[i] + "<br>" + "Email: " + array_email[i] + "<br>" + "Điện thoại: " + array_phone[i] + "<br/>" + "<br/>";
    }
    document.getElementById("result").innerHTML = list;
}

function Del() {
    array_name.pop();
}