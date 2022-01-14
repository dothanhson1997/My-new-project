let C = prompt("Nhập nhiệt độ: ");
while (C < 20 || C > 100) {
    if (C < 20) {
        alert("Bạn hãy tăng nhiệt độ");
    } else {
        alert("Bạn hãy giảm nhiệt độ");
    }
    C = prompt("Nhập nhiệt độ: ");
}
document.write("Nhiệt độ an toàn");