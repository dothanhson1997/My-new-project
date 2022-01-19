let arr = ["Nguyễn Văn A", "Nguyễn Văn B"];

function Add() {
    let name = document.getElementById("name").value;
    arr.push(name);
}

function Dp() {
    let list = "";
    for (let i = 0; i < arr.length; i++) {
        list += arr[i] + "<br>";
    }
    document.getElementById("result").innerHTML = list;
}

function Del() {
    arr.pop();
}