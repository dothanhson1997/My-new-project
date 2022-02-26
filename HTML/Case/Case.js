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
    if (name == '') {
        alert("Họ và tên không được để trống!!");
    } else if (sex == '') {
        alert("Giới tính gì ông nội");
    } else if (address == '') {
        alert("Chưa nhập địa chỉ kìa cha!!");
    } else if (birthday == '') {
        alert("Nhập sinh nhật đi chứ");
    } else if (email == '') {
        alert("Cho xin Email luôn đi");
    } else if (phone == '') {
        alert("Lưu số điện thoại vào nữa");
    }
}

function Dp() {
    let list = "<th/>";
    for (let i = 0; i < array_name.length; i++) {
        list += "STT " + i + "<br>" + " Tên sinh viên:  " + array_name[i] + "<br>" + "Giới tính: " + array_sex[i] + "<br>" + "Sinh ngày: " + array_birthday[i] + "<br>" + "Địa chỉ: " + array_address[i] + "<br>" + "Email: " + array_email[i] + "<br>" + "Điện thoại: " + array_phone[i] + "<br/>" + "<br/>";
    }
    document.getElementById("result").innerHTML = list;
}

function Del() {
    array_name.pop();
}

function Find(value) {
    value = prompt("Nhập tên sinh viên");
    for (let i = 0; i < array_name.length; i++) {
        if (value == array_name[i]) {
            alert("Sinh viên " + array_name[i] + " nằm ở số thứ tự là " + i);
        } else(value == ''); {
            alert("Không tìm thấy sinh viên này");
        }
    }
}