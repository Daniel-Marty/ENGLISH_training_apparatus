const subject = document.getElementById('subject');
const secondSubject = document.getElementById('subject2');
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
const textAreaBelow = document.getElementById('text_area')
const textAreaQuestion = document.getElementById('textAreaQuestion')

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 10px, yellow 0px 0px 20px 20px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 12px, white 0px 0px 20px 35px'
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

speak.style.opacity = '0';
speak.classList.add('hidden');

    
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

let hidePrompts = function () {
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
// let whatIsMyStyle = document.querySelector('.boxShadow')
// console.log(whatIsMyStyle.style.boxShadow);

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

// ========================================TEST PC========================================
const processes_array = ['accuse.gif', 'act.gif', 'add.gif', 'admit.gif', 'answer.gif', 'argue.gif', 'ask.gif', 'assist.gif', 'be grumpy.gif', 'be tired.gif', 'beg.gif', 'begin start.gif', 'bite.gif', 'break into.gif', 'bring.gif', 'broadcast.gif', 'build.gif', 'buy.gif', 'call.gif', 'cast.gif', 'catch.gif', 'change.gif', 'chat.gif', 'choose.gif', 'claim.gif', 'clean.gif', 'climb.gif', 'collect.gif', 'come back.gif', 'come in.gif', 'come.gif', 'compensate.jpg', 'complain.gif', 'confess.gif', 'consider.gif', 'cook.gif', 'count.gif', 'create.gif', 'cut.gif', 'debate.gif', 'defend.gif', 'demonstrate.gif', 'deny.gif', 'do ballet.gif', 'do gymnastics.gif', 'draw.gif', 'drink.gif', 'drive.gif', 'eat.gif', 'embrace.gif', 'encourage.gif', 'entertain.gif', 'escape.gif', 'expect.gif', 'experience.gif', 'explain.gif', 'fart.gif', 'feed.gif', 'feel sick.gif', 'fight.gif', 'figure out.gif', 'fly.gif', 'follow.gif', 'gather.gif', 'get dirty.gif', 'get dressed.gif', 'get fat.gif', 'go out.gif', 'greet.gif', 'happen.gif', 'have picnic.gif', 'heat up.gif', 'hesitate.gif', 'hide.gif', 'hold.gif', 'improve.gif', 'inform.gif', 'interrupt.gif', 'jump.gif', 'kill.gif', 'knit.gif', 'lead.gif', 'let go.gif', 'lie on the ground.gif', 'list.gif', 'listen.gif', 'live.gif', 'look for.gif', 'lose weight.gif', 'make a bed.gif', 'make coffee.gif', 'meet.gif', 'mix.gif', 'move.gif', 'nod.gif', 'offer.gif', 'overtake.gif', 'paint the town red.gif', 'paint.gif', 'pass by.gif', 'pay.gif', 'persuade.gif', 'play.gif', 'point out.gif', 'pour.gif', 'protect.gif', 'provide.gif', 'pull.gif', 'pursue.gif', 'push.gif', 'rain.gif', 'reach.gif', 'read.gif', 'record.gif', 'release.gif', 'repeat.gif', 'report.gif', 'represent.gif', 'require.gif', 'resolve.gif', 'ride.gif', 'run out of time.gif', 'run.gif', 'rush.gif', 'save.gif', 'sell.gif', 'separate.gif', 'set.gif', 'shopping.gif', 'sit.gif', 'ski.gif', 'sleep.gif', 'smoke.gif', 'speak.gif', 'spend.gif', 'sping.gif', 'spread.gif', 'stand.gif', 'stay.jpg', 'steal.gif', 'stir.gif', 'study.gif', 'surf the internet.gif', 'swim.gif', 'take off clothes.gif', 'teach.gif', 'tell.gif', 'think.gif', 'throw up.gif', 'travel.gif', 'try.gif', 'unwrap.gif', 'use.gif', 'visit.gif', 'wait.gif', 'walk.gif', 'watch.gif', 'wear.gif', 'whisper.gif', 'work.gif', 'wrap.gif', 'write.gif']
const shortAction_array = ['accuse.gif', 'achieve.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'answer.gif', 'apologize.gif', 'arrive.gif', 'ask.gif', 'assist.gif', 'attract attention.gif', 'be angry.gif', 'be annoyed.gif', 'be cold.gif', 'be happy.gif', 'be interested.gif', 'be late.gif', 'be sarcastic.gif', 'be stubborn.gif', 'be tired.gif', 'begin start.gif', 'bite.gif', 'break into.gif', 'bring.gif', 'buy.gif', 'call.gif', 'can.jpg', 'catch red handed.gif', 'change.gif', 'choose.gif', 'claim.gif', 'clean.gif', 'collapse.gif', 'come back.gif', 'come in.gif', 'come up.gif', 'complain.gif', 'compliment.gif', 'conclude.gif', 'confess.gif', 'consider.gif', 'continue.gif', 'create.gif', 'cross out.gif', 'cut.gif', 'decide.gif', 'defend.gif', 'deny2.gif', 'die.gif', 'disappear.gif', 'discover.gif', 'drop.gif', 'escape.gif', 'explain.gif', 'fall.gif', 'fart.gif', 'feel sick.gif', 'figure out.gif', 'find.gif', 'forget.gif', 'get a present.gif', 'get in.gif', 'give.gif', 'go out.gif', 'happen.gif', 'hear.gif', 'hesitate.gif', 'hide.gif', 'hit2.gif', 'hold.gif', 'hurt.gif', 'include.gif', 'inform.gif', 'interrupt.gif', 'invite.gif', 'jump.gif', 'kill.gif', 'know.gif', 'leave.gif', 'like.gif', 'look.gif', 'lose.gif', 'meet.gif', 'memorize.gif', 'mention.gif', 'miss train.gif', 'move.gif', 'need.gif', 'nod.gif', 'note.gif', 'offer.gif', 'order.gif', 'overtake.gif', 'panic.gif', 'pass by.gif', 'pay.gif', 'point out.gif', 'protect.gif', 'pull.gif', 'punch.gif', 'push.gif', 'put down.gif', 'quit.gif', 'reach.gif', 'read.gif', 'realize.gif', 'recognize.gif', 'recommend.gif', 'release.gif', 'remind.gif', 'reply.gif', 'resolve.gif', 'respond.gif', 'reveal.gif', 'rip off.gif', 'rush.gif', 'save.gif', 'say.gif', 'see.gif', 'select.gif', 'separate.gif', 'show.gif', 'shut.gif', 'sit.gif', 'slice.gif', 'solve.gif', 'spare.gif', 'split.gif', 'stand up get up.gif', 'split.gif', 'start talking.gif', 'steal.gif', 'suggest.gif', 'surprise.gif', 'swallow.gif', 'take off clothes.gif', 'take off plane.gif', 'tell.gif', 'think2.gif', 'throw up.gif', 'throw.gif', 'try.gif', 'turn back.gif', 'turn on.gif', 'twist.gif', 'understand.gif', 'wake.gif', 'want.jpg', 'whisper.gif', 'wrap.gif', 'write.gif']

textAreaBelow.addEventListener('click', () => {
    textAreaBelow.style.opacity = '0', textAreaQuestion.style.opacity = '1';
});
textAreaQuestion.addEventListener('click', () => {
    textAreaQuestion.style.opacity = '0', textAreaBelow.style.opacity = '1';
})
    
buttonPC.addEventListener('click', testPC)

// function testPC(subject, mark1, verb1, style1, mark2, verb2, style2, prompt) {
//     subject.scr = `${subjectFolder}${subject}`
//     mark1.src = `${marksFolder}${mark1}`
//     firstVerb.src = `${verbsFolder}${verb1}`
//     firstVerbStyle(style1)
//     mark2.src = `{marksFolder}${mark2}`
//     secondVerbPic.src = `${verbsFolder}${verb2}`
//     secondVerbStyle(style2)
//     first_verb_prompt.innerHTML = `${prompt}`
// }
function testPC() {
     let testRandomNumber = Math.floor(Math.random() * 41)
     console.log(testRandomNumber);  
    if (testRandomNumber === 0) {
        testPCcallback('she.jpg', '2.png', 'sleep.gif', PCStyle, ' ', 'when', 'he.jpg', '1.png', 'come.gif', PSStyle, "She wasn't sleeping when he came"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 1) {
        testPCcallback('he.jpg', '1.png', 'read.gif', PCStyle, ' ', 'when', 'she.jpg', '1.png', 'call.gif', PSStyle, "He was reading when she called"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 2) {
        testPCcallback('he.jpg', '1.png', 'study.gif', PCStyle, ' ', 'while', 'she.jpg', '1.png', 'cook.gif', PCStyle, "He was studying when she was cooking"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 3) {
        testPCcallback('you.jpg', '1.png', 'arrive.gif', PSStyle, ' ', 'while', 'me.jpg', '1.png', 'work.gif', PCStyle, "You arrived while I was working"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 4) {
         testPCcallback('you.jpg', '1.png', 'eat.gif', PCStyle, ' ', 'while', 'me.jpg', '1.png', 'drive.gif', PCStyle, "You were eating while I was driving"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 5) {
        testPCcallback('you.jpg', '3.png', 'play.gif', PCStyle, ' ', 'while', 'me.jpg', '1.png', 'clean.gif', PCStyle, "Were you playing while I was cleaning?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 6) {
        testPCcallback('we.jpg', '1.png', 'watch.gif', PCStyle, 'As', '', 'he.jpg', '1.png', 'disappear.gif', PSStyle, "As we were watching he disappeared"), firstWould.classList.remove('hidden'), secondWould.classList.add('hidden')
    } else if (testRandomNumber === 7) {
        testPCcallback('she.jpg', '3.png', 'be angry.gif', PSStyle, '', 'when', 'he.jpg', '1.png', 'surf the internet.gif', PCStyle, "Was she angry when he was surfing the internet?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 8) {
        testPCcallback('they.jpg', '1.png', 'smoke.gif', PCStyle, '', 'so', 'they.jpg', '1.png', 'start talking.gif', PSStyle, "They were smoking so they started talking"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
     } else if (testRandomNumber === 9) {
        testPCcallback('she.jpg', '2.png', 'show true colors.jpg', PSStyle, '', 'while', 'we.jpg', '1.png', 'travel.gif', PCStyle, "She didn't show her true colors while we were traveling"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
     } else if (testRandomNumber === 10) {
        testPCcallback('it.jpg', '3.png', 'rain.gif', PCStyle, '', 'when', 'she.jpg', '1.png', 'go out.gif', PSStyle, "Was it raining when she went out?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 11) {
        testPCcallback('it.jpg', '2.png', 'rain.gif', PCStyle, '', 'when', 'it.jpg', '1.png', 'take off plane.gif', PSStyle, "It wasn't raining when the plane took off"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 12) {
        testPCcallback('he.jpg', '1.png', 'hesitate.gif', PSStyle, '', 'but', 'they.jpg', '1.png', 'marry.gif', PSStyle, "He hesitated but they got married"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 13) {
        testPCcallback('it.jpg', '3.png', 'happen.gif', PSStyle, '', 'while', 'you.jpg', '1.png', 'have picnic.gif', PCStyle, "Did it happen while  you were having a picnic?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 14) {
        testPCcallback('it.jpg', '2.png', 'happen.gif', PSStyle, '', 'when', 'she.jpg', '1.png', 'get in.gif', PSStyle, "It didn't happen when she got in"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
     } else if (testRandomNumber === 15) {
        testPCcallback('it.jpg', '1.png', 'happen.gif', PSStyle, '', 'when', 'we.jpg', '1.png', 'pass exam.gif', PCStyle, "It happened when we were passing the exam"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 16) {
        testPCcallback('me.jpg', '2.png', 'get embarrassed.gif', PSStyle, '', 'so', 'she.jpg', '2.png', 'get dressed.gif', PSStyle, "I didn't get embarrassed so she didn't get dressed"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
      } else if (testRandomNumber === 17) {
        testPCcallback('we.jpg', '1.png', 'run out of time.gif', PCStyle, '', 'so', 'we.jpg', '1.png', 'run.gif', PSStyle, "We were running out of time so we ran"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 18) {
        testPCcallback('he.jpg', '2.png', 'be late.gif', PSStyle, '', 'so', 'he.jpg', '2.png', 'panic.gif', PSStyle, "He wasn't late so he didn't panic"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
     } else if (testRandomNumber === 19) {
        testPCcallback('we.jpg', '1.png', 'be late.gif', PSStyle, '', 'so', 'we.jpg', '1.png', 'rush.gif', PSStyle, "We were late so we rushed"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
     } else if (testRandomNumber === 20) {
        testPCcallback('you.jpg', '3.png', 'make coffee.gif', PCStyle, '', 'when', 'he.jpg', '1.png', 'pass by.gif', PSStyle, "Were you making coffee when he passed by?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 21) {
        testPCcallback('she.jpg', '1.png', 'attract attention.gif', PCStyle, '', 'but', 'nobody.jpg', '1.png', 'come.gif', PSStyle, "She was attracting attention but nobody came"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
    } else if (testRandomNumber === 22) {
        testPCcallback('me.jpg', '2.png', 'interrupt.gif', PSStyle, '', 'when', 'you.jpg', '1.png', 'speak.gif', PCStyle, "I didn't interrupt when you were speaking"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden')
     } else if (testRandomNumber === 23) {
        testPCcallback('you.jpg', '1.png', 'arrive.gif', PSStyle, 'when', '', 'he.jpg', '3.png', 'dance.gif', PCStyle, "When you arrived was he dancing?"), firstWould.classList.remove('hidden'), secondWould.classList.add('hidden');
    } else if (testRandomNumber === 24) {
        testPCcallback('you.jpg', '1.png', 'argue.gif', PCStyle, 'when', '', 'he.jpg', '3.png', 'lie on the ground.gif', PCStyle, "When you were arguing was he lying on the ground?"), firstWould.classList.remove('hidden'), secondWould.classList.add('hidden');
    } else if (testRandomNumber === 25) {
        testPCcallback('me.jpg', '1.png', 'come up.gif', PSStyle, '', 'when', 'she.jpg', '1.png', 'sing.gif', PCStyle, "I came up when she was singing"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 26) {
        testPCcallback('you.jpg', '3.png', 'go.gif', PCStyle, 'Where', 'when', 'me.jpg', '1.png', 'see.gif', PSStyle, "Where were you going when I saw you?"), firstWould.classList.remove('hidden'), secondWould.classList.remove('hidden');
     } else if (testRandomNumber === 27) {
        testPCcallback('he.jpg', '1.png', 'point out.gif', PSStyle, '', 'because', 'she.jpg', '2.png', 'look.gif', PCStyle, "He pointed out because she wasn't looking"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
     } else if (testRandomNumber === 28) {
        testPCcallback('she.jpg', '3.png', 'wear.gif', PCStyle, 'What', 'when', 'you.jpg', '1.png', 'see.gif', PSStyle, "What was she wearing when you saw her?"), firstWould.classList.remove('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 29) {
        testPCcallback('he.jpg', '3.png', 'get embarrassed.gif', PSStyle, '', 'when', 'he.jpg', '1.png', 'fart.gif', PSStyle, "Did he get embarrassed when he farted?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
     } else if (testRandomNumber === 30) {
        testPCcallback('she.jpg', '1.png', 'panic.gif', PSStyle, '', 'when', 'he.jpg', '1.png', 'figure out.gif', PSStyle, "She paniced when he figured out"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 31) {
        testPCcallback('they.jpg', '1.png', 'speak.gif', PCStyle, 'While', '', 'she.jpg', '1.png', 'reveal.gif', PSStyle, "While they were speaking she revealed"), firstWould.classList.remove('hidden'), secondWould.classList.add('hidden');
     } else if (testRandomNumber === 32) {
        testPCcallback('she.jpg', '3.png', 'cry.gif', PCStyle, '', 'when', 'she.jpg', '1.png', 'miss train.gif', PSStyle, "Was she crying when she missed the train?"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 33) {
        testPCcallback('they.jpg', '3.png', 'look for.gif', PCStyle, 'What', 'when', 'cat.jpg', '1.png', 'come back.gif', PSStyle, "What were they looking for when the cat came back?"), firstWould.classList.remove('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 34) {
        testPCcallback('he.jpg', '3.png', 'be sarcastic.gif', PSStyle, '', 'while', 'you.jpg', '1.png', 'explain.gif', PCStyle, "Was he sarcastic while you were explaining?"), firstWould.classList.remove('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 35) {
        testPCcallback('nobody.jpg', '1.png', 'leave.gif', PCStyle, '', 'because', 'nobody.jpg', '1.png', 'have to.gif', PSStyle, "Nobody was leaving because nobody had to"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 36) {
        testPCcallback('nobody.jpg', '1.png', 'watch.gif', PCStyle, '', 'so', 'she.jpg', '1.png', 'take off clothes.gif', PSStyle, "Nobody was watching so she took off clothes"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
     } else if (testRandomNumber === 37) {
        testPCcallback('he.jpg', '1.png', 'teach.gif', PCStyle, '', 'because', 'nobody.jpg', '1.png', 'know.gif', PSStyle, "He was teaching because nobody knew"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 38) {
        testPCcallback('nobody.jpg', '1.png', 'be interested.gif', PSStyle, '', 'because', 'they.jpg', '2.png', 'win.gif', PCStyle, "Nobody was interested because they weren't winning"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 39) {
        testPCcallback('nobody.jpg', '1.png', 'throw up.gif', PCStyle, '', 'because', 'she.jpg', '2.png', 'drive.gif', PCStyle, "Nobody was throwing up because she wasn't driving"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    } else if (testRandomNumber === 40) {
        testPCcallback('nobody.jpg', '1.png', 'hide.gif', PCStyle, '', 'because', 'they.jpg', '2.png', 'come in.gif', PSStyle, "Nobody was hiding because they didn't come in"), firstWould.classList.add('hidden'), secondWould.classList.remove('hidden');
    }
    
    
}
const speakLeft = document.getElementById('speakLeft')
function testPCcallback(who, mark1pic, verb1, style1, modal1, modal2, who2, mark2sign, verb2, style2, sentence) {
    speakLeft.style.opacity = '1';
    firstIf.style.opacity = '0'
    secondIf.style.opacity = '0'
    secondWould.style.opacity = '1'
    firstWould.style.opacity = '1'
    subject.src = `${subjectFolder}${who}`
    mark1.src = `${marksFolder}${mark1pic}`
    firstVerb.src = `${verbsFolder}${verb1}`
    first_verb_prompt.innerHTML = `${verb1.slice(0, -4)}`
    firstVerb.style.boxShadow = style1
    first_would.innerHTML = `${modal1}`
    secondWould.innerHTML = `${modal2}`
    secondSubject.src = `${subjectFolder}${who2}`
    mark2.src = `${marksFolder}${mark2sign}`
    secondVerbPic.src = `${verbsFolder}${verb2}`
    secondVerb.style.boxShadow = style2
    second_verb_prompt.innerHTML = `${verb2.slice(0, -4)}`
    textAreaBelow.innerHTML = `${sentence}`
}


// function testPC('she.jpg', '2.png', 'sleep.gif', 'PCStyle', '1.jpg', 'come.gif', 'PSStyle', "She wasn't sleeping when he came"); 
   
    
        // getSecondPCverb(processes_array, processes_array[30])

