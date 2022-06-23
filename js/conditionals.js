const subject = document.getElementById('subject');
const firstVerb = document.getElementById('firstVerbPic');
const secondVerb = document.getElementById('secondVerb');
const secondVerbPic = document.getElementById('secondVerbPic');
const mark1 = document.getElementById('mark1');
const mark2 = document.getElementById('mark2');
const buttonPC = document.getElementById('past__c');
const circles = document.getElementById('circles');
const prompts = document.getElementsByClassName('prompt');
const timeMarkers = document.getElementsByClassName('time_marker');
const circle_zero = document.getElementById('circle_zero');
const circle_first = document.getElementById('circle_first');
const circle_second = document.getElementById('circle_second');
const circle_third = document.getElementById('circle_third');
const circle_mixed = document.getElementById('circle_mixed');
const firstIf = document.getElementById('first_if');
const secondIf = document.getElementById('second_if');
const firstWould = document.getElementById('first_would');
const secondWould = document.getElementById('second_would');
const first_verb_question = document.getElementById('firstVerb_question');
const first_verb_prompt = document.getElementById('firstVerb_prompt');
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PPStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 35px'
const whiteStyle = 'rgb(250, 250, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'

let marks_array = ['1.png', '2.png', '3.png']
let no_question_marks = ['1.png', '2.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Charlie.jpg', 'David.jpg']
let first_verbs_array = ['want.jpg', 'need.gif', 'have to.gif', 'apologize.gif', 'argue.gif', 'be able.gif', 'be angry.gif', 'be annoyed.gif', 'be cold.gif', 'be happy.gif', 'be interested.gif', 'be late.gif', 'be sarcastic.gif', 'be stubborn.gif', 'be tired.gif', 'be young.gif', 'build.gif', 'bring.gif', 'be friends.gif', 'nod.gif',]
let second_verbs_array = ['want.jpg', 'have to.gif', 'throw up.gif', 'get dirty.gif', 'nod.gif', 'write.gif', 'work.gif', 'win.gif', 'walk.gif', 'wait.gif', 'try.gif', 'travel.gif', 'think.gif', 'teach.gif', 'take off clothes.gif', 'swim.gif', 'suggest.gif', 'stay.jpg', 'start talking.gif', 'spin.gif', 'smoke.gif', 'sleep.gif', 'run.gif', 'repeat.gif', 'remind.gif', 'realize.gif', 'read.gif', 'pay.gif', 'panic.gif', 'overtake.gif', 'make coffee.gif', 'make a bed.gif', 'lose weight.gif', 'look for.gif', 'listen.gif', 'like.gif', 'lie.gif', 'let go.gif', 'leave.gif', 'jump.gif', 'interrupt.gif', 'hide.gif', 'hesitate.gif', 'hear.gif', 'go out.gif', 'get fat.gif', 'figure out.gif', 'feel sick.gif', 'disappear.gif', 'fall.gif', 'fart.gif', 'escape.gif', 'drink.gif', 'drive.gif', 'forget.gif', 'deny.gif', 'come.gif', 'come up.gif', 'come back.gif', 'recommend.gif' ]
let first_conditional_styles = [PrSStyle, FSStyle]
let second_conditional_styles = [PSStyle, whiteStyle]
let PC_PSstyles_array = [PCStyle, PSStyle]
let modals_array = ['would', 'could', 'might',]
const processes_array = ['accuse.gif', 'act.gif', 'add.gif', 'admit.gif', 'answer.gif', 'argue.gif', 'ask.gif', 'assist.gif', 'be grumpy.gif', 'be tired.gif', 'beg.gif', 'begin start.gif', 'bite.gif', 'break into.gif', 'bring.gif', 'broadcast.gif', 'build.gif', 'buy.gif', 'call.gif', 'cast.gif', 'catch.gif', 'change.gif', 'chat.gif', 'choose.gif', 'claim.gif', 'clean.gif', 'climb.gif', 'collect.gif', 'come back.gif', 'come in.gif', 'come.gif', 'compensate.jpg', 'complain.gif', 'confess.gif', 'consider.gif', 'cook.gif', 'count.gif', 'create.gif', 'cut.gif', 'debate.gif', 'defend.gif', 'demonstrate.gif', 'deny.gif', 'do ballet.gif', 'do gymnastics.gif', 'draw.gif', 'drink.gif', 'drive.gif', 'eat.gif', 'embrace.gif', 'encourage.gif', 'entertain.gif', 'escape.gif', 'expect.gif', 'experience.gif', 'explain.gif', 'fart.gif', 'feed.gif', 'feel sick.gif', 'fight.gif', 'figure out.gif', 'fly.gif', 'follow.gif', 'gather.gif', 'get dirty.gif', 'get dressed.gif', 'get fat.gif', 'go out.gif', 'greet.gif', 'happen.gif', 'have picnic.gif', 'heat up.gif', 'hesitate.gif', 'hide.gif', 'hold.gif', 'improve.gif', 'inform.gif', 'interrupt.gif', 'jump.gif', 'kill.gif', 'knit.gif', 'lead.gif', 'let go.gif', 'lie on the ground.gif', 'list.gif', 'listen.gif', 'live.gif', 'look for.gif', 'lose weight.gif', 'make a bed.gif', 'make coffee.gif', 'meet.gif', 'mix.gif', 'move.gif', 'nod.gif', 'offer.gif', 'overtake.gif', 'paint the town red.gif', 'paint.gif', 'pass by.gif', 'pay.gif', 'persuade.gif', 'play.gif', 'point out.gif', 'pour.gif', 'protect.gif', 'provide.gif', 'pull.gif', 'pursue.gif', 'push.gif', 'rain.gif', 'reach.gif', 'read.gif', 'record.gif', 'release.gif', 'repeat.gif', 'report.gif', 'represent.gif', 'require.gif', 'resolve.gif', 'ride.gif', 'run out of time.gif', 'run.gif', 'rush.gif', 'save.gif', 'sell.gif', 'separate.gif', 'set.gif', 'shopping.gif', 'sit.gif', 'ski.gif', 'sleep.gif', 'smoke.gif', 'speak.gif', 'spend.gif', 'sping.gif', 'spread.gif', 'stand.gif', 'stay.jpg', 'steal.gif', 'stir.gif', 'study.gif', 'surf the internet.gif', 'swim.gif', 'take off clothes.gif', 'teach.gif', 'tell.gif', 'think.gif', 'throw up.gif', 'travel.gif', 'try.gif', 'unwrap.gif', 'use.gif', 'visit.gif', 'wait.gif', 'walk.gif', 'watch.gif', 'wear.gif', 'whisper.gif', 'work.gif', 'wrap.gif', 'write.gif']
const shortAction_array = ['accuse.gif', 'achieve.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'answer.gif', 'apologize.gif', 'arrive.gif', 'ask.gif', 'assist.gif', 'attract attention.gif', 'be angry.gif', 'be annoyed.gif', 'be cold.gif', 'be happy.gif', 'be interested.gif', 'be late.gif', 'be sarcastic.gif', 'be stubborn.gif', 'be tired.gif', 'begin start.gif', 'bite.gif', 'break into.gif', 'bring.gif', 'buy.gif', 'call.gif', 'can.jpg', 'catch red handed.gif', 'change.gif', 'choose.gif', 'claim.gif', 'clean.gif', 'collapse.gif', 'come back.gif', 'come in.gif', 'come up.gif', 'complain.gif', 'compliment.gif', 'conclude.gif', 'confess.gif', 'consider.gif', 'continue.gif', 'create.gif', 'cross out.gif', 'cut.gif', 'decide.gif', 'defend.gif', 'deny2.gif', 'die.gif', 'disappear.gif', 'discover.gif', 'drop.gif', 'escape.gif', 'explain.gif', 'fall.gif', 'fart.gif', 'feel sick.gif', 'figure out.gif', 'find.gif', 'forget.gif', 'get a present.gif', 'get in.gif', 'give.gif', 'go out.gif', 'happen.gif', 'hear.gif', 'hesitate.gif', 'hide.gif', 'hit2.gif', 'hold.gif', 'hurt.gif', 'include.gif', 'inform.gif', 'interrupt.gif', 'invite.gif', 'jump.gif', 'kill.gif', 'know.gif', 'leave.gif', 'like.gif', 'look.gif', 'lose.gif', 'meet.gif', 'memorize.gif', 'mention.gif', 'miss train.gif', 'move.gif', 'need.gif', 'nod.gif', 'note.gif', 'offer.gif', 'order.gif', 'overtake.gif', 'panic.gif', 'pass by.gif', 'pay.gif', 'point out.gif', 'protect.gif', 'pull.gif', 'punch.gif', 'push.gif', 'put down.gif', 'quit.gif', 'reach.gif', 'read.gif', 'realize.gif', 'recognize.gif', 'recommend.gif', 'release.gif', 'remind.gif', 'reply.gif', 'resolve.gif', 'respond.gif', 'reveal.gif', 'rip off.gif', 'rush.gif', 'save.gif', 'say.gif', 'see.gif', 'select.gif', 'separate.gif', 'show.gif', 'shut.gif', 'sit.gif', 'slice.gif', 'solve.gif', 'spare.gif', 'split.gif', 'stand up get up.gif', 'split.gif', 'start talking.gif', 'steal.gif', 'suggest.gif', 'surprise.gif', 'swallow.gif', 'take off clothes.gif', 'take off plane.gif', 'tell.gif', 'think2.gif', 'throw up.gif', 'throw.gif', 'try.gif', 'turn back.gif', 'turn on.gif', 'twist.gif', 'understand.gif', 'wake.gif', 'want.jpg', 'whisper.gif', 'wrap.gif', 'write.gif']


buttonPC.addEventListener('click', getPCstyle)


function getFirstPCverb() {
    if (firstVerb.style.boxShadow === PCStyle) {
        getVerb(processes_array, firstVerb, verbsFolder, first_verb_prompt)
    }
    getVerb(shortAction_array, firstVerb, verbsFolder, first_verb_prompt);
}
function getSecondPCverb() {
    if (secondVerb.style.boxShadow === PCStyle) {
        getVerb(processes_array, secondVerbPic, verbsFolder, second_verb_prompt)
    }
    getVerb(shortAction_array, firstVerb, verbsFolder, first_verb_prompt);
}
function getPCstyle() {
    getRandomVerbStyle(PC_PSstyles_array, firstVerb); 
    getRandomVerbStyle(PC_PSstyles_array, secondVerb);
    getFirstPCverb();
    getSecondPCverb();
    get_random_subject()
    get_random_mark1();
    get_random_mark2();
}

function getRandomVerbStyle(arraySource, verbID) {
      random_style = Math.floor(Math.random() * arraySource.length);
    selected_style = arraySource[random_style]
    verbID.style.boxShadow = selected_style;
}
function getFirstConditionalStyle() {
    random_style = Math.floor(Math.random() * first_conditional_styles.length);
    selected_style = first_conditional_styles[random_style]
    firstVerb.style.boxShadow = selected_style;
}
function getSecondConditionalStyle() {
    getRandomVerbStyle(second_conditional_styles, firstVerb)
}
function getRandoms(array, ID, folder) {
      random_pic = Math.floor(Math.random() * array.length);
    selected_image = array[random_pic];
    ID.src = `${folder}${selected_image}`
}


function get_random_subject() {
    getRandoms(subject_array, subject, subjectFolder);
}
function get_random_mark1() {
    getRandoms(marks_array, mark1, marksFolder)
}
function get_random_mark2() {
    getRandoms(no_question_marks, mark2, marksFolder)
    
}
function no_question1() {
    getRandoms(no_question_marks, mark1, marksFolder)
}
function no_question2() {
    getRandoms(no_question_marks, mark2, marksFolder)
}
function getVerb(array, ID, source, promptID) {
      random_verb = Math.floor(Math.random() * array.length);
    selected_image = array[random_verb]
    ID.src = `${source}${selected_image}`
       promptID.innerHTML = `${selected_image.slice(0, -4)}`
}
function get_first_verb() {
    getVerb(first_verbs_array, firstVerb, verbsFolder, first_verb_prompt);
}
first_verb_prompt.addEventListener('click', () => {
    first_verb_question.classList.remove('hidden');
    first_verb_prompt.classList.add('hidden')
})

function get_second_verb() {
    getVerb(second_verbs_array, secondVerbPic, verbsFolder, second_verb_prompt);
}
first_verb_question.addEventListener('click', () => {
    first_verb_question.classList.add('hidden');
    first_verb_prompt.style.opacity = 1;
    first_verb_prompt.classList.remove('hidden');
})
second_verb_question.addEventListener('click', () => {
    second_verb_question.classList.add('hidden');
    second_verb_prompt.style.opacity = 1;
    second_verb_prompt.classList.remove('hidden');
})
second_verb_prompt.addEventListener('click', () => {
    second_verb_question.classList.remove('hidden');
    second_verb_prompt.classList.add('hidden')
})
function get_random_modal() {
    random_modal = Math.floor(Math.random() * modals_array.length);
    selected_modal = modals_array[random_modal]
    first_would.innerHTML = `${selected_modal}`,
        second_would.innerHTML = `${selected_modal}`;
}

function zeroStyle() {
    firstVerb.style.boxShadow = PrSStyle;
    secondVerb.style.boxShadow = PrSStyle;
}

let hidePrompts = function() {
    for (prompt of prompts) {
        let promptsClasses = prompt;
        promptsClasses.classList.add('hidden');
    }
}
let hideTimeMarkers = function() {
    for (marker of timeMarkers) {
        let TM_Classes = marker;
        TM_Classes.classList.add('hidden');
    }
}
let whatIsMyStyle = document.querySelector('.boxShadow')
console.log(whatIsMyStyle.style.boxShadow);

circle_zero.addEventListener('click', () => {
    get_random_mark1();
    get_random_mark2();
    get_random_subject();
    get_first_verb();
    get_second_verb();
    zeroStyle();
})
circle_first.addEventListener('click', () => {
    get_random_subject();
    get_first_verb();
    get_second_verb();
    getFirstConditionalStyle();
    firstWould.style.opacity = '0', secondWould.style.opacity = '0';
    if (firstVerb.style.boxShadow == PrSStyle) { secondVerb.style.boxShadow = FSStyle, firstIf.style.opacity = '1', secondIf.style.opacity = '0', get_random_mark2(), no_question1()} 
    else {secondVerb.style.boxShadow = PrSStyle, firstIf.style.opacity = '0', secondIf.style.opacity = '1',get_random_mark1(), no_question2() }
});
circle_second.addEventListener('click', () => {
    get_random_subject();
    get_first_verb();
    get_second_verb();
    getSecondConditionalStyle();
    get_random_modal();
    if (firstVerb.style.boxShadow == PSStyle) {secondVerb.style.boxShadow = whiteStyle, firstWould.style.opacity = '0', firstIf.style.opacity = '1', secondWould.style.opacity = '1', secondIf.style.opacity = '0', get_random_mark2(), no_question1()} 
    else {secondVerb.style.boxShadow = PSStyle, firstIf.style.opacity = '0', secondWould.style.opacity = '0', firstWould.style.opacity = '1', secondIf.style.opacity = '1', get_random_mark1(), no_question2() }
});



