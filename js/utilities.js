function getInputElementValueAsNumber(id) {
    const inputElementValue = document.getElementById(id).value;
    const inputValueAsNumber = Number(inputElementValue);
    return inputValueAsNumber;
}

function getInputElementValue(id) {
    const inputElementValue = document.getElementById(id).value;
    return inputElementValue;
}

function getTextElementValueAsNumber(id) {
    const textElementValue = document.getElementById(id).innerText;
    const textValueAsNumber = Number(textElementValue);
    return textValueAsNumber;
}

function getTextElementValue(id) {
    const textElementValue = document.getElementById(id).innerText;
    return textElementValue;
}
