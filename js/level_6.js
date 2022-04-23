const buttonPrS = document.getElementById('present__s');
const buttonFS = document.getElementById('future__s');
const buttonFC = document.getElementById('future__c');
const buttonPS = document.getElementById('past__s');
const buttonPrP = document.getElementById('present__p');
const buttonPrC = document.getElementById('present__c');
const buttonPrPC = document.getElementById('present__pc');
const buttonPC = document.getElementById('past__c');
const buttonPP = document.getElementById('past__p');
const buttonPPC = document.getElementById('past__pc');


const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const mark = document.querySelector('.mark');

const prompts = document.getElementsByClassName('prompt');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const promptFC = document.getElementById('prompt__f__c');
const promptPS = document.getElementById('prompt__p__s')
const promptPrP = document.getElementById('prompt__pr__p');
const promptPrC = document.getElementById('prompt__pr__c');
const promptPrPC = document.getElementById('prompt__pr__pc');
const promptPC = document.getElementById('prompt__p__c');
const promptPP = document.getElementById('prompt__p__p');
const promptPPC = document.getElementById('prompt__p__pc');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PrPStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, black 0px 0px 20px 30px'
const PrCStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const FCStyle = 'rgb(255, 5, 5) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PrPCStyle = 'rgb(19, 246, 49) 0px 0px 4px 14px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px'
const PPStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 35px'
const PPCStyle = 'rgb(0, 87, 250) 0px 0px 4px 14px, black 0px 0px 0px 18px, yellow 0px 0px 20px 35px'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let sixth_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.jpg', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif', 'clean.gif', 'ask.gif', 'be_angry.gif', 'be_happy.gif', 'look_for.gif', 'be_late.gif', 'be_tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif', 'wait.gif', 'panic.gif', 'live.gif', 'lie.gif', 'meet.gif', 'know.gif', 'argue.gif', 'take_off_plane.gif', 'take_off_clothes.gif', 'tell.gif', 'think.gif', 'think2.gif', 'hit.gif', 'hit2.gif', 'arrive.gif', 'agree.gif', 'throw.gif', 'burn.gif', 'fall.gif', 'feel.gif', 'drive.gif', 'call.gif', 'catch.gif', 'travel.gif', 'try.gif', 'explain.gif', 'hurry.gif', 'make_a_bed.gif', 'make_coffee.gif', 'taste.gif', 'teach.gif', 'create.gif', 'make.gif', 'build.gif', 'add.gif', 'admit.gif', 'be_able.gif', 'be_cold.gif', 'be_friends.gif', 'be_grumpy.gif', 'advise.gif', 'become.gif', 'beg.gif', 'be_interested.gif', 'be_sarcastic.gif', 'break_into.gif', 'broadcast.gif', 'chat.gif', 'choose.gif', 'climb.gif', 'come_up.gif', 'complain.gif', 'compliment.gif', 'confuse.gif', 'count.gif', 'cross_out.gif', 'cut.gif', 'decide.gif', 'disappear.gif', 'do_ballet.gif', 'do_gymnastics.gif', 'entertain.gif', 'feed.gif', 'feel_sick.gif', 'fight.gif', 'forget.gif', 'freeze.gif', 'get_dressed.gif', 'get_fat.gif', 'give.gif', 'go_out.gif', 'have_picnic.gif', 'heat_up.gif', 'hesitate.gif', 'hurt.gif', 'inform.gif', 'invite.gif', 'leave.gif', 'let_go.gif', 'list.gif', 'lose_weight.gif', 'find.gif', 'get_a_present.gif', 'unwrap.gif', 'pay.gif', 'sell.gif', 'wrap.gif', 'win.gif', 'welcome.gif', 'deny.gif', 'deny2.gif', 'double_cross.gif', 'doubt.gif', 'claim.gif', 'cast.gif', 'challenge.gif', 'lose.gif', 'marry.gif', 'greet.gif', 'conclude.gif', 'confess.gif', 'miss_you.gif', 'missed.gif', 'figure_out.gif', 'interrupt.gif', 'memorize.gif', 'mix.gif', 'move.gif', 'mind.gif', 'offer.gif', 'note.gif', 'overtake.gif', 'play.gif', 'point_out.gif', 'pour.gif', 'punch.gif', 'put_down.gif', 'quit.gif', 'rain.gif', 'realize.gif', 'recommend.gif', 'warn.gif', 'wear.gif', 'use.gif', 'visit.gif', 'wait.gif', 'wake.gif', 'turn_back.gif', 'tell.gif',
    'shut.gif', 'shout_out.gif', 'ski.gif', 'seek.gif', 'set.gif', 'shopping.gif', 'steal.gif', 'study.gif', 'stir.gif', 'stay.jpg', 'smoke.gif', 'suggest.gif', 'repeat.gif', 'record.gif', 'regret.gif', 'understand.gif', 'answer.gif', 'embrace.gif', 'follow.gif', 'save.gif', 'keep.gif', 'reach.gif', 'recognize.gif', 'reach.gif', 'protect.gif', 'drop.gif', 'demonstrate.gif', 'defend.gif', 'collect.gif']
let sixth_level_styles = [PrSStyle, FSStyle, PSStyle, PrPStyle, PrCStyle, PCStyle, FCStyle, PrPCStyle, PPStyle, PPCStyle]

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
function sixth_level() {
    random_verb = Math.floor(Math.random() * sixth_level_verbs.length);
    selected_image = sixth_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function get_random_style() {
    random_style = Math.floor(Math.random() * sixth_level_styles.length);
    selected_style = sixth_level_styles[random_style]
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
    sixth_level();
    hidePrompts();
        console.log('changing the mark');
})

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    sixth_level();
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
    sixth_level();
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
    sixth_level();
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
    sixth_level();
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
    sixth_level();
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
    sixth_level();
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
    sixth_level();
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
    sixth_level();
    secondVerb.style.boxShadow = PCStyle;
    subject.style.boxShadow = PCStyle;
    mark.style.boxShadow = PCStyle;
}) 
buttonPP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 35px';
    hidePrompts();
    promptPP.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    sixth_level();
    secondVerb.style.boxShadow = PPStyle;
    subject.style.boxShadow = PPStyle;
    mark.style.boxShadow = PPStyle;
}) 
buttonPPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 0px 21px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptPPC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    sixth_level();
    secondVerb.style.boxShadow = PPCStyle;
    subject.style.boxShadow = PPCStyle;
    mark.style.boxShadow = PPCStyle;
})