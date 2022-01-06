function kiem_tra() {
    let chieu_cao = document.getElementById("chieu_cao").value;
    let can_nang = document.getElementById("can_nang").value;
    let bmi = can_nang / (Math.pow(chieu_cao, 2));
    let result = "";

    if (bmi < 16)
        result = "bạn gầy cấp độ III";
    else if (bmi < 17)
        result = "bạn gầy cấp độ II";
    else if (bmi < 18.5)
        result = "bạn gầy cấp độ I";
    else if (bmi < 25)
        result = "bạn bình thường";
    else if (bmi < 30)
        result = "bạn thừa cân";
    else if (bmi < 35)
        result = "bạn béo phì cấp độ I";
    else if (bmi < 40)
        result = "bạn béo phì cấp độ II";
    else
        result = "bạn béo phì cấp độ III";

    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + " " + result;
}