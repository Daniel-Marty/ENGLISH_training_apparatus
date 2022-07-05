var speak = document.getElementById('speak');
var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';
speak.addEventListener('click', function () {
    recognition.start();
    textarea.innerHTML = '...speaking';
})
let outerTranscript = '';
recognition.onresult = function (e) {
    // console.log(e);
    var transcript = e.results[0][0].transcript;
    transcript.innerHTML = transcript;
    textarea.innerHTML = transcript;
    outerTranscript = transcript.toUpperCase();
    isItCorrect();
}
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        input.value = '';
    }
})
input.addEventListener('keydown', isItCorrect);
input.addEventListener('input', () => {
    textarea.innerHTML = input.value;
})

const buttonMain = document.getElementById('main_menu');
const buttonPC = document.getElementById('past__c');
const buttonPrC = document.getElementById('present__c');
const buttonFC = document.getElementById('future__c');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const verbPic = document.getElementById('verbPic');
const mark = document.querySelector('.mark');
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');
const questionWord = document.getElementById('questionWord')
const textAreaBelow = document.getElementById('text_area');
const textAreaQuestion = document.getElementById('textAreaQuestion');
const timeMaker = document.getElementById('timeMarker')

const PrCStyle = 'rgb(19, 246, 49) 0px 0px 4px 10px, yellow 0px 0px 15px 20px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 10px, yellow 0px 0px 15px 20px'
const FCStyle = 'rgb(255, 5, 5) 0px 0px 4px 10px, yellow 0px 0px 15px 20px'


const prompts = document.getElementsByClassName('prompt');

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'me.jpg', 'cat.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let second_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'be.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'draw.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.jpg', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come back.gif', 'have to.gif']
let continuousStylesArray = [PrCStyle, PCStyle, FCStyle]

// function get_random_subject() {
//     random_subject = Math.floor(Math.random() * subject_array.length);
//     selected_image = subject_array[random_subject]
//     document.getElementById('subject').src = `./images-subject/${selected_image}`
// }
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
    random_style = Math.floor(Math.random() * continuousStylesArray.length);
    selected_style = continuousStylesArray[random_style]
    secondVerb.style.boxShadow = selected_style;
    subject.style.boxShadow = selected_style;
    mark.style.boxShadow = selected_style;
}
let hidePrompts = function () {
    for (let i = 0; i < prompts.length; i++) {
        let promptsClasses = prompts[i];
        promptsClasses.classList.add('hidden');
    }
}

let markButton = document.getElementById('mark');
markButton.addEventListener('click', testContinuous)
//   ============================================TEST=================================
let currentSentence = '';
textAreaBelow.addEventListener('click', () => {
    textAreaBelow.style.opacity = '0', textAreaQuestion.style.opacity = '1';
});
textAreaQuestion.addEventListener('click', () => {
    textAreaQuestion.style.opacity = '0', textAreaBelow.style.opacity = '1';
    console.log(currentSentence);
})
function isItCorrect() {
    outerTranscript = input.value;
    // console.log(transcript);
    if (input.value.toUpperCase() == `${currentSentence}`.toUpperCase() || outerTranscript == `${currentSentence}`.toUpperCase()) {
        testContinuous();
        console.log('SUPERFUCK!!');
    }

}

// || 
function testContinuous() {
    let testRandomNumber = Math.floor(Math.random() * 13)
    console.log(testRandomNumber);
    if (testRandomNumber === 0) {
        testPCcallback('', 'she.jpg', '1.png', 'sleep.gif', PrCStyle, 'at the moment', "She is sleeping at the moment"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 1) {
        testPCcallback('', 'he.jpg', '1.png', 'sleep.gif', PCStyle, 'at that moment', "He was sleeping at that moment"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 2) {
        testPCcallback('', 'me.jpg', '1.png', 'sleep.gif', FCStyle, "at 10 tomorrow", "I will be sleeping at 10 tomorrow"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 3) {
        testPCcallback('', 'they.jpg', '3.png', 'argue.gif', PrCStyle, "now", "Are they arguing now"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 4) {
        testPCcallback('', 'they.jpg', '3.png', 'argue.gif', PCStyle, "at 9 yesterday", "Were they arguing at 9"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 5) {
        testPCcallback('', 'they.jpg', '3.png', 'argue.gif', FCStyle, "at 9 tomorrow", "Will they be arguing at 9 tomorrow"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 6) {
        testPCcallback('What', 'you.jpg', '3.png', 'do.gif', PrCStyle, "tonight", "What are you doing tonight"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 7) {
        testPCcallback('What', 'you.jpg', '3.png', 'do.gif', PCStyle, "from 6:30 to 7", "What were you doing from 6:30 to 7"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 8) {
        testPCcallback('Where', 'you.jpg', '3.png', 'go.gif', PrCStyle, "tomorrow", "Where are you going tomorrow"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 9) {
        testPCcallback('Where', 'you.jpg', '3.png', 'go.gif', PCStyle, "at 8 yesterday", "Where were you going at 8 yesterday"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 10) {
        testPCcallback('Where', 'you.jpg', '3.png', 'go.gif', FCStyle, "at 8 tomorrow", "Where will you be going at 8 tomorrow"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 11) {
        testPCcallback('', 'me.jpg', '2.png', 'work.gif', PrCStyle, "today", "I'm not working today"), questionWord.style.opacity = '0'
    } else if (testRandomNumber === 12) {
        testPCcallback('', 'me.jpg', '2.png', 'work.gif', PCStyle, "from 12 till 1 yesterday", "I wasn't working from 12 till 1 yesterday"), questionWord.style.opacity = '0'
    }
}



function testPCcallback(question, who, mark1, verb, style, time, sentence) {
    questionWord.style.opacity = '0';
    questionWord.innerHTML = `${question}`
    timeMarker.style.opacity = '1';
    subject.src = `${subjectFolder}${who}`
    mark.src = `${marksFolder}${mark1}`
    verbPic.src = `${verbsFolder}${verb}`
    secondVerb.style.boxShadow = style
    second_verb_prompt.innerHTML = `${verb.slice(0, -4)}`
    timeMaker.innerHTML = `${time}`
    textAreaBelow.innerHTML = `${sentence}`
    currentSentence = sentence;
}



