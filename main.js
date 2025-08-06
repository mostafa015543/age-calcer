let day = document.getElementById("input1");
let month = document.getElementById("input2");
let year = document.getElementById("input3");

let btn_day = document.getElementById("day");
let btn_month = document.getElementById("month");
let btn_year = document.getElementById("year");
let btn_zodiac = document.getElementById("zodiac");

let btn_back = document.getElementById("back");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let p = document.getElementById("p")

let today = new Date();



page2.style.display = "none"
btn_day.addEventListener("click", function () {
    if (day.value <= 0 || day.value > 30 || month.value > 12 || month.value <= 0 || year.value <= 0 || year.value > today ||year.value > 1900) {
        alert("day or month or year is false, Try again")
        window.ReferenceError;
        location.reload()
    } else if (!Number.isInteger(day.value ) ||
        !Number.isInteger(month.value) ||
        !Number.isInteger(year.value)) {
        alert("Please enter valid integer values for day, month, and year.");
        location.reload();
    }

    page1.style.display = "none";
    page2.style.display = "block";
    let d = parseInt(day.value);
    let m = parseInt(month.value) - 1;
    let y = parseInt(year.value);

    let birthDate = new Date(y, m, d);

    let diff = today - birthDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    p.textContent = `you have ${days} day`;
});

///////////////////////////////شهووووووووووووووووووووووووور
btn_month.addEventListener("click", function () {
    if (day.value <= 0 || day.value > 30 || month.value > 12 || month.value <= 0 || year.value <= 0 || year.value > today ||year.value > 1900) {
        alert("day or month or year is false, Try again")
        window.ReferenceError;
        location.reload()
    } else if (!Number.isInteger(day.value ) ||
        !Number.isInteger(month.value) ||
        !Number.isInteger(year.value)) {
        alert("Please enter valid integer values for day, month, and year.");
        location.reload();
    }
    page1.style.display = "none";
    page2.style.display = "block";
    let d = parseInt(day.value);
    let m = parseInt(month.value) - 1;
    let y = parseInt(year.value);

    let birthDate = new Date(y, m, d);

    let diff = today - birthDate;

    let months = (today.getFullYear() - y) * 12 + (today.getMonth() - m);

    if (today.getDate() < d) {
        months--;
    }

    p.textContent = `you have ${months} month`;
});


btn_year.addEventListener("click", function () {
    if (day.value <= 0 || day.value > 30 || month.value > 12 || month.value <= 0 || year.value <= 0 || year.value > today ||year.value > 1900) {
        alert("day or month or year is false, Try again")
        window.ReferenceError;
        location.reload()
    } else if (!Number.isInteger(day.value ) ||
        !Number.isInteger(month.value) ||
        !Number.isInteger(year.value)) {
        alert("Please enter valid integer values for day, month, and year.");
        location.reload();
    }
    page1.style.display = "none";
    page2.style.display = "block";

    // قراءة القيم
    const d = parseInt(day.value);
    const m = parseInt(month.value);
    const y = parseInt(year.value);


    const birthDate = new Date(y, m - 1, d);

    let years = today.getFullYear() - y;
    if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) {
        years--;
    }

    p.textContent = `you have ${years} year`;
});
///////////////////////////////////////////////////////////
btn_zodiac.addEventListener("click", function () {
    if (day.value <= 0 || day.value > 30 || month.value > 12 || month.value <= 0 || year.value <= 0 || year.value > today || year.value > 1900) {
        alert("day or month or year is false, Try again")
        window.ReferenceError;
        location.reload()
    } else if (!Number.isInteger(day.value ) ||
        !Number.isInteger(month.value) ||
        !Number.isInteger(year.value)) {
        alert("Please enter valid integer values for day, month, and year.");
        location.reload();
    }
    page1.style.display = "none";
    page2.style.display = "block";
    const d = parseInt(day.value);
    const m = parseInt(month.value);

    let zodiac = "";

    if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) {
        zodiac = "الدلو";
    } else if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) {
        zodiac = "الحوت";
    } else if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) {
        zodiac = "الحمل";
    } else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) {
        zodiac = "الثور";
    } else if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) {
        zodiac = "الجوزاء";
    } else if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) {
        zodiac = "السرطان";
    } else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) {
        zodiac = "الأسد";
    } else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) {
        zodiac = "العذراء";
    } else if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) {
        zodiac = "الميزان";
    } else if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) {
        zodiac = "العقرب";
    } else if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) {
        zodiac = "القوس";
    } else if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) {
        zodiac = "الجدي";
    } else {
        zodiac = "غير معروف";
    }

    p.textContent = `you are a ${zodiac} zodiac`;
});
///////////////////////////////////////////////////////////
btn_back.addEventListener("click", function () {
    page1.style.display = "block"
    page2.style.display = "none"
});