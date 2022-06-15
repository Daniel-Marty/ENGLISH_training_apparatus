const buttonPrS = document.getElementById('present__s');
const buttonFS = document.getElementById('future__s');
const buttonPS = document.getElementById('past__s');
const buttonPSTest = document.getElementById('past__s_test');
const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const mark = document.querySelector('.mark');
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');
const input = document.getElementById('input');

const prompts = document.getElementsByClassName('prompt');
const timeMarkers = document.getElementsByClassName('time_marker');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const promptPS = document.getElementById('prompt__p__s')
const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'

var speak = document.getElementById('speak');
var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';

let testSubjectsArray = ['me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg', 'me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg',                       'me.jpg',  'you.jpg', 'she.jpg', 'we.jpg',   'he.jpg', 'she.jpg', 'we.jpg', 'me.jpg',   'he.jpg',   'it.jpg',   'you.jpg', 'me.jpg', 'she.jpg', 'she.jpg']
let testVerbsArray    = ['be.jpg', 'be.jpg', 'be.jpg',  'be.jpg',   'be.jpg', 'be.jpg', 'be.jpg',  'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'can.jpg', 'can.jpg', 'can.jpg', 'want.jpg', 'see.gif', 'do.gif', 'do.gif', 'want.jpg', 'want.jpg', 'want.jpg', 'see.gif', 'see.gif', 'see.gif']
let markTestArr = ['1.png', '1.png','1.png','1.png','1.png','2.png','2.png','3.png','3.png','1.png','1.png','2.png','1.png','3.png','3.png','2.png','3.png','1.png','3.png','2.png','2.png','1.png','2.png','1.png','3.png','3.png','2.png','3.png',]
let testStart = -1;

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    first_level();
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
    first_level();
    secondVerb.style.boxShadow = FSStyle;
    subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
})
buttonPS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px';
    hidePrompts();
    promptPS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    first_level();
    secondVerb.style.boxShadow = PSStyle;
    subject.style.boxShadow = PSStyle;
    mark.style.boxShadow = PSStyle;
}) 

let button = document.getElementById('mark');
button.addEventListener('click', function () {
    randomThree();
    get_random_style();
    hidePrompts();
        console.log('changing the mark');
})

function hideTest() {
    textarea.classList.add('hidden');
    speak.classList.add('hidden');
}


const changePrompt = text => document.getElementById('secondVerb_prompt').innerHTML = `${text}`; 

const changeVerb = verbName => document.getElementById('verb').src = `./images-verbs/${verbName}`


speak.addEventListener('click', function () {
    recognition.start();
    textarea.innerHTML = '...speaking';
}) 
recognition.onresult = function (e) {
    console.log(e);
    var transcript = e.results[0][0].transcript;
    transcript.innerHTML = transcript;
    textarea.innerHTML = transcript;
}
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        input.value = '';
    }
});
input.addEventListener('input', () => {
    transcript = input.value.toUpperCase();
    textarea.innerHTML = input.value;
    checkPSTest();
});

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'cat.jpg', 'dog.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg']
let first_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'be.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'draw.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif']
let first_level_styles = [PrSStyle, FSStyle, PSStyle]

function get_random_subject() {
    hideTest();
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}
function get_random_mark() {
    hideTest();
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`
}

function first_level() {
    random_verb = Math.floor(Math.random() * first_level_verbs.length);
    selected_image = first_level_verbs[random_verb]
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
    hideTest();
    random_style = Math.floor(Math.random() * first_level_styles.length);
    selected_style = first_level_styles[random_style];
    secondVerb.style.boxShadow = selected_style;
    subject.style.boxShadow = selected_style;
    mark.style.boxShadow = selected_style;
}
function hidePrompts () {
    for (let prompt of prompts)
        prompt.classList.add('hidden');
};

function hideTimeMarkers() {
    for (let marker of timeMarkers)
        marker.classList.add('hidden');
};

function hideAllPrompts() {
    hideTimeMarkers();
    hidePrompts();
}
function randomThree (){
 get_random_mark();
    get_random_subject();
    first_level();
}

// ------------------------------------------TEST--------------------------------------

buttonPSTest.addEventListener('click', () => {
    testStart = 0;
    get_TestSubject();
    get_TestVerb();
    get_TestMark();
    hideAllPrompts();
    changePrompt('I was')
         secondVerb.style.boxShadow = PSStyle;
        subject.style.boxShadow = PSStyle;
    mark.style.boxShadow = PSStyle;
      textarea.classList.remove('hidden');
    speak.classList.remove('hidden');
})
function get_TestSubject() {
    if (testStart < testSubjectsArray.length) {
        selected_image = testSubjectsArray[`${testStart}`]
        document.getElementById('subject').src = `./images-subject/${selected_image}`
    }
}
function testForward (){
 speak.style.background = 'rgba(6, 229, 102, 1)';
        testStart += 1;
        get_TestSubject();
        get_TestVerb();
    get_TestMark();
    input.value = ''
}

function get_TestVerb() {
    if (testStart < testVerbsArray.length) {
        selected_image = testVerbsArray[`${testStart}`]
        document.getElementById('verb').src = `./images-verbs/${selected_image}`
        changePrompt(selected_image.slice(0, -4))
    }
}
function get_TestMark() {
    if (testStart < markTestArr.length) {
        selected_image = markTestArr[`${testStart}`]
        document.getElementById('mark').src = `./images-marks/${selected_image}`
    }
}
let markPrS = mark.style.boxShadow;
function checkPSTest() {
    if (testStart === 0 && transcript === "I WAS") {
        testForward()
        changePrompt('he was')
    } else if (testStart === 1 && transcript === 'HE WAS') {
        testForward()
        changePrompt('she was')
    } else if (testStart === 2 && transcript === 'SHE WAS') {
        testForward()
        changePrompt('they were')
    } else if (testStart === 3 && transcript === 'THEY WERE') {
        testForward()
        changePrompt('it was')
    } else if (testStart === 4 && transcript === 'IT WAS') {
        testForward()
        changePrompt("we weren't")
    } else if (testStart === 5 && (transcript === "WE WEREN'T" || transcript === "WE WERE NOT")) {
        testForward()
        changePrompt("you weren't")
    } else if (testStart === 6 && (transcript === "YOU WEREN'T" || transcript === "YOU WERE NOT")) {
        testForward()
        changePrompt('did I have')
    } else if (testStart === 7 && transcript === "DID I HAVE") {
        testForward()
        changePrompt('did he have')
    } else if (testStart === 8 && transcript === "DID HE HAVE") {
        testForward()
        changePrompt('she had')
    } else if (testStart === 9 && transcript === "SHE HAD") {
        testForward()
        changePrompt('they had')
    } else if (testStart === 10 && transcript === "THEY HAD") {
        testForward()
        changePrompt("it did't have")
    } else if (testStart === 11 && (transcript === "IT DIDN'T HAVE" || transcript === "IT DID NOT HAVE")) {
        testForward()
        changePrompt('we had')
    } else if (testStart === 12 && transcript === "WE HAD") {
        testForward()
        changePrompt('did you have')
    } else if (testStart === 13 && transcript === "DID YOU HAVE") {
        testForward()
        changePrompt('did I have')
    } else if (testStart === 14 && transcript === "DID I HAVE") {
        testForward()
        changePrompt("you couldn't")
    } else if (testStart === 15 && (transcript === "YOU COULDN'T" || transcript === 'YOU COULD NOT')) {
        testForward()
        changePrompt('could she')
    } else if (testStart === 16 && transcript === "COULD SHE") {
        testForward()
        changePrompt('we could')
    } else if (testStart === 17 && transcript === "WE COULD") {
        testForward()
        changePrompt('did he want')
    } else if (testStart === 18 && transcript === "DID HE WANT") {
        testForward()
        changePrompt("she didn't see")
    } else if (testStart === 19 && (transcript === "SHE DIDN'T SEE" || transcript === 'SHE DID NOT SEE')) {
        testForward()
        changePrompt("we didn't do")
    } else if (testStart === 20 && (transcript === "WE DIDN'T DO" || transcript === 'WE DID NOT DO')) {
        testForward()
        changePrompt('I did')
    } else if (testStart === 21 && transcript === "I DID") {
        testForward()
        changePrompt("he didn't want")
    } else if (testStart === 22 && (transcript === "HE DIDN'T WANT" || transcript === 'HE DID NOT WANT')) {
        testForward()
        changePrompt('it wanted')
    } else if (testStart === 23 && transcript === "IT WANTED") {
        testForward()
        changePrompt('did you want')
    } else if (testStart === 24 && transcript === "DID YOU WANT") {
        testForward()
        changePrompt('did I see')
    } else if (testStart === 25 && (transcript === "DID I SEE" || transcript === 'DID I C')) {
        testForward()
        changePrompt("she didn't see")
    } else if (testStart === 26 && (transcript === "SHE DIDN'T SEE" || transcript === 'SHE DID NOT SEE')) {
        testForward()
        changePrompt('did she see')
    } else if (testStart === 27 && transcript === "DID SHE SEE") {
        speak.style.background = 'rgba(6, 229, 102, 1)';
        changePrompt('Yay! YOU DID IT!!')
        changeVerb('encourage.gif')
    }
}