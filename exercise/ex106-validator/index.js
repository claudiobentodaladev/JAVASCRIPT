
const isPhoneNumber = (value = "") => {
    if (value.includes("-")) {
        value = value.split("-").join("")
    }

    if (value.includes(" ")) {
        value = value.split(" ").join("");
    }

    if (value.split("").at(0).includes("+") && value.length >= 7) {
        return true;
    }

    if (value.length != 9) return false;

    const cleaned = value.trim().replaceAll(/[\s\-().]/g, '')
    const regex = /^\+?[1-9]\d{7,14}$/;
    return regex.test(cleaned);
}


console.log(isPhoneNumber("939871104"))
console.log(isPhoneNumber("935-555-500"))
console.log(isPhoneNumber("939 871 104"))

console.log(isPhoneNumber("olamundoa"))
console.log(isPhoneNumber("9398711048"))
console.log(isPhoneNumber("93987110"))

console.log(isPhoneNumber("+356 939871104"))