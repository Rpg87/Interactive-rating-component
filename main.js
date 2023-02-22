'use strict';

const thankYou = document.querySelector('.thankYou');
const submitButton = document.querySelector('.button');
const valueRating = document.querySelector('.valueRating');
const goBackButton = document.querySelector('.back');


const submitRating = () => {
    const ratingValue = document.querySelectorAll("input[type='radio']:checked")[0]['value'];
    valueRating.innerHTML = `You selected ${ratingValue} out of 5`;
    thankYou.style.display = 'block';
    document.querySelector('.disappear').style.display = 'none';
};

const back = () => {
    document.querySelector('.disappear').style.display = 'block';
    thankYou.style.display = 'none';

}

submitButton.addEventListener('click', submitRating);

goBackButton.addEventListener('click', back);