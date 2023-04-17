const buttonPrS = document.getElementById('present__s');
const buttonFS = document.getElementById('future__s');
const buttonPS = document.getElementById('past__s');
const buttonPSTest = document.getElementById('past__s_test');
const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');
const input = document.getElementById('input');
const firstConnection = document.getElementById('firstConnection');
const questionWord = document.getElementById('questionWord');
const textAreaBelow = document.getElementById('text_area');
const textAreaQuestion = document.getElementById('textAreaQuestion');
const timeMaker = document.getElementById('timeMarker');
const correctAnswersText = document.getElementById('correctAnwers');
const countdown = document.getElementById('countdown');
const flipPic = document.getElementById('flipPic');
const textAreaFeedback = document.getElementById('textAreaFeedback');

const startingMinutes = 5;
let time = startingMinutes * 60;

const prompts = document.getElementsByClassName('prompt');
const timeMarkers = document.getElementsByClassName('time_marker');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const promptPS = document.getElementById('prompt__p__s')
const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'
const flipsFolder = './images-flips/'

var speak = document.getElementById('speak');
var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';

let testSubjectsArray = ['me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg', 'me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg', 'me.jpg', 'you.jpg', 'she.jpg', 'we.jpg', 'he.jpg', 'she.jpg', 'we.jpg', 'me.jpg', 'he.jpg', 'it.jpg', 'you.jpg', 'me.jpg', 'she.jpg', 'she.jpg']
let testVerbsArray = ['be.jpg', 'be.jpg', 'be.jpg', 'be.jpg', 'be.jpg', 'be.jpg', 'be.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'can.jpg', 'can.jpg', 'can.jpg', 'want.jpg', 'see.gif', 'do.gif', 'do.gif', 'want.jpg', 'want.jpg', 'want.jpg', 'see.gif', 'see.gif', 'see.gif']
let markTestArr = ['1.png', '1.png', '1.png', '1.png', '1.png', '2.png', '2.png', '3.png', '3.png', '1.png', '1.png', '2.png', '1.png', '3.png', '3.png', '2.png', '3.png', '1.png', '3.png', '2.png', '2.png', '1.png', '2.png', '1.png', '3.png', '3.png', '2.png', '3.png',]
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
let outerTranscript = '';
recognition.onresult = function (e) {
    console.log(e);
    var transcript = e.results[0][0].transcript;
    transcript.innerHTML = transcript;
    textarea.innerHTML = transcript;
    outerTranscript = transcript.toUpperCase();
    input.value = outerTranscript;
    isItCorrect();
}

input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        input.value = '';
    }
});
input.addEventListener('input', () => {
    transcript = input.value.toUpperCase();
    textAreaFeedback.innerHTML = input.value;
    checkPSTest();
    isItCorrect();
});

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'cat.jpg', 'dog.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg']
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
    document.getElementById('secondVerb_prompt').innerHTML = `${selected_image.slice(0, -4)}`
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
function hidePrompts() {
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
function randomThree() {
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
function testForward() {
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
        document.getElementById('verbPic').src = `./images-verbs/${selected_image}`
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
//   ==========================================COUNTDOWN TIMER=============================

setInterval(updateCountdown, 1000)
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
// ============================================TEST================================
let currentSentence = '';
let totalCorrectSentences = 0;
let button = document.getElementById('mark');
button.addEventListener('click', testSimple)

textAreaBelow.addEventListener('click', () => {
    textAreaBelow.style.opacity = '0', textAreaQuestion.style.opacity = '1';
});
textAreaQuestion.addEventListener('click', () => {
    textAreaQuestion.style.opacity = '0', textAreaBelow.style.opacity = '1';
    console.log(currentSentence);
})
function isItCorrect() {
    console.log(outerTranscript);
    if (input.value.toUpperCase() == `${currentSentence}`.toUpperCase() || outerTranscript == `${currentSentence}`.toUpperCase()) {
        testSimple();
        totalCorrectSentences += 1;
        correctAnswersText.innerHTML = `Correct answers: ${totalCorrectSentences}`;
    }
}

function testSimple() {
    let testRandomNumber = Math.floor(Math.random() * 62)
    console.log(testRandomNumber);
    hidePrompts();
    if (testRandomNumber === 0) {
        testCallback('Usually', 'she.jpg', '', '1.png', 'walk.gif', PrSStyle, 'to school', "Usually she walks to school"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 1) {
        testCallback('Usually', 'he.jpg', '', '2.png', 'cook.gif', PrSStyle, '', "Usually he doesn't cook"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 2) {
        testCallback('', 'he.jpg', '', '1.png', 'cook.gif', PSStyle, ' fish last time', "He cooked fish last time"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 3) {
        testCallback('', 'he.jpg', '', '2.png', 'cook.gif', PSStyle, 'anything yesterday', "He didn't cook anything yesterday"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 4) {
        testCallback('', 'she.jpg', '', '3.png', 'cook.gif', PSStyle, 'anything yesterday', "Did she cook anything yesterday"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 5) {
        testCallback('I promise', 'me.jpg', '', '1.png', 'cook.gif', FSStyle, 'something tomorrow', "I promise I'll cook something tomorrow"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 6) {
        testCallback('', 'me.jpg', '', '1.png', 'cook.gif', PrSStyle, 'from time to time', "I cook from time to time"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 7) {
        testCallback('', 'me.jpg', '', '2.png', 'like.gif', PrSStyle, 'cooking at all', "I don't like cooking at all"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 8) {
        testCallback('', 'she.jpg', '', '3.png', 'like.gif', PrSStyle, 'cooking at all', "Does she like cooking at all"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 9) {
        testCallback('', 'she.jpg', 'never', '1.png', 'like.gif', PSStyle, 'cooking', "She never liked cooking"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 10) {
        testCallback('', 'he.jpg', 'ever', '3.png', 'cry.gif', PrSStyle, '', "Does he ever cry"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 11) {
        testCallback('', 'he.jpg', 'never', '1.png', 'cry.gif', PrSStyle, '', "He never cries"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 12) {
        testCallback('', 'he.jpg', 'never', '1.png', 'fight.gif', PrSStyle, 'at school', "He never fights at school"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 13) {
        testCallback('Can', 'she.jpg', '', '3.png', 'fight.gif', PrSStyle, '', "Can she fight"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 14) {
        testCallback('', 'she.jpg', "can", '2.png', 'fight.gif', PrSStyle, '', "She can't fight"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 15) {
        testCallback('', 'she.jpg', "can", '1.png', 'sing.gif', PrSStyle, '', "She can sing"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 16) {
        testCallback('', 'he.jpg', "can", '1.png', 'sing.gif', PSStyle, 'when he was 9', "He could sing when he was 9"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 17) {
        testCallback('', 'me.jpg', "", '1.png', 'explain.gif', PSStyle, 'twice', "I explained twice"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 18) {
        testCallback('', 'he.jpg', "", '2.png', 'explain.gif', PSStyle, 'anything', "He didn't explain anything"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 18) {
        testCallback('', 'me.jpg', "can", '1.png', 'explain.gif', PrSStyle, 'it', "I can explain it"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 19) {
        testCallback('', 'you.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "You don't need to explain it"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 20) {
        testCallback('', 'you.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "You don't need to explain it"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 21) {
        testCallback('Can', 'you.jpg', "", '3.png', 'explain.gif', PrSStyle, 'it', "Can you explain it"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 22) {
        testCallback('', 'you.jpg', "have to", '1.png', 'do.gif', PrSStyle, 'it', "You have to do it"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 23) {
        testCallback('', 'you.jpg', "have to", '2.png', 'do.gif', PrSStyle, 'it', "You don't have to do it"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 24) {
        testCallback('', 'you.jpg', "", '3.png', 'need.gif', PrSStyle, 'it now', "Do you need it now"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 25) {
        testCallback('', 'you.jpg', "", '3.png', 'need.gif', PrSStyle, 'it now', "Do you need it now"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 26) {
        testCallback('', 'me.jpg', "", '1.png', 'need.gif', PrSStyle, 'your help', "I need your help"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 27) {
        testCallback('', 'she.jpg', "", '2.png', 'need.gif', PrSStyle, 'your help', "She doesn't need your help"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 28) {
        testCallback('', 'she.jpg', "", '1.png', 'need.gif', PSStyle, 'your help yesterday', "She needed your help yesterday"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 29) {
        testCallback('', 'she.jpg', "never", '1.png', 'need.gif', PrSStyle, '', "She never helps"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 30) {
        testCallback('', 'me.jpg', "", '1.png', 'help.gif', FSStyle, '', "I'll help"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 31) {
        testCallback('', 'he.jpg', "usually", '1.png', 'help.gif', PrSStyle, '', "He usually helps"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 32) {
        testCallback('', 'he.jpg', "usually", '1.png', 'go.gif', PrSStyle, 'there on Sundays', "He usually goes there on Sundays"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 33) {
        testCallback('', 'he.jpg', "", '1.png', 'go.gif', PSStyle, 'there a day ago', "He went there a day ago"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 34) {
        testCallback('', 'somebody.jpg', "", '1.png', 'go.gif', FSStyle, 'there some day', "Somebody will go there some day"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 35) {
        testCallback('', 'me.jpg', "", '2.png', 'go.gif', FSStyle, 'there', "I won't go there"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 36) {
        testCallback('', 'she.jpg', "", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 37) {
        testCallback('', 'she.jpg', "", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 38) {
        testCallback('', 'me.jpg', "normally", '1.png', 'drink.gif', PrSStyle, 'coffee in the morning', "I normally drink coffee in the morning"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 39) {
        testCallback('', 'she.jpg', "never", '1.png', 'drink.gif', PrSStyle, 'vodka in the morning', "She never drinks vodka in the morning"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 40) {
        testCallback('There is', 'nobody.jpg', "to", '1.png', 'help.gif', PrSStyle, 'you', "There is nobody to help you"), questionWord.style.opacity = '1', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 41) {
        testCallback('There was', 'nobody.jpg', "to", '1.png', 'help.gif', PSStyle, 'you yesterday', "There was nobody to help you yesterday"), questionWord.style.opacity = '1', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 42) {
        testCallback('', 'somebody.jpg', "", '1.png', 'be.jpg', PSStyle, 'here 5 minutes ago', "Somebody was here 5 minutes ago"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 43) {
        testCallback('', 'it.jpg', "", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 44) {
        testCallback('', 'it.jpg', "", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995"), questionWord.style.opacity = '0', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 45) {
        testCallback('', 'me.jpg', "just", '1.png', 'arrive.gif', PSStyle, 'yesterday', "I just arrived yesterday"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 46) {
        testCallback('When', 'he.jpg', "", '3.png', 'arrive.gif', PSStyle, '', "When did he arrive"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 47) {
        testCallback('I think', 'she.jpg', "", '1.png', 'arrive.gif', FSStyle, 'on Friday', "I think she will arrive on Friday"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 48) {
        testCallback('Where', 'he.jpg', "", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 49) {
        testCallback('Where', 'he.jpg', "", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 50) {
        testCallback('Where', 'she.jpg', "", '3.png', 'work.gif', PrSStyle, '', "Where does she work"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 51) {
        testCallback('I think', 'you.jpg', "", '1.png', 'quit.gif', FSStyle, '', "I think you'll quit"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 52) {
        testCallback('I think', 'she.jpg', "definitely", '1.png', 'tell.gif', FSStyle, 'you', "I think she'll definitely tell you"), questionWord.style.opacity = '1', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 53) {
        testCallback('I think', 'dog.jpg', "surely", '1.png', 'come back.gif', FSStyle, 'to you', "I think the dog will surely come back to you"), questionWord.style.opacity = '1', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 54) {
        testCallback('I think', 'dog.jpg', "", '1.png', 'be.jpg', PSStyle, 'here a moment ago', "I think the dog was here a moment ago"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 55) {
        testCallback('It seems like', 'he.jpg', "", '2.png', 'understand.gif', PrSStyle, 'what his job is', "It seems like he doesn't understand what his job is"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 56) {
        testCallback("It doesn't seem like", 'she.jpg', "", '1.png', 'understand.gif', PrSStyle, "what's going on", "It doesn't seem like she understands what's going on"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 57) {
        testCallback("It doesn't seem like", 'you.jpg', "", '1.png', 'understand.gif', PrSStyle, "what it is", "It doesn't seem like you understand what it is"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 58) {
        testCallback("It doesn't seem like", 'you.jpg', "", '1.png', 'know.gif', PrSStyle, "him", "It doesn't seem like you know him"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 59) {
        testCallback("It seems like", 'she.jpg', "", '2.png', 'can.jpg', PrSStyle, "drive", "It seems like she can't drive"), questionWord.style.opacity = '1', firstConnection.classList.add('hidden');
    } else if (testRandomNumber === 60) {
        testCallback("", 'me.jpg', "can", '2.png', 'hear.gif', PrSStyle, "you", "I can't hear you"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    } else if (testRandomNumber === 61) {
        testCallback("", 'me.jpg', "can", '2.png', 'hear.gif', FSStyle, "you", "I won't be able to hear you"), questionWord.style.opacity = '0', firstConnection.classList.remove('hidden');
    }
}
function testCallback(question, who, connection, mark1, verb, style, time, sentence) {
    questionWord.innerHTML = `${question}`
    subject.src = `${subjectFolder}${who}`
    firstConnection.innerHTML = `${connection}`
    mark.src = `${marksFolder}${mark1}`
    verbPic.src = `${verbsFolder}${verb}`
    secondVerb.style.boxShadow = style
    second_verb_prompt.innerHTML = `${verb.slice(0, -4)}`
    timeMaker.innerHTML = `${time}`
    textAreaBelow.innerHTML = `${sentence}`
    currentSentence = sentence;
}