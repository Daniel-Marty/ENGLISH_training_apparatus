const buttonPrS = document.getElementById('present__s');
const buttonFS = document.getElementById('future__s');
const buttonFC = document.getElementById('future__c');
var speak = document.getElementById('speak');
var textarea = document.getElementById('text_area');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'en-En';
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
})
input.addEventListener('input', ()=> {
    transcript = input.value;
    textarea.innerHTML = input.value;
    // checkTest();
})

const buttonPS = document.getElementById('past__s');
const buttonPrP = document.getElementById('present__p');
const buttonPrC = document.getElementById('present__c');
const buttonPrPC = document.getElementById('present__pc');
const buttonPC = document.getElementById('past__c');

const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const mark = document.querySelector('.mark');
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');

const prompts = document.getElementsByClassName('prompt');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const promptFC = document.getElementById('prompt__f__c');
const promptPS = document.getElementById('prompt__p__s')
const promptPrP = document.getElementById('prompt__pr__p');
const promptPrC = document.getElementById('prompt__pr__c');
const promptPrPC = document.getElementById('prompt__pr__pc');
const promptPC = document.getElementById('prompt__p__c');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PrPStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, black 0px 0px 20px 30px'
const PrCStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const FCStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PrPCStyle = 'rgb(19, 246, 49) 0px 0px 4px 14px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'cat.jpg', 'dog.jpg', 'Charlie.jpg',]
let fifth_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'be.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'draw.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come back.gif', 'have to.gif', 'clean.gif', 'ask.gif', 'be angry.gif', 'be happy.gif', 'look for.gif', 'be late.gif', 'be tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif', 'wait.gif', 'panic.gif', 'live.gif', 'lie.gif', 'meet.gif', 'know.gif', 'argue.gif', 'take off plane.gif', 'take off clothes.gif', 'tell.gif', 'think.gif', 'think2.gif', 'hit.gif', 'hit2.gif', 'arrive.gif', 'agree.gif', 'throw.gif', 'burn.gif', 'fall.gif', 'feel.gif', 'drive.gif', 'call.gif', 'catch.gif', 'travel.gif', 'try.gif', 'explain.gif', 'hurry.gif', 'make a bed.gif', 'make coffee.gif', 'taste.gif', 'teach.gif', 'create.gif', 'make.gif', 'build.gif', 'add.gif', 'admit.gif', 'be able.gif', 'be cold.gif', 'be friends.gif', 'be grumpy.gif', 'advise.gif', 'become.gif', 'beg.gif', 'be interested.gif', 'be sarcastic.gif', 'break into.gif', 'broadcast.gif', 'chat.gif', 'choose.gif', 'climb.gif', 'come up.gif', 'complain.gif', 'compliment.gif', 'confuse.gif', 'count.gif', 'cross out.gif', 'cut.gif', 'decide.gif', 'disappear.gif', 'do ballet.gif', 'do gymnastics.gif', 'entertain.gif', 'feed.gif', 'feel sick.gif', 'fight.gif', 'forget.gif', 'freeze.gif', 'get dressed.gif', 'get fat.gif', 'give.gif', 'go out.gif', 'have picnic.gif', 'heat up.gif', 'hesitate.gif', 'hurt.gif', 'inform.gif', 'invite.gif', 'leave.gif', 'let go.gif', 'list.gif', 'lose weight.gif', 'find.gif', 'get a present.gif', 'unwrap.gif', 'pay.gif', 'sell.gif', 'wrap.gif', 'win.gif', 'welcome.gif']
let fifth_level_styles = [PrSStyle, FSStyle, PSStyle, PrPStyle, PrCStyle, PCStyle, FCStyle, PrPCStyle]

function get_random_subject() {
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}
function get_random_mark() {
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`
}
function fifth_level() {
    random_verb = Math.floor(Math.random() * fifth_level_verbs.length);
    selected_image = fifth_level_verbs[random_verb]
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
    random_style = Math.floor(Math.random() * fifth_level_styles.length);
    selected_style = fifth_level_styles[random_style]
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
    fifth_level();
    hidePrompts();
        console.log('changing the mark');
})

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fifth_level();
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
    fifth_level();
    secondVerb.style.boxShadow = FSStyle;
    subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
})
buttonFC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptFC.classList.remove('hidden');
     get_random_mark();
    get_random_subject();
    fifth_level();
    secondVerb.style.boxShadow = FCStyle;
    subject.style.boxShadow = FCStyle;
    mark.style.boxShadow = FCStyle;
})
buttonPS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px';
    hidePrompts();
    promptPS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fifth_level();
    secondVerb.style.boxShadow = PSStyle;
    subject.style.boxShadow = PSStyle;
    mark.style.boxShadow = PSStyle;
}) 
buttonPrP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, black 0px 0px 20px 30px';
    hidePrompts();
    promptPrP.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fifth_level();
    secondVerb.style.boxShadow = PrPStyle;
    subject.style.boxShadow = PrPStyle;
    mark.style.boxShadow = PrPStyle;
}) 
buttonPrPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, black 0px 0px 0px 21px, yellow 0px 0px 20px 40px';
    hidePrompts();
    promptPrPC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fifth_level();
    secondVerb.style.boxShadow = PrPCStyle;
    subject.style.boxShadow = PrPCStyle;
    mark.style.boxShadow = PrPCStyle;
}) 

buttonPrC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptPrC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fifth_level();
    secondVerb.style.boxShadow = PrCStyle;
    subject.style.boxShadow = PrCStyle;
    mark.style.boxShadow = PrCStyle;
})  
buttonPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptPC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fifth_level();
    secondVerb.style.boxShadow = PCStyle;
    subject.style.boxShadow = PCStyle;
    mark.style.boxShadow = PCStyle;
}) 