const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'en-En';
recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
        alert('Хуя се! Ты сказал: ' + result[0].transcript);
    } else {
        console.log('fuck me: ', result[0].transcript);
    }
};
recognizer.start();
const buttonPrS = document.getElementById('present__s');
const buttonPrSTest = document.getElementById('present__s_test');
const buttonFS = document.getElementById('future__s');
const buttonFSTest = document.getElementById('future__s_test');
const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const mark = document.querySelector('.mark');
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');

const prompts = document.getElementsByClassName('prompt');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'


let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg',]
let zero_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'be.jpg', 'do.gif']
let zero_level_styles = [PrSStyle, FSStyle]

let testSubjectsArray = ['me.jpg', 'me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg', 'me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg',                       'me.jpg',  'you.jpg', 'she.jpg', 'we.jpg',   'he.jpg', 'she.jpg', 'we.jpg', 'me.jpg',   'he.jpg',   'it.jpg',   'you.jpg', 'me.jpg', 'she.jpg']
let testVerbsArray    = ['be.jpg', 'be.jpg', 'be.jpg', 'be.jpg',  'be.jpg',   'be.jpg', 'be.jpg', 'be.jpg',  'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'can.jpg', 'can.jpg', 'can.jpg', 'want.jpg', 'see.gif', 'do.gif', 'do.gif', 'want.jpg', 'want.jpg', 'want.jpg', 'see.gif', 'see.gif', 'see.gif']
let markTestArr = ['1.png', '1.png','1.png','1.png','1.png','2.png','2.png','3.png','3.png','1.png','1.png','2.png','1.png','3.png','3.png','2.png','3.png','1.png','3.png','2.png','2.png','1.png','2.png','1.png','3.png','3.png','2.png','1.png','3.png']
let testStart = 0;
function get_random_subject() {
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}
function get_TestSubject() {
    if (testStart < +testSubjectsArray.length) {
        selected_image = testSubjectsArray[`${testStart}`]
        document.getElementById('subject').src = `./images-subject/${selected_image}`
    }
}
function get_TestVerb() {
    if (testStart < +testVerbsArray.length) {
        selected_image = testVerbsArray[`${testStart}`]
        document.getElementById('verb').src = `./images-verbs/${selected_image}`
        document.getElementById('secondVerb_prompt').innerHTML = `${selected_image.slice(0, -4)}`
        
    }
}
function get_TestMark( ) {
    if (testStart < +markTestArr.length) {
        selected_image = markTestArr[`${testStart}`]
        document.getElementById('mark').src = `./images-marks/${selected_image}`
    }
}
buttonPrSTest.addEventListener('click', () => {
    if (testStart < testVerbsArray.length) {
        testStart += 1;
        get_TestSubject();
        get_TestVerb();
        get_TestMark();
        secondVerb.style.boxShadow = PrSStyle;
        subject.style.boxShadow = PrSStyle;
        mark.style.boxShadow = PrSStyle;
    }
})
buttonFSTest.addEventListener('click', () => {
    if (testStart < testVerbsArray.length) {
        testStart += 1;
        get_TestSubject();
        get_TestVerb();
        get_TestMark();
         secondVerb.style.boxShadow = FSStyle;
        subject.style.boxShadow = FSStyle;
        mark.style.boxShadow = FSStyle;
    }
})
buttonFSTest.addEventListener('click', () => {
    // testStart + 1;
    // console.log("shit");
})
function get_random_mark() {
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`

}
function zero_level() {
    random_verb = Math.floor(Math.random() * zero_level_verbs.length);
    selected_image = zero_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
    document.getElementById('secondVerb_prompt').innerHTML = `${selected_image.slice(0,-4)}`
}
second_verb_question.addEventListener('click', () => {
    second_verb_question.classList.add('hidden');
    second_verb_prompt.style.opacity = 1;
    second_verb_prompt.classList.remove('hidden');
})
second_verb_prompt.addEventListener('click', () => {
    second_verb_question.classList.remove('hidden');
    second_verb_prompt.classList.add('hidden')
})
function get_random_style() {
    random_style = Math.floor(Math.random() * zero_level_styles.length);
    selected_style = zero_level_styles[random_style]
    secondVerb.style.boxShadow = selected_style;
    subject.style.boxShadow = selected_style;
    mark.style.boxShadow = selected_style;
}

let hidePrompts = function() {
    for (let i = 0; i < prompts.length; i++) {
        let promptsClasses = prompts[i];
        promptsClasses.classList.add('hidden');
    }
}

let button = document.getElementById('mark');
button.addEventListener('click', function () {
    get_random_mark();
    get_random_subject();
    get_random_style();
    zero_level();
    hidePrompts();
    this.style.boxShadow.trans;
        console.log('changing the mark');
})

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    zero_level();
    secondVerb.style.boxShadow = PrSStyle;
    subject.style.boxShadow = PrSStyle;
    mark.style.boxShadow = PrSStyle;
})


buttonFS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px';
    hidePrompts();
    promptFS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    zero_level();
    secondVerb.style.boxShadow = FSStyle;
    subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
})


