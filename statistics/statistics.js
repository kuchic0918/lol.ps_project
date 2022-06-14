const summaryBtn1 = document.querySelectorAll('.summary-button')[0];
const summaryBtn2 = document.querySelectorAll('.summary-button')[1];

summaryBtn1.addEventListener('click', () => {
    summaryBtn1.classList.remove('summary-button-active');
    summaryBtn2.classList.remove('summary-button-active');
    
    summaryBtn1.classList.add('summary-button-active');
})

summaryBtn2.addEventListener('click', () => {
    summaryBtn1.classList.remove('summary-button-active');
    summaryBtn2.classList.remove('summary-button-active');

    summaryBtn2.classList.add('summary-button-active');
})



const whatLv0 = document.querySelectorAll('.what-level')[0];
const whatLv1 = document.querySelectorAll('.what-level')[1];
const whatLv2 = document.querySelectorAll('.what-level')[2];

const skill_seq3 = document.querySelector('#skill-seq3');
const skill_seq6 = document.querySelector('#skill-seq6');
const skill_seq11 = document.querySelector('#skill-seq11');

whatLv0.addEventListener('click', () => {
    whatLv0.classList.remove('what-level-active');
    whatLv1.classList.remove('what-level-active');
    whatLv2.classList.remove('what-level-active');
    whatLv0.classList.add('what-level-active');
    
    skill_seq3.classList.remove('display-block');
    skill_seq6.classList.remove('display-block');
    skill_seq11.classList.remove('display-block');
    skill_seq3.classList.add('display-block');
})

whatLv1.addEventListener('click', () => {
    whatLv0.classList.remove('what-level-active');
    whatLv1.classList.remove('what-level-active');
    whatLv2.classList.remove('what-level-active');
    whatLv1.classList.add('what-level-active');
    
    skill_seq3.classList.remove('display-block');
    skill_seq6.classList.remove('display-block');
    skill_seq11.classList.remove('display-block');
    skill_seq6.classList.add('display-block');
})

whatLv2.addEventListener('click', () => {
    whatLv0.classList.remove('what-level-active');
    whatLv1.classList.remove('what-level-active');
    whatLv2.classList.remove('what-level-active');
    whatLv2.classList.add('what-level-active');
    
    skill_seq3.classList.remove('display-block');
    skill_seq6.classList.remove('display-block');
    skill_seq11.classList.remove('display-block');
    skill_seq11.classList.add('display-block');
})