var speak = document.getElementById('speak');
var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';



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
const timeMarkers = document.getElementsByClassName('time_marker');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'

const TM_PrS = document.getElementById('tm__pr__s')
const TM_FS = document.getElementById('tm__f__s')

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg',]
let zero_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'be.jpg', 'do.gif']
let zero_level_styles = [PrSStyle, FSStyle]

let testSubjectsArray = ['me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg', 'me.jpg', 'he.jpg', 'she.jpg', 'they.jpg', 'it.jpg', 'we.jpg', 'you.jpg',                       'me.jpg',  'you.jpg', 'she.jpg', 'we.jpg',   'he.jpg', 'she.jpg', 'we.jpg', 'me.jpg',   'he.jpg',   'it.jpg',   'you.jpg', 'me.jpg', 'she.jpg', 'she.jpg']
let testVerbsArray    = ['be.jpg', 'be.jpg', 'be.jpg',  'be.jpg',   'be.jpg', 'be.jpg', 'be.jpg',  'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'have.jpg', 'can.jpg', 'can.jpg', 'can.jpg', 'want.jpg', 'see.gif', 'do.gif', 'do.gif', 'want.jpg', 'want.jpg', 'want.jpg', 'see.gif', 'see.gif', 'see.gif']
let markTestArr = ['1.png', '1.png','1.png','1.png','1.png','2.png','2.png','3.png','3.png','1.png','1.png','2.png','1.png','3.png','3.png','2.png','3.png','1.png','3.png','2.png','2.png','1.png','2.png','1.png','3.png','3.png','2.png','3.png',]
let testStart = -1;

function hideTest() {
    textarea.classList.add('hidden');
    speak.classList.add('hidden');
}
function get_random_subject() {
    hideTest();
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}
function get_TestSubject() {
    if (testStart < testSubjectsArray.length) {
        selected_image = testSubjectsArray[`${testStart}`]
        document.getElementById('subject').src = `./images-subject/${selected_image}`
    }
}
var verbHTML = document.getElementById('secondVerb_prompt').innerHTML;

function get_TestVerb() {
    if (testStart < testVerbsArray.length) {
        selected_image = testVerbsArray[`${testStart}`]
        document.getElementById('verb').src = `./images-verbs/${selected_image}`
        verbHTML = `${selected_image.slice(0, -4)}`
    }
}
function get_TestMark() {
    if (testStart < markTestArr.length) {
        selected_image = markTestArr[`${testStart}`]
        document.getElementById('mark').src = `./images-marks/${selected_image}`
    }
}
let markPrS = mark.style.boxShadow;

function changePrompt(text) {
    document.getElementById('secondVerb_prompt').innerHTML = `${text}`; 
}

buttonPrSTest.addEventListener('click', () => {
    testStart = 0;
    get_TestSubject();
    get_TestVerb();
    get_TestMark();
    hideAllPrompts();
    changePrompt('I am')
    secondVerb.style.boxShadow = PrSStyle;
    subject.style.boxShadow = PrSStyle;
    mark.style.boxShadow = PrSStyle;
    textarea.classList.remove('hidden');
    speak.classList.remove('hidden');
    
});

buttonFSTest.addEventListener('click', () => {
     testStart = 0;
    get_TestSubject();
    get_TestVerb();
    get_TestMark();
    hideAllPrompts();
    changePrompt('I will be')
         secondVerb.style.boxShadow = FSStyle;
        subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
      textarea.classList.remove('hidden');
    speak.classList.remove('hidden');
})

function testForward (){
 speak.style.background = 'rgba(6, 229, 102, 1)';
        testStart += 1;
        get_TestSubject();
        get_TestVerb();
        get_TestMark();
}
speak.addEventListener('click', function () {
    speak.style.background = 'red';
    recognition.start();
    textarea.innerHTML = '...speaking';
    console.log(testSubjectsArray);
       
}) 
recognition.onresult = function (e) {
    console.log(e);
    var transcript = e.results[0][0].transcript;
    transcript.innerHTML = transcript;
    textarea.innerHTML = transcript;
    if (mark.style.boxShadow === PrSStyle) {
        if (testStart === 0 && transcript === 'I am') {
            testForward()
            changePrompt('he is')
        } else if (testStart === 1 && (transcript === 'he is' || transcript === "his" || transcript === "here's")) {
            testForward()
            changePrompt('she is')
        } else if (testStart === 2 && (transcript === 'she is' || transcript === "she's")) {
            testForward()
            changePrompt('they are')
        } else if (testStart === 3 && transcript === 'they are') {
            testForward()
            changePrompt('it is')
        } else if (testStart === 4 && transcript === 'it is') {
            testForward()
            changePrompt("we aren't")
        } else if (testStart === 5 && (transcript === "we aren't" || transcript === "we are not")) {
            testForward()
            changePrompt("you aren't")
        } else if (testStart === 6 && (transcript === "you aren't" || transcript === "you are not")) {
            testForward()
            changePrompt('do I have')
        } else if (testStart === 7 && (transcript === "do I have" || transcript === "have I")) {
            testForward()
            changePrompt('does he have')
        } else if (testStart === 8 && transcript === "does he have") {
            testForward()
            changePrompt('she has')
        } else if (testStart === 9 && transcript === "she has") {
            testForward()
            changePrompt('they have')
        } else if (testStart === 10 && transcript === "they have") {
            testForward()
            changePrompt("it doesn't have")
        } else if (testStart === 11 && (transcript === "it doesn't have" || transcript === "it does not have")) {
            testForward()
            changePrompt('we have')
        } else if (testStart === 12 && transcript === "we have") {
            testForward()
            changePrompt('do you have')
        } else if (testStart === 13 && transcript === "do you have") {
            testForward()
            changePrompt('do I have')
        } else if (testStart === 14 && transcript === "do I have") {
            testForward()
            changePrompt("you can't")
        } else if (testStart === 15 && (transcript === "you can't" || transcript === 'you cannot' || transcript === 'you can not')) {
            testForward()
            changePrompt('can she')
        } else if (testStart === 16 && (transcript === "can she" || transcript === 'kenshi')) {
            testForward()
            changePrompt('we can')
        } else if (testStart === 17 && (transcript === "we can" || transcript === 'weekend')) {
            testForward()
            changePrompt('does he want')
        } else if (testStart === 18 && transcript === "does he want") {
            testForward()
            changePrompt("she doesn't see")
        } else if (testStart === 19 && (transcript === "she doesn't see" || transcript === 'she does not see')) {
            testForward()
            changePrompt("we don't do")
        } else if (testStart === 20 && (transcript === "we don't do" || transcript === 'we do not do')) {
            testForward()
            changePrompt('I do')
        } else if (testStart === 21 && (transcript === "I do" || transcript === 'idle')) {
            testForward()
            changePrompt("he doesn't want")
        } else if (testStart === 22 && (transcript === "he doesn't want" || transcript === 'he does not want')) {
            testForward()
            changePrompt('it wants')
        } else if (testStart === 23 && (transcript === "it wants" || transcript === 'it once')) {
            testForward()
            changePrompt('do you want')
        } else if (testStart === 24 && transcript === "do you want") {
            testForward()
            changePrompt('do I see')
        } else if (testStart === 25 && (transcript === "do I see" || transcript === 'do i c')) {
            testForward()
            changePrompt("she doesn't see")
        } else if (testStart === 26 && (transcript === "she doesn't see" || transcript === 'she does not see')) {
            testForward()
            changePrompt('does she see')
        } else if (testStart === 27 && transcript === "does she see") {
            speak.style.background = 'rgba(6, 229, 102, 1)';
            changePrompt('Yay! YOU DID IT!!')
            changeVerb('encourage.gif')
        }
    }
            // ___________________________________________________________________________FUTURE________________________
        else if (mark.style.boxShadow === FSStyle) {
            if (testStart === 0 && transcript === 'I will be') {
                testForward()
                changePrompt("he'll be")
            } else if (testStart === 1 && (transcript === "he'll be" || transcript === "he will be" || transcript === "she'll be")) {
                testForward()
                changePrompt("she'll be")
            } else if (testStart === 2 && (transcript === "she'll be" || transcript === "she will be")) {
                testForward()
                changePrompt("they'll be")
            } else if (testStart === 3 && (transcript === 'they will be' || transcript === "they'll be")) {
                testForward()
                changePrompt('it will be')
            } else if (testStart === 4 && (transcript === 'it will be' || transcript === "it'll be")) {
                testForward()
                changePrompt("we won't be")
            } else if (testStart === 5 && (transcript === "we won't be" || transcript === "we will not be")) {
                testForward()
                changePrompt("you won't be")
            } else if (testStart === 6 && (transcript === "you won't be" || transcript === "you will not be")) {
                testForward()
                changePrompt('will I have')
            } else if (testStart === 7 && transcript === "will I have") {
                testForward()
                changePrompt('will he have')
            } else if (testStart === 8 && transcript === "will he have") {
                testForward()
                changePrompt("she'll have")
            } else if (testStart === 9 && (transcript === "she will have" || transcript === "she'll have")) {
                testForward()
                changePrompt("they'll have")
            } else if (testStart === 10 && (transcript === "they'll have" || transcript === 'they will have')) {
                testForward()
                changePrompt("it won't have")
            } else if (testStart === 11 && (transcript === "it won't have" || transcript === "it will not have")) {
                testForward()
                changePrompt("we'll have")
            } else if (testStart === 12 && (transcript === "we'll have" || transcript === 'we will have')) {
                testForward()
                changePrompt('will you have')
            } else if (testStart === 13 && transcript === "will you have") {
                testForward()
                changePrompt('will I have')
            } else if (testStart === 14 && transcript === "will I have") {
                testForward()
                changePrompt("you won't be able")
            } else if (testStart === 15 && (transcript === "you won't be able" || transcript === 'you will not be able')) {
                testForward()
                changePrompt('will she be able')
            } else if (testStart === 16 && transcript === "will she be able") {
                testForward()
                changePrompt("we'll be able")
            } else if (testStart === 17 && (transcript === "we'll be able" || transcript === 'we will be able' || transcript === 'will be able')) {
                testForward()
                changePrompt('will he want')
            } else if (testStart === 18 && transcript === "will he want") {
                testForward()
                changePrompt("she won't see")
            } else if (testStart === 19 && (transcript === "she won't see" || transcript === 'she will not see')) {
                testForward()
                changePrompt("we won't do")
            } else if (testStart === 20 && (transcript === "we won't do" || transcript === 'we will not do')) {
                testForward()
                changePrompt("I'll do")
            } else if (testStart === 21 && (transcript === "I'll do" || transcript === 'I will do')) {
                testForward()
                changePrompt("he won't want")
            } else if (testStart === 22 && (transcript === "he won't want" || transcript === 'he will not want')) {
                testForward()
                changePrompt("it'll want")
            } else if (testStart === 23 && (transcript === "it'll want" || transcript === 'it will want')) {
                testForward()
                changePrompt('will you want')
            } else if (testStart === 24 && transcript === "will you want") {
                testForward()
                changePrompt('will I see')
            } else if (testStart === 25 && transcript === "will I see") {
                testForward()
                changePrompt("she won't see")
            } else if (testStart === 26 && (transcript === "she won't see" || transcript === 'she will not see' || transcript === 'she want see')) {
                testForward()
                changePrompt("will she see")
            } else if (testStart === 27 && transcript === "will she see") {
                speak.style.background = 'rgba(6, 229, 102, 1)';
                changePrompt('Yay! YOU DID IT!!')
                changeVerb('encourage.gif')
            }
        }
}

function get_random_mark() {
    hideTest();
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`

}
function changeVerb(verbName) {
     document.getElementById('verb').src = `./images-verbs/${verbName}`
}
function zero_level() {
    hideTest();
    random_verb = Math.floor(Math.random() * zero_level_verbs.length);
    selected_image = zero_level_verbs[random_verb]
    changeVerb(selected_image)
    // document.getElementById('verb').src = `./images-verbs/${selected_image}`
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
function PrSStyleAll() {
    hideAllPrompts();
    hideTest();
    secondVerb.style.boxShadow = PrSStyle;
    subject.style.boxShadow = PrSStyle;
    mark.style.boxShadow = PrSStyle;
    TM_PrS.classList.remove('hidden')
    promptPrS.classList.remove('hidden');
}
function FSStyleAll() {
    hideAllPrompts();
    hideTest();
    secondVerb.style.boxShadow = FSStyle;
    subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
    TM_FS.classList.remove('hidden')
    promptFS.classList.remove('hidden');
}
let hidePrompts = function() {
    for (let i = 0; i < prompts.length; i++) {
        let promptsClasses = prompts[i];
        promptsClasses.classList.add('hidden');
    }
}
let hideTimeMarkers = function() {
    for (let i = 0; i < timeMarkers.length; i++) {
        let TM_Classes = timeMarkers[i];
        TM_Classes.classList.add('hidden');
    }
}
function hideAllPrompts() {
    hideTimeMarkers();
    hidePrompts();
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
    
    get_random_mark();
    get_random_subject();
    zero_level();
    PrSStyleAll();
})


buttonFS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px';
    FSStyleAll();
    promptFS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    zero_level();
})





