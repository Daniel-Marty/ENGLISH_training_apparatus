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
const input = document.getElementById('input');

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
    textarea.classList.add('hidden')
    speak.classList.add('hidden');
}
function get_random_subject() {
    hideTest();
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}

let markPrS = mark.style.boxShadow;

const changePrompt = text => document.getElementById('secondVerb_prompt').innerHTML = `${text}`; 

const changeVerb = verbName => document.getElementById('verb').src = `./images-verbs/${verbName}`

function get_random_mark() {
    hideTest();
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`

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

function randomThree (){
 get_random_mark();
    get_random_subject();
    zero_level();
}

buttonPrS.addEventListener('click', () => {
    PrSStyleAll();
    promptPrS.classList.remove('hidden');
    randomThree();
    
})

buttonFS.addEventListener('click', () => {
    FSStyleAll();
    promptFS.classList.remove('hidden');
    randomThree();
})

// --------------------------------------------TESTS-----TESTS-------------------------------------
function get_TestSubject() {
    if (testStart < testSubjectsArray.length) {
        selected_image = testSubjectsArray[`${testStart}`]
        document.getElementById('subject').src = `./images-subject/${selected_image}`
    }
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
};


function testForward (){
 speak.style.background = 'rgba(6, 229, 102, 1)';
        testStart += 1;
        get_TestSubject();
        get_TestVerb();
    get_TestMark();
    input.value = ''
}
speak.addEventListener('click', function () {
    speak.style.background = 'red';
    recognition.start();
    textarea.innerHTML = '...speaking';
}); 
  recognition.onresult = function (e) {
        console.log(e);
        var transcript = e.results[0][0].transcript;
        transcript.innerHTML = transcript.toUpperCase();
        textarea.innerHTML = transcript.toUpperCase();
       if (secondVerb.style.boxShadow === PrSStyle) {
        checkPrSTest();
    } else {
        checkFSTest();
    }
}
    
const debounce(fn, ms) {
    let timeout
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout)
        timeout = setTimeout(fnCall, ms)
    };
}
function onChangeDebounce(e) {
    console.log('fuck');
}
onChangeDebounce = debounce(onChangeDebounce, 1000);

// input.addEventListener('keydown', function (event) {
//     if (event.code === 'Enter') {
//         input.value = '';
       
//     }
// })
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        input.value = '';
    }
})
input.addEventListener('input', ()=> {
    transcript = input.value.toUpperCase();
    textarea.innerHTML = input.value;
    if (secondVerb.style.boxShadow === PrSStyle) {
        checkPrSTest();
    } else {
        checkFSTest();
    }
} )

function checkPrSTest() {
        if (testStart === 0 && transcript === "I AM") {
            testForward()
            changePrompt('he is')
        } else if (testStart === 1 && (transcript === 'HE IS' || transcript === "HIS" || transcript === "HERE'S")) {
            testForward()
            changePrompt('she is')
        } else if (testStart === 2 && (transcript === 'SHE IS' || transcript === "SHE'S")) {
            testForward()
            changePrompt('they are')
        } else if (testStart === 3 && transcript === 'THEY ARE') {
            testForward()
            changePrompt('it is')
        } else if (testStart === 4 && transcript === 'IT IS') {
            testForward()
            changePrompt("we aren't")
        } else if (testStart === 5 && (transcript === "WE AREN'T" || transcript === "WE ARE NOT")) {
            testForward()
            changePrompt("you aren't")
        } else if (testStart === 6 && (transcript === "YOU AREN'T" || transcript === "YOU ARE NOT")) {
            testForward()
            changePrompt('do I have')
        } else if (testStart === 7 && (transcript === "DO I HAVE" || transcript === "HAVE I")) {
            testForward()
            changePrompt('does he have')
        } else if (testStart === 8 && transcript === "DOES HE HAVE") {
            testForward()
            changePrompt('she has')
        } else if (testStart === 9 && transcript === "SHE HAS") {
            testForward()
            changePrompt('they have')
        } else if (testStart === 10 && transcript === "THEY HAVE") {
            testForward()
            changePrompt("it doesn't have")
        } else if (testStart === 11 && (transcript === "IT DOESN'T HAVE" || transcript === "IT DOES NOT HAVE")) {
            testForward()
            changePrompt('we have')
        } else if (testStart === 12 && transcript === "WE HAVE") {
            testForward()
            changePrompt('do you have')
        } else if (testStart === 13 && transcript === "DO YOU HAVE") {
            testForward()
            changePrompt('do I have')
        } else if (testStart === 14 && transcript === "DO I HAVE") {
            testForward()
            changePrompt("you can't")
        } else if (testStart === 15 && (transcript === "YOU CAN'T" || transcript === 'YOU CANNOT' || transcript === 'YOU CAN NOT')) {
            testForward()
            changePrompt('can she')
        } else if (testStart === 16 && (transcript === "CAN SHE" || transcript === 'KENSHI')) {
            testForward()
            changePrompt('we can')
        } else if (testStart === 17 && (transcript === "WE CAN" || transcript === 'WEEKEND')) {
            testForward()
            changePrompt('does he want')
        } else if (testStart === 18 && transcript === "DOES HE WANT") {
            testForward()
            changePrompt("she doesn't see")
        } else if (testStart === 19 && (transcript === "SHE DOESN'T SEE" || transcript === 'SHE DOES NOT SEE')) {
            testForward()
            changePrompt("we don't do")
        } else if (testStart === 20 && (transcript === "WE DON'T DO" || transcript === 'WE DO NOT DO')) {
            testForward()
            changePrompt('I do')
        } else if (testStart === 21 && (transcript === "I DO" || transcript === 'IDLE')) {
            testForward()
            changePrompt("he doesn't want")
        } else if (testStart === 22 && (transcript === "HE DOESN'T WANT" || transcript === 'HE DOES NOT WANT')) {
            testForward()
            changePrompt('it wants')
        } else if (testStart === 23 && (transcript === "IT WANTS" || transcript === 'IT ONCE')) {
            testForward()
            changePrompt('do you want')
        } else if (testStart === 24 && transcript === "DO YOU WANT") {
            testForward()
            changePrompt('do I see')
        } else if (testStart === 25 && (transcript === "DO I SEE" || transcript === 'DO I C')) {
            testForward()
            changePrompt("she doesn't see")
        } else if (testStart === 26 && (transcript === "SHE DOESN'T SEE" || transcript === 'SHE DOES NOT SEE')) {
            testForward()
            changePrompt('does she see')
        } else if (testStart === 27 && transcript === "DOES SHE SEE") {
            speak.style.background = 'rgba(6, 229, 102, 1)';
            changePrompt('Yay! YOU DID IT!!')
            changeVerb('encourage.gif')
        }
}
    function checkFSTest(){
            if (testStart === 0 && transcript === 'I WILL BE' || transcript === "I'LL BE") {
                testForward()
                changePrompt("he'll be")
            } else if (testStart === 1 && (transcript === "HE'LL BE" || transcript === "HE WILL BE" || transcript === "SHE'LL BE")) {
                testForward()
                changePrompt("she'll be")
            } else if (testStart === 2 && (transcript === "SHE'LL BE" || transcript === "SHE WILL BE")) {
                testForward()
                changePrompt("they'll be")
            } else if (testStart === 3 && (transcript === 'THEY WILL BE' || transcript === "THEY'LL BE")) {
                testForward()
                changePrompt('it will be')
            } else if (testStart === 4 && (transcript === 'IT WILL BE' || transcript === "IT'LL BE")) {
                testForward()
                changePrompt("we won't be")
            } else if (testStart === 5 && (transcript === "WE WON'T BE" || transcript === "WE WILL NOT BE")) {
                testForward()
                changePrompt("you won't be")
            } else if (testStart === 6 && (transcript === "YOU WON'T BE" || transcript === "YOU WILL NOT BE")) {
                testForward()
                changePrompt('will I have')
            } else if (testStart === 7 && transcript === "WILL I HAVE") {
                testForward()
                changePrompt('will he have')
            } else if (testStart === 8 && transcript === "WILL HE HAVE") {
                testForward()
                changePrompt("she'll have")
            } else if (testStart === 9 && (transcript === "SHE WILL HAVE" || transcript === "SHE'LL HAVE")) {
                testForward()
                changePrompt("they'll have")
            } else if (testStart === 10 && (transcript === "THEY'LL HAVE" || transcript === 'THEY WILL HAVE')) {
                testForward()
                changePrompt("it won't have")
            } else if (testStart === 11 && (transcript === "IT WON'T HAVE" || transcript === "IT WILL NOT HAVE")) {
                testForward()
                changePrompt("we'll have")
            } else if (testStart === 12 && (transcript === "WE'LL HAVE" || transcript === 'WE WILL HAVE')) {
                testForward()
                changePrompt('will you have')
            } else if (testStart === 13 && transcript === "WILL YOU HAVE") {
                testForward()
                changePrompt('will I have')
            } else if (testStart === 14 && transcript === "WILL I HAVE") {
                testForward()
                changePrompt("you won't be able")
            } else if (testStart === 15 && (transcript === "YOU WON'T BE ABLE" || transcript === 'YOU WILL NOT BE ABLE')) {
                testForward()
                changePrompt('will she be able')
            } else if (testStart === 16 && transcript === "WILL SHE BE ABLE") {
                testForward()
                changePrompt("we'll be able")
            } else if (testStart === 17 && (transcript === "WE'LL BE ABLE" || transcript === 'WE WILL BE ABLE' || transcript === "WILL BE ABLE")) {
                testForward()
                changePrompt('will he want')
            } else if (testStart === 18 && transcript === "WILL HE WANT") {
                testForward()
                changePrompt("she won't see")
            } else if (testStart === 19 && (transcript === "SHE WON'T SEE" || transcript === 'SHE WILL NOT SEE')) {
                testForward()
                changePrompt("we won't do")
            } else if (testStart === 20 && (transcript === "WE WON'T DO" || transcript === 'WE WILL NOT DO')) {
                testForward()
                changePrompt("I'll do")
            } else if (testStart === 21 && (transcript === "I'LL DO" || transcript === 'I WILL DO')) {
                testForward()
                changePrompt("he won't want")
            } else if (testStart === 22 && (transcript === "HE WON'T WANT" || transcript === 'HE WILL NOT WANT')) {
                testForward()
                changePrompt("it'll want")
            } else if (testStart === 23 && (transcript === "IT'LL WANT" || transcript === 'IT WILL WANT')) {
                testForward()
                changePrompt('will you want')
            } else if (testStart === 24 && transcript === "WILL YOU WANT") {
                testForward()
                changePrompt('will I see')
            } else if (testStart === 25 && transcript === "WILL I SEE") {
                testForward()
                changePrompt("she won't see")
            } else if (testStart === 26 && (transcript === "SHE WON'T SEE" || transcript === 'SHE WILL NOT SEE' || transcript === 'SHE WANT SEE')) {
                testForward()
                changePrompt("will she see")
            } else if (testStart === 27 && transcript === "WILL SHE SEE") {
                speak.style.background = 'rgba(6, 229, 102, 1)';
                changePrompt('Yay! YOU DID IT!!')
                changeVerb('encourage.gif')
            }
    };
