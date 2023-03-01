function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhonenumber;
    if(isIncrease === true){
        newPhonenumber = previousPhoneNumber + 1;
    }else{
        newPhonenumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhonenumber;

    return newPhonenumber;
};

function updatePhoneTotalPrice(newPhonenumber){
    const phoneTotalPrice = newPhonenumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
};


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhonenumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhonenumber);

    calculateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhonenumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhonenumber);

    calculateSubTotal();
})