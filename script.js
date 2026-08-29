let btn = document.getElementById("calbtn"),
    birthYearInput = document.getElementById("inputBirthYear"),
    result = document.getElementById("result");

let currentYear = new Date().getFullYear();

btn.addEventListener("click", function () {
    let birthYear = birthYearInput.value;
    
    if (birthYear === "") {
        result.textContent = "Please input Your birth year";
        setTimeout(() => result.textContent = "", 3000);
        return;
    }
    
    if (birthYear >= currentYear || birthYear < (currentYear - 100)) {
        result.textContent = "Please input the right birth year";
        setTimeout(() => result.textContent = "", 3000);
        return;
    }

    if (!Number.isInteger(parseFloat(birthYearInput.value))) {
        result.textContent = "Birth year must be a whole number";
        setTimeout(() => result.textContent = "", 3000);setTimeout(() => result.textContent = "", 5000);
        return;
    }
    
    let age = currentYear - Number(birthYear);
    result.textContent = `Your age is ${age}`;
});