let array_name = Array();
let array_sex = Array();
let array_birthday = Array();
let array_address = Array();
let array_email = Array();
let array_phone = Array();

function Add() {
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let sex = document.getElementById("sex").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    array_name.push(name);
    array_birthday.push(birthday);
    array_sex.push(sex);
    array_address.push(address);
    array_email.push(email);
    array_phone.push(phone);

    if (name == '') {
        alert("Họ và tên không được để trống!!");
    } else if (sex == '') {
        alert("Hãy nhập giới tính!!");
    } else if (address == '') {
        alert("Hãy nhập địa chỉ!!");
    } else if (birthday == '') {
        alert("Hãy nhập ngày sinh của bạn!!");
    } else if (email == '') {
        alert("Chưa nhập Email!!");
    } else if (phone == '') {
        alert("Chưa nhập số điện thoại!!");
    }
}

function Dp() {
    let list = "<th/>";
    for (let i = 0; i < array_name.length; i++) {
        list += "STT " + i + "<br>" + " Tên sinh viên: " + array_name[i] + "<br>" + "Sinh ngày: " + array_birthday[i] + "<br>" + "Giới tính: " + array_sex[i] + "<br>" + "Địa chỉ: " + array_address[i] + "<br>" + "Email: " + array_email[i] + "<br>" + "Điện thoại: " + array_phone[i] + '<input type="button" id="btnUpdate" value="Sửa" onclick="Edit()" />' + "<br/>" + "<br/>";
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
            return;
        } else(value == ''); {
            alert("Không tìm thấy sinh viên này");
        }
    }
}

function Edit() {
    let new_name = Array(prompt("Hãy nhập tên mới"));
    let new_birthday = Array(prompt("Hãy nhập ngày tháng năm sinh mới"));
    let new_sex = Array(prompt("Hãy nhập giới tính"));
    let new_address = Array(prompt("Hãy nhập địa chỉ mới"));
    let new_email = Array(prompt("Hãy nhập email mới"));
    let new_phone = Array(prompt("Hãy nhập số điện thoại mới"));

    array_name.push(new_name);
    array_birthday.push(new_birthday);
    array_sex.push(new_sex);
    array_address.push(new_address);
    array_email.push(new_email);
    array_phone.push(new_phone);

    let new_list = "";
    for (let i = 0; i < new_name.length; i++) {
        new_list += "STT " + i + "<br>" + " Tên sinh viên:" + new_name[i] + "<br>" + "Sinh ngày: " + new_birthday[i] + "<br>" + "Giới tính: " + new_sex[i] + "<br>" + "Địa chỉ: " + new_address[i] + "<br>" + "Email: " + new_email[i] + "<br>" + "Điện thoại: " + new_phone[i] + '<input type="button" id="btnUpdate" value="Sửa" onclick="Edit()" />' + "<br/>" + "<br/>";
    }
    document.getElementById("result").innerHTML = new_list;
}