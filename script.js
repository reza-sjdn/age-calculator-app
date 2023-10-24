// 1. validate
//    1.1 day input not empty and between 1 and 31
//    1.2 month input not empty and between 1 and 12
//    1.3 year input not empty and must be in the past
// 2. if inputs were valid then calculate

const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

const dayResult = document.getElementById('year-result');
const monthResult = document.getElementById('month-result');
const yearResult = document.getElementById('day-result');


document.getElementById('trigger-btn').addEventListener('click', () => {
    if (!emptyCheck() && !invalidCheck()) calculate();
}, {once: true});


function emptyCheck() {
    let hasEmptyInput = 0;

    const inputs = document.getElementsByTagName('input');

    const messageBox = document.createElement('p');
    const emptyErrorMessage = 'This field is required.';
    const text = document.createTextNode(emptyErrorMessage);
    messageBox.appendChild(text);
    messageBox.classList.add('err-message');

    for (const input of inputs) {
        if (input.value === '') {
            hasEmptyInput = 1;

            input.previousElementSibling.style.color = 'var(--light-red)';
            input.style.borderColor = 'var(--light-red)';
            const copy = messageBox.cloneNode(true);
            input.parentElement.appendChild(copy);
        }
    }

    return hasEmptyInput;
}


function invalidCheck() {
    let hasInvalidInput = 0;

    const inputs = document.getElementsByTagName('input');

    const messageBox = document.createElement('p');
    messageBox.classList.add('err-message');

    if (inputs[0].value != '' &&
        (Number(inputs[0].value) < 1 || Number(inputs[0].value) > 31)) {
        hasInvalidInput = 1;

        inputs[0].previousElementSibling.style.color = 'var(--light-red)';
        inputs[0].style.borderColor = 'var(--light-red)';
        const copy = messageBox.cloneNode(true);
        const text = document.createTextNode(`it's not 1-31`);
        copy.appendChild(text);
        inputs[0].parentElement.appendChild(copy);
    }

    if (inputs[1].value != '' && 
       (Number(inputs[1].value) < 1 || Number(inputs[1].value) > 12)) {
        hasInvalidInput = 1;

        inputs[1].previousElementSibling.style.color = 'var(--light-red)';
        inputs[1].style.borderColor = 'var(--light-red)';
        const copy = messageBox.cloneNode(true);
        const text = document.createTextNode(`it's not 1-12`);
        copy.appendChild(text);
        inputs[1].parentElement.appendChild(copy);
    }

    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();
    if (Number(inputs[2].value) > currentYear) {
        hasInvalidInput = 1;

        inputs[2].previousElementSibling.style.color = 'var(--light-red)';
        inputs[2].style.borderColor = 'var(--light-red)';
        const copy = messageBox.cloneNode(true);
        const text = document.createTextNode(`must be in the past`);
        copy.appendChild(text);
        inputs[2].parentElement.appendChild(copy);
    }

    return hasInvalidInput;
}


function calculate () {
    const currentTime = new Date();
    const birthDate = new Date(Number(yearInput.value),
                               Number(monthInput.value) - 1,
                               Number(dayInput.value));

    let diff = currentTime.getTime() - birthDate.getTime();

    const day = 86400000;
    const month = 30 * day;
    const year = 365 * day;

    yearResult.innerHTML = Math.floor(diff / year);
    diff %= year;
    monthResult.innerHTML = Math.floor(diff / month);
    diff %= month;
    dayResult.innerHTML = Math.floor(diff / day);
}

// document.getElementById('trigger-btn').addEventListener('click', () => {
//     const dayInput = document.getElementById('day-input').value;
//     const monthInput = document.getElementById('month-input').value;
//     const yearInput = document.getElementById('year-input').value;

//     const emptyErrorMessage = 'This field is required.';
//     const invalidDayErrorMessage = 'invalid day';
//     const invalidMonthErrorMessage = 'invalid month';
//     const invalidYearErrorMessage = 'Year must be in the past.';

//     const messageBox = document.createElement('p');
//     const text = document.createTextNode(emptyErrorMessage);
//     messageBox.appendChild(text);


//     // if (dayInput === '') {


//     //     const p = document.createTextNode(emptyErrorMessage);
//     //     messageBox.appendChild(p);
//     //     messageBox.classList.add('err-message')
//     //     document.getElementById('day-input').parentElement.appendChild(messageBox);
//     // }

//     if (monthInput === '') {
//         document.getElementById('month-input-label').style.color = 'var(--light-red)';
//         document.getElementById('month-input').style.borderColor = 'var(--light-red)';

        
//         messageBox.classList.add('err-message')
//         document.getElementById('month-input').parentElement.appendChild(messageBox);
//     }

//     if (yearInput === '') {
//         document.getElementById('year-input-label').style.color = 'var(--light-red)';
//         document.getElementById('year-input').style.borderColor = 'var(--light-red)';

//         const p = document.createTextNode(emptyErrorMessage);
//         messageBox.appendChild(p);
//         messageBox.classList.add('err-message')
//         document.getElementById('year-input').parentElement.appendChild(messageBox);
//     }




//     document.getElementById('year-result').innerHTML = yearResult;
//     document.getElementById('month-result').innerHTML = monthResult;
//     document.getElementById('day-result').innerHTML = dayResult;
// }, {once: true});



