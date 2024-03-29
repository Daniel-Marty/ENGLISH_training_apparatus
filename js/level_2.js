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
    input.value = outerTranscript;
    isItCorrect();
}
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        input.value = '';
    }
})
input.addEventListener('input', () => {
    transcript = input.value.toUpperCase();
    textAreaFeedback.innerHTML = input.value;
    isItCorrect();
});

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

const PrCStyle = 'rgb(19, 246, 49) 0px 0px 4px 10px, yellow 0px 0px 15px 20px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 10px, yellow 0px 0px 15px 20px'
const FCStyle = 'rgb(255, 5, 5) 0px 0px 4px 10px, yellow 0px 0px 15px 20px'


const prompts = document.getElementsByClassName('prompt');

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'
const flipsFolder = './images-flips/'

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

textAreaBelow.addEventListener('click', () => {
    textAreaBelow.style.opacity = '0', textAreaQuestion.style.opacity = '1';
});
textAreaQuestion.addEventListener('click', () => {
    textAreaQuestion.style.opacity = '0', textAreaBelow.style.opacity = '1';
    console.log(currentSentence);
})
// let flipNumber = 0;
// function flipPiChange() {
//     if (flipNumber < 10) {
//         flipPic.src = `${flipsFolder}${flipNumber}.jpg`
//         setInterval(flipPiChange, 2000, flipNumber++)
//         console.log('what the fuck!');
//     }
// }
function isItCorrect() {
    console.log(totalCorrectSentences);
    console.log(outerTranscript);
    if (input.value.toUpperCase() == `${currentSentence}`.toUpperCase() || outerTranscript == `${currentSentence}`.toUpperCase()) {
        testContinuous();
        totalCorrectSentences += 1;
        correctAnswersText.innerHTML = `Correct answers: ${totalCorrectSentences}`;
        // flipPiChange();
    }
}

function testContinuous() {
    let testRandomNumber = Math.floor(Math.random() * 61)
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
        testPCcallback('', 'they.jpg', '3.png', 'argue.gif', PCStyle, "at 9 yesterday", "Were they arguing at 9 yesterday"), questionWord.style.opacity = '0';
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
        testPCcallback('', 'me.jpg', '2.png', 'work.gif', PrCStyle, "today", "I'm not working today"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 12) {
        testPCcallback('', 'me.jpg', '2.png', 'work.gif', PCStyle, "from 12 till 1 yesterday", "I wasn't working from 12 till 1 yesterday"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 13) {
        testPCcallback('', 'nobody.jpg', '1.png', 'cook.gif', PrCStyle, "right now", "Nobody is cooking right now"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 14) {
        testPCcallback('', 'nobody.jpg', '1.png', 'cook.gif', PCStyle, "all week", "Nobody was cooking all week"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 15) {
        testPCcallback('', 'nobody.jpg', '1.png', 'cook.gif', FCStyle, "in the distant future", "Nobody will be cooking in the distant future"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 16) {
        testPCcallback('', 'we.jpg', '2.png', 'come.gif', PrCStyle, "tonight", "We are not coming tonight"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 17) {
        testPCcallback('', 'you.jpg', '3.png', 'come.gif', PrCStyle, "tomorrow", "Are you coming tomorrow"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 18) {
        testPCcallback('', 'you.jpg', '3.png', 'clean.gif', PCStyle, "in the evening", "Were you cleaning in the evening"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 19) {
        testPCcallback('', 'you.jpg', '3.png', 'clean.gif', FCStyle, "in the nearest future", "Will you be cleaning in the nearest future"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 20) {
        testPCcallback('What', 'she.jpg', '3.png', 'draw.gif', PrCStyle, "", "What is she drawing"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 21) {
        testPCcallback('What', 'she.jpg', '3.png', 'draw.gif', PCStyle, "", "What was she drawing"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 22) {
        testPCcallback('What', 'she.jpg', '3.png', 'draw.gif', FCStyle, "", "What will she be drawing"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 23) {
        testPCcallback('What', 'you.jpg', '3.png', 'drink.gif', PrCStyle, "", "What are you drinking"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 24) {
        testPCcallback('What', 'you.jpg', '3.png', 'drink.gif', PCStyle, "", "What were you drinking"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 25) {
        testPCcallback('What', 'you.jpg', '3.png', 'drink.gif', FCStyle, "", "What will you be drinking"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 26) {
        testPCcallback('Why', 'she.jpg', '3.png', 'drive.gif', PrCStyle, "", "Why is she driving"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 27) {
        testPCcallback('Why', 'she.jpg', '3.png', 'drive.gif', PCStyle, "the entire time", "Why was she driving the entire time"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 28) {
        testPCcallback('', 'me.jpg', '1.png', 'eat.gif', PrCStyle, "now", "I'm eating now"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 29) {
        testPCcallback('', 'he.jpg', '1.png', 'eat.gif', PCStyle, "all day", "He was eating all day"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 30) {
        testPCcallback('Maybe', 'he.jpg', '1.png', 'eat.gif', FCStyle, "all day", "Maybe he will be eating all day"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 31) {
        testPCcallback('What', 'she.jpg', '3.png', 'explain.gif', PCStyle, "", "What was she explaining"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 32) {
        testPCcallback('Who', 'she.jpg', '3.png', 'feed.gif', PCStyle, "", "Who was she feeding"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 33) {
        testPCcallback('What', 'you.jpg', '3.png', 'discuss.gif', PCStyle, "yesterday", "What were you discussing yesterday"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 34) {
        testPCcallback('What', 'we.jpg', '3.png', 'discuss.gif', PrCStyle, "these days", "What are we discussing these days"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 35) {
        testPCcallback('', 'nobody.jpg', '1.png', 'discuss.gif', PrCStyle, "you", "Nobody is discussing you"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 36) {
        testPCcallback('', 'me.jpg', '1.png', 'write.gif', PrCStyle, "a letter", "I'm writing a letter"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 37) {
        testPCcallback('', 'she.jpg', '2.png', 'write.gif', PrCStyle, "a letter", "She is not writing a letter"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 38) {
        testPCcallback('', 'he.jpg', '3.png', 'write.gif', PrCStyle, "a letter", "Is he writing a letter"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 39) {
        testPCcallback('', 'they.jpg', '1.png', 'decide.gif', PrCStyle, "now", "They are deciding now"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 40) {
        testPCcallback('What', 'he.jpg', '3.png', 'go.gif', PrCStyle, "to do", "What is he going to do"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 41) {
        testPCcallback('What', 'she.jpg', '3.png', 'go.gif', PrCStyle, "to say", "What is she going to say"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 42) {
        testPCcallback('What', 'you.jpg', '3.png', 'go.gif', PrCStyle, "to do", "What are you going to do"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 43) {
        testPCcallback('What', 'she.jpg', '3.png', 'go.gif', PrCStyle, "to cook", "What is she going to cook"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 44) {
        testPCcallback('Where', 'you.jpg', '3.png', 'go.gif', PrCStyle, "to go", "Where are you going to go"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 45) {
        testPCcallback('Why', 'you.jpg', '3.png', 'come back.gif', PrCStyle, "", "Why are you coming back"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 46) {
        testPCcallback('What', 'we.jpg', '3.png', 'go.gif', PrCStyle, "to do", "What are we going to do"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 47) {
        testPCcallback('Look', 'he.jpg', '1.png', 'do.gif', PrCStyle, "homework", "Look he is doing his homework"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 48) {
        testPCcallback('Listen', 'somebody.jpg', '1.png', 'sing.gif', PrCStyle, "", "Listen somebody is singing"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 49) {
        testPCcallback('Look', 'somebody.jpg', '1.png', 'run.gif', PrCStyle, "over there", "Look somebody is running over there"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 50) {
        testPCcallback('Look', 'it.jpg', '1.png', 'rain.gif', PrCStyle, "", "Look it is raining"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 51) {
        testPCcallback('Look', 'it.jpg', '1.png', 'rain.gif', PrCStyle, "", "Look it is raining"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 52) {
        testPCcallback('', 'she.jpg', '2.png', 'read.gif', PCStyle, "all day", "She wasn't reading all day"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 53) {
        testPCcallback('What', 'you.jpg', '3.png', 'read.gif', PrCStyle, "", "What are you reading"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 54) {
        testPCcallback('Maybe', 'me.jpg', '2.png', 'read.gif', FCStyle, "in the near future", "Maybe I won't be reading in the near future"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 55) {
        testPCcallback('', 'me.jpg', '1.png', 'drink.gif', FCStyle, "tea in the morning", "I will be drinking tea in the morning"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 56) {
        testPCcallback('', 'she.jpg', '1.png', 'read.gif', PCStyle, "the whole evening yesterday", "She was reading the whole evening yesterday"), questionWord.style.opacity = '0';
    } else if (testRandomNumber === 57) {
        testPCcallback('Look', 'cat.jpg', '1.png', 'play.gif', PrCStyle, "with a ball", "Look the cat is playing with a ball"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 58) {
        testPCcallback('Why', 'she.jpg', '3.png', 'cry.gif', PrCStyle, "", "Why is she crying"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 59) {
        testPCcallback('Why', 'she.jpg', '3.png', 'cry.gif', PCStyle, "", "Why was she crying"), questionWord.style.opacity = '1';
    } else if (testRandomNumber === 60) {
        testPCcallback("He isn't here", 'he.jpg', '1.png', 'do.gif', PrCStyle, "his homework", "He isn't here he is doing his homework"), questionWord.style.opacity = '1';
    }
}



function testPCcallback(question, who, mark1, verb, style, time, sentence) {
    questionWord.innerHTML = `${question}`
    subject.src = `${subjectFolder}${who}`
    mark.src = `${marksFolder}${mark1}`
    verbPic.src = `${verbsFolder}${verb}`
    secondVerb.style.boxShadow = style
    second_verb_prompt.innerHTML = `${verb.slice(0, -4)}`
    timeMaker.innerHTML = `${time}`
    textAreaBelow.innerHTML = `${sentence}`
    currentSentence = sentence;
}



