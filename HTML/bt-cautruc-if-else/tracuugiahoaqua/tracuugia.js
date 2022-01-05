function kt_gia() {
    let name = document.getElementById("Name").value;
    switch (name) {
        case "Ổi":
        case "Dưa hấu":
            document.getElementById("Result").innerHTML = ("20000 VNĐ/kg");
            break;
        case "Táo":
        case "Xoài":
            document.getElementById("Result").innerHTML = ("30000 VNĐ/kg");
            break;
        case "Cam":
        case "Chôm Chôm":
            document.getElementById("Result").innerHTML = ("40000 VNĐ/kg");
            break;
        case "Măng cụt":
            document.getElementById("Result").innerHTML = ("50000 VNĐ/kg");
            break;
        default:
            document.getElementById("Result").innerHTML = ("Vui lòng nhập sản phẩm")
    }
}