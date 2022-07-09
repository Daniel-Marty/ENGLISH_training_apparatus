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
input.addEventListener('input', () => {
    transcript = input.value;
    textarea.innerHTML = input.value;
    // checkTest();
})

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'cat.jpg', 'dog.jpg', 'Charlie.jpg',]
let verbs_array = ['accuse.gif', 'achieve.gif', 'act.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'allow.gif', 'answer.gif', 'apologize.gif', 'argue.gif', 'arrive.gif', 'ask for opinion.gif', 'ask.gif', 'attract attention.gif', 'assist.gif', 'backup.gif', 'bare.gif', 'be able.gif', 'be angry.gif', 'be annoyed.gif', 'be cold.gif', 'be friends.gif', 'be grumpy.gif', 'be happy.gif', 'be interested.gif', 'be late.gif', 'be sarcastic.gif', 'be stubborn.gif', 'be tired.gif', 'be young.gif', 'become.gif', 'be.jpg', 'beg.gif', 'begin start.gif', 'believe.gif', 'bet.gif', 'bite.gif', 'break.gif', 'break into.gif', 'bring.gif', 'broadcast.gif', 'build.gif', 'burn.gif', 'buy.gif', 'call.gif', 'can.jpg', 'cast.gif', 'catch red handed.gif', 'catch.gif', 'challenge.gif', 'change.gif', 'chase.gif', 'chat.gif', 'cheer.gif', 'choose.gif', 'circle.gif', 'claim.gif', 'clean.gif', 'climb.gif', 'collapse.gif', 'collect.gif', 'come.gif', 'come in.gif', 'come up.gif', 'come back.gif', 'comfort.gif', 'compensate.jpg', 'complain.gif', 'compliment.gif', 'comprehend.gif', 'conclude.gif', 'confess.gif', 'confuse.gif', 'consider.gif', 'continue.gif', 'cook.gif', 'count.gif', 'create.gif', 'cross out.gif', 'cry.gif', 'cut.gif', 'dance.gif', 'debate.gif', 'decide.gif', 'defend.gif', 'demonstrate.gif', 'deny.gif', 'deny2.gif', 'develop.gif', 'die.gif', 'disappear.gif', 'discover.gif', 'discuss.gif', 'do.gif', 'do ballet.gif', 'do gymnastics.gif', 'double-cross.gif', 'doubt.gif', 'drink.gif', 'draw.gif', 'drive.gif', 'drop.gif', 'eat.gif', 'embrace.gif', 'encourage.gif', 'entertain.gif', 'escape.gif', 'expect.gif', 'experience.gif', 'explain.gif', 'fall.gif', 'fart.gif', 'feed.gif', 'feel.gif', 'feel sick.gif', 'fight.gif', 'figure out.gif', 'find.gif', 'fly.gif', 'follow.gif', 'forget.gif', 'freeze.gif', 'gather.gif', 'get a present.gif', 'get a shock.gif', 'get dirty.gif', 'get dressed.gif', 'get embarrassed.gif', 'get fat.gif', 'get in.gif', 'get married.gif', 'get promoted.gif', 'give.gif', 'give up.gif', 'go.gif', 'go out.gif', 'greet.gif', 'grow.gif', 'happen.gif', 'have.jpg', 'have picnic.gif', 'have to.gif', 'hear.gif', 'heat up.gif', 'help.gif', 'hesitate.gif', 'hide.gif', 'hit.gif', 'hit2.gif', 'hold.gif', 'hurry.gif', 'hurt.gif', 'improve.gif', 'include.gif', 'inform.gif', 'interrupt.gif', 'invite.gif', 'jump.gif', 'keep.gif', 'kill.gif', 'knit.gif', 'know.gif',
    'lead.gif', 'leave.gif', 'let go.gif', 'lie on the ground.gif', 'lie.gif', 'list.gif', 'listen.gif', 'live.gif', 'look.gif', 'look for.gif', 'lose weight.gif', 'lose.gif', 'make.gif', 'make a bed.gif', 'make coffee.gif', 'meet.gif', 'memorize.gif', 'mention.gif', 'mind.gif', 'miss.gif', 'miss train.gif', 'miss you.gif', "mix.gif", 'move.gif', 'need.gif', 'nod.gif', 'note.gif', 'offer.gif', 'order.gif', 'overtake.gif', 'paint the town red.gif', 'paint.gif', 'panic.gif', 'pass by.gif', 'pass exam.gif', 'pay.gif', 'persuade.gif', 'play.gif', 'point out.gif', 'pour.gif', 'prefer.jpg', 'protect.gif', 'provide.gif', 'pull.gif', 'punch.gif', 'pursue.gif', 'push.gif', 'put down.gif', 'quit.gif', 'rain.gif', 'raise.gif', 'reach.gif', 'read.gif', 'realize.gif', 'recognize.gif', 'recommend.gif', 'record.gif', 'regret.gif', 'release.gif', 'remain.gif', 'remind.gif', 'repeat.gif', 'reply.gif', 'report.gif', 'represent.gif', 'request.gif', 'require.gif', 'resolve.gif', 'respond.gif', 'reveal.gif', 'ride.gif', 'rip off.gif', 'rise.gif', 'run out of time.gif', 'run out of.gif', 'run.gif', 'rush.gif', 'be sarcastic.gif', 'save.gif', 'say.gif', 'see.gif', 'seek.gif', 'select.gif', 'sell.gif', 'separate.gif', 'serve.gif', 'set.gif', 'shopping.gif', 'shout out.gif', 'show true colors.jpg', 'show.gif', 'shut.gif', 'sing.gif', 'sit.gif', 'ski.gif', 'sleep.gif', 'slice.gif', 'smoke.gif', 'solve.gif', 'sorry.gif', 'spare.gif', 'speak.gif', 'spend.gif', 'spin.gif', 'split.gif', 'spread.gif', 'stand for.gif', 'stand up get up.gif', 'stand.gif', 'start talking.gif', 'stay.jpg', 'steal.gif', 'stir.gif', 'study.gif', 'succeed.gif', 'suggest.gif', 'sunstroke.gif', 'surf the internet.gif', 'surprise.gif', 'swallow.gif', 'swim.gif', 'take.gif', 'take off clothes.gif', 'plane take off.gif', 'taste.gif', 'teach.gif', 'tell.gif', 'think.gif', 'think2.gif', 'throw.gif', 'throw up.gif', 'travel.gif', 'trust.gif', 'try.gif', 'turn.gif', 'turn back.gif', 'turn on.gif', 'twist.gif', 'understand.gif', 'unwrap.gif', 'use.gif', 'visit.gif', 'wait.gif', 'wake.gif', 'walk.gif', 'want.jpg', 'warn.gif', 'watch.gif', 'wear.gif', 'welcome.gif', 'whisper.gif', 'win.gif', 'work.gif', 'wrap.gif', 'write.gif']
let there_is_subjects_array = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg']

console.log(verbs_array.indexOf('come in.gif'));
const buttonPrS = document.getElementById('present__s');
const buttonPrC = document.getElementById('present__c');
const buttonPrP = document.getElementById('present__p');
const buttonPrPC = document.getElementById('present__pc');
const buttonPS = document.getElementById('past__s');
const buttonPC = document.getElementById('past__c');
const buttonPP = document.getElementById('past__p');
const buttonPPC = document.getElementById('past__pc');
const buttonFS = document.getElementById('future__s');
const buttonFC = document.getElementById('future__c');
const buttonFP = document.getElementById('future__p');
const buttonFPC = document.getElementById('future__pc');
const buttonThereIs = document.getElementById('button_there_is');
const subject = document.getElementById('subject');
const firstVerb = document.getElementById('firstVerb');
const secondVerb = document.querySelector('.secondVerb');
const thereIs = document.getElementById('there_is');
const mark = document.querySelector('.mark');
const changeBody = document.getElementById('fuckingClick');
const prompts = document.getElementsByClassName('prompt');
const timeMarkers = document.getElementsByClassName('time_marker');

const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');

const promptPrS = document.getElementById('prompt__pr__s')
const promptPrC = document.getElementById('prompt__pr__c');
const promptPrP = document.getElementById('prompt__pr__p');
const promptPrPC = document.getElementById('prompt__pr__pc');
const promptPS = document.getElementById('prompt__p__s')
const promptPC = document.getElementById('prompt__p__c');
const promptPP = document.getElementById('prompt__p__p');
const promptPPC = document.getElementById('prompt__p__pc');
const promptFS = document.getElementById('prompt__f__s');
const promptFC = document.getElementById('prompt__f__c');
const promptFP = document.getElementById('prompt__f__p');
const promptFPC = document.getElementById('prompt__f__pc');

const TM_PrS = document.getElementById('tm__pr__s')
const TM_PrC = document.getElementById('tm__pr__c')
const TM_PrP = document.getElementById('tm__pr__p')
const TM_PrPC = document.getElementById('tm__pr__pc')
const TM_PS = document.getElementById('tm__p__s')
const TM_PC = document.getElementById('tm__p__c')
const TM_PP = document.getElementById('tm__p__p')
const TM_PPC = document.getElementById('tm__p__pc')
const TM_FS = document.getElementById('tm__f__s')
const TM_FC = document.getElementById('tm__f__c')
const TM_FP = document.getElementById('tm__f__p')
const TM_FPC = document.getElementById('tm__f__pc')

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PrPStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, black 0px 0px 20px 30px'
const PrCStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const FCStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PrPCStyle = 'rgb(19, 246, 49) 0px 0px 4px 14px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px'
const PPStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 35px'
const PPCStyle = 'rgb(0, 87, 250) 0px 0px 4px 14px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px'
const FPCStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px'
const FPStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, black 0px 0px 20px 30px'

let sixth_level_styles = [PrSStyle, FSStyle, PSStyle, PrPStyle, PrCStyle, PCStyle, FCStyle, PrPCStyle, PPStyle, PPCStyle, FPCStyle]


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
function get_random_style() {
    random_style = Math.floor(Math.random() * sixth_level_styles.length);
    selected_style = sixth_level_styles[random_style]
    secondVerb.style.boxShadow = selected_style;
    subject.style.boxShadow = selected_style;
    mark.style.boxShadow = selected_style;
}
function get_first_verb() {
    random_verb = Math.floor(Math.random() * first_verbs_array.length);
    selected_image = first_verbs_array[random_verb]
    document.getElementById('second_verb').src = `./images-verbs/${selected_image}`
}
function get_second_verb() {
    random_verb = Math.floor(Math.random() * verbs_array.length);
    selected_image = verbs_array[random_verb]
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

function there_is() {
    random_subject = Math.floor(Math.random() * there_is_subjects_array.length);
    selected_image = there_is_subjects_array[random_subject]
    document.getElementById('threre_is_pic').src = `./images-thereis/${selected_image}`
    hidePrompts();
}

let hidePrompts = function () {
    for (let i = 0; i < prompts.length; i++) {
        let promptsClasses = prompts[i];
        promptsClasses.classList.add('hidden');
    }
}
let hideTimeMarkers = function () {
    for (let i = 0; i < timeMarkers.length; i++) {
        let TM_Classes = timeMarkers[i];
        TM_Classes.classList.add('hidden');
    }
}
function hideAllPrompts() {
    hideAllPrompts()
    hideTimeMarkers();
}
let button = document.getElementById('mark');
button.addEventListener('click', function () {
    get_random_mark();
    get_random_subject();
    get_random_style();
    get_second_verb();
    hidePrompts();
    hideTimeMarkers();
    console.log('changing the mark');
})

// .addEventListener('click', function () {
//     get_random_mark();
//     get_random_subject();
//     get_random_style();
//     get_second_verb();
//     hidePrompts();
//     hideTimeMarkers();
//         console.log('fuck me');
// })

buttonThereIs.addEventListener('click', () => {
    secondVerb.classList.toggle('hidden')
    subject.classList.toggle('hidden');
    thereIs.classList.toggle('hidden');
    mark.style.left = "1050px";
    hidePrompts();
    hideTimeMarkers();
})


buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
    hideTimeMarkers();
    TM_PrS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PrSStyle;
    subject.style.boxShadow = PrSStyle;
    mark.style.boxShadow = PrSStyle;
})


buttonPrC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 20px, yellow 0px 0px 20px 40px';
    hidePrompts();
    promptPrC.classList.remove('hidden');
    hideTimeMarkers();
    TM_PrC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PrCStyle;
    subject.style.boxShadow = PrCStyle;
    mark.style.boxShadow = PrCStyle;
})
buttonPrP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 24px, black 0px 0px 20px 45px';
    hidePrompts();
    promptPrP.classList.remove('hidden');
    hideTimeMarkers();
    TM_PrP.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PrPStyle;
    subject.style.boxShadow = PrPStyle;
    mark.style.boxShadow = PrPStyle;
})
buttonPrPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, black 0px 0px 0px 41px, yellow 0px 0px 20px 60px';
    hidePrompts();
    promptPrPC.classList.remove('hidden');
    hideTimeMarkers();
    TM_PrPC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PrPCStyle;
    subject.style.boxShadow = PrPCStyle;
    mark.style.boxShadow = PrPCStyle;
})
buttonPS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    thereIs.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    hidePrompts();
    promptPS.classList.remove('hidden');
    hideTimeMarkers();
    TM_PS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PSStyle;
    subject.style.boxShadow = PSStyle;
    mark.style.boxShadow = PSStyle;
})
buttonPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptPC.classList.remove('hidden');
    hideTimeMarkers();
    TM_PC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PCStyle;
    subject.style.boxShadow = PCStyle;
    mark.style.boxShadow = PCStyle;
})
buttonPP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 30px';
    hidePrompts();
    promptPP.classList.remove('hidden');
    hideTimeMarkers();
    TM_PP.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PPStyle;
    subject.style.boxShadow = PPStyle;
    mark.style.boxShadow = PPStyle;
})
buttonPPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptPPC.classList.remove('hidden');
    hideTimeMarkers();
    TM_PPC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = PPCStyle;
    subject.style.boxShadow = PPCStyle;
    mark.style.boxShadow = PPCStyle;
})
buttonFS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px';
    hidePrompts();
    promptFS.classList.remove('hidden');
    hideTimeMarkers();
    TM_FS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = FSStyle;
    subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
})
buttonFC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptFC.classList.remove('hidden');
    hideTimeMarkers();
    TM_FC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = FCStyle;
    subject.style.boxShadow = FCStyle;
    mark.style.boxShadow = FCStyle;
})
buttonFP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, black 0px 0px 20px 30px';
    hidePrompts();
    promptFP.classList.remove('hidden');
    hideTimeMarkers();
    TM_FP.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = FPStyle;
    subject.style.boxShadow = FPStyle;
    mark.style.boxShadow = FPStyle;
})
buttonFPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 15px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptFPC.classList.remove('hidden');
    hideTimeMarkers();
    TM_FPC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    get_second_verb();
    secondVerb.style.boxShadow = FPCStyle;
    subject.style.boxShadow = FPCStyle;
    mark.style.boxShadow = FPCStyle;
})



let whatIsMyStyle = document.querySelector('.boxShadow')
console.log(whatIsMyStyle.style.boxShadow);



function conditionals() {
    let circles = document.getElementById('circles');
    let verb = document.getElementById('div');
    firstVerb.classList.toggle("hidden");
    circles.classList.toggle("hidden");
    verb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, rgb(255, 255, 255) 0px 0px 20px 100px';

    console.log('toggle_conditional');
}
