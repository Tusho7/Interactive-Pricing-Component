const title = document.getElementById("title");
const slider = document.getElementById("range");
const price = document.getElementById("price");
const desktopPrice = document.getElementById("price-dekstop");
const checkBox = document.getElementById("toggle-input");
const changeColor = document.getElementById("change-color");

changeColor.style.width = "0%";

slider.addEventListener("input", function () {
    calculate();
});

checkBox.addEventListener("change", function () {
    calculate();
});

function calculate() {
    if (slider.value == 1) {
        if (checkBox.checked == true) {
            title.innerHTML = "10K";
            price.innerHTML = "$72.00";
            desktopPrice.innerHTML = "$72.00";
        }
        if (checkBox.checked == false) {
            title.innerHTML = "10K";
            price.innerHTML = "$8.00";
            desktopPrice.innerHTML = "$8.00";
        }
        changeColor.style.width = "0%";
    }
    if (slider.value == 2) {
        if (checkBox.checked == true) {
            title.innerHTML = "50K";
            price.innerHTML = "$108.00";
            desktopPrice.innerHTML = "$108.00";
        }
        if (checkBox.checked == false) {
            title.innerHTML = "50K";
            price.innerHTML = "$12.00";
            desktopPrice.innerHTML = "$12.00";
        }
        changeColor.style.width = "25%";
    }
    if (slider.value == 3) {
        if (checkBox.checked == true) {
            title.innerHTML = "100K";
            price.innerHTML = "$144.00";
            desktopPrice.innerHTML = "$144.00";
        }
        if (checkBox.checked == false) {
            title.innerHTML = "100K";
            price.innerHTML = "$16.00";
            desktopPrice.innerHTML = "$16.00";
        }
        changeColor.style.width = "50%";
    }
    if (slider.value == 4) {
        if (checkBox.checked == true) {
            title.innerHTML = "500K";
            price.innerHTML = "$ 216.00";
            desktopPrice.innerHTML = "$216.00";
        }
        if (checkBox.checked == false) {
            title.innerHTML = "500K";
            price.innerHTML = "$24.00";
            desktopPrice.innerHTML = "$24.00";
        }
        changeColor.style.width = "70%";
    }
    if (slider.value == 5) {
        if (checkBox.checked == true) {
            title.innerHTML = "1M";
            price.innerHTML = "$324.00";
            desktopPrice.innerHTML = "$324.00";
        }
        if (checkBox.checked == false) {
            title.innerHTML = "1M";
            price.innerHTML = "$36.00";
            desktopPrice.innerHTML = "$36.00";
        }
        changeColor.style.width = "100%";
    }

}
