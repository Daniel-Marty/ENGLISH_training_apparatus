let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let verbs_array = ['accuse.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'apologize.gif', 'argue.gif', 'arrive.gif', 'ask_for_opinion.gif', 'ask.gif', 'attract_attention.gif', 'backup.gif', 'become.gif', 'begged.gif', 'bet.gif','bite.gif', 'break.gif', 'bring.gif', 'broadcast.gif', 'buy.gif', 'cast.gif', 'catch.gif', 'challenge.gif', 'challenge.gif', 'chat.gif', 'cheer.gif', 'choose.gif', 'circle.gif', 'claim.gif', 'come_up.gif', 'come.gif', 'comfort.gif', 'complain.gif', 'cook.gif', 'compliment.gif', 'conclude.gif', 'confess.gif', 'confuse.gif', 'continue.gif', 'cross_out.gif', 'cut.gif', 'decide.gif', 'deny.gif', 'doubt.gif', 'drive.gif', 'eat.gif', 'get_embarrassed.gif', 'encourage.gif', 'entertain.gif', 'explain.gif', 'fall.gif', 'fight.gif', 'forget.gif', 'count.gif', 'get_dressed.gif', 'give.gif', 'go.gif', 'greet.gif', 'have_to.gif', 'hear.gif', 'hesitate.gif', 'hide.gif', 'hit.gif', 'hit2.gif', 'hurt.gif', 'inform.gif', 'interrupt.gif', 'buy.gif', 'ask.gif', 'interrupt.gif', 'knit.gif', 'let_go.gif', 'lie.gif', 'list.gif', 'listen.gif', 'look_for.gif', 'lost.gif', 'attract_attention.gif', 'offer.gif', 'persuade.gif','point_out.gif', 'punch.gif', 'put_down.gif', 'deny2.gif', 'quit.gif', 'read.gif', 'realize.gif', 'recommend.gif', 'regret.gif', 'remind.gif', 'repeat.gif', 'reply.gif', 'respond.gif', 'ride.gif', 'rip_off.gif', 'rise.gif', 'run_out_of_time.gif', 'run_out_of.gif', 'run.gif', 'rush.gif', 'be_sarcastic.gif', 'say.gif', 'see.gif', 'seek.gif', 'set.gif', 'shout_out.gif', 'shut.gif', 'slice.gif', 'sorry.gif', 'spare.gif', 'speak.gif', 'spread.gif', 'start_talking.gif', 'steal.gif', 'suggest.gif', 'shopping.gif', 'surprise.gif', 'take.gif', 'take_off_clothes.gif', 'take_off_plane.gif', 'taste.gif', 'teach.gif', 'tell.gif', 'think.gif', 'think2.gif', 'throw.gif', 'figure_out.gif', 'be_interested.gif', 'try.gif', 'turn_back.gif', 'wake.gif', 'walk.gif', 'want.jpg', 'warn.gif', 'welcome.gif', 'whisper.gif', 'write.gif']
let first_verbs_array = ['want.gif', 'need.gif', 'have_to.gif']
let there_is_subjects_array = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg']

let zero_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif']
let first_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif']
let second_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.jpg', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif']
let third_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.jpg  ', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif', 'clean.gif', 'ask.gif', 'be_angry.gif', 'be_happy.gif', 'look_for.gif', 'be_late.gif', 'be_tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif']
let fourth_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.gif', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif', 'clean.gif','ask.gif', 'be_angry.gif', 'be_happy.gif', 'look_for.gif', 'be_late.gif', 'be_tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif', 'wait.gif', 'panic.gif', 'live.gif', 'lie.gif', 'meet.gif', 'know.gif', 'argue.gif', 'take_off_plane.gif', 'take_off_clothes.gif', 'tell.gif', 'think.gif', 'think2.gif', 'hit.gif', 'hit2.gif', 'arrive.gif', 'agree.gif', 'throw.gif', 'burn.gif', 'fall.gif', 'feel.gif', 'drive.gif', 'call.gif', 'catch.gif', 'travel.gif', 'try.gif', 'explain.gif', 'hurry.gif', 'make_a_bed.gif', 'make_coffee.gif', 'taste.gif', 'teach.gif', 'create.gif', 'make.gif', 'build.gif']
let fifth_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.gif', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif', 'clean.gif', 'ask.gif', 'be_angry.gif', 'be_happy.gif', 'look_for.gif', 'be_late.gif', 'be_tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif', 'wait.gif', 'panic.gif', 'live.gif', 'lie.gif', 'meet.gif', 'know.gif', 'argue.gif', 'take_off_plane.gif', 'take_off_clothes.gif', 'tell.gif', 'think.gif', 'think2.gif', 'hit.gif', 'hit2.gif', 'arrive.gif', 'agree.gif', 'throw.gif', 'burn.gif', 'fall.gif', 'feel.gif', 'drive.gif', 'call.gif', 'catch.gif', 'travel.gif', 'try.gif', 'explain.gif', 'hurry.gif', 'make_a_bed.gif', 'make_coffee.gif', 'taste.gif', 'teach.gif', 'create.gif', 'make.gif', 'build.gif', 'add.gif', 'admit.gif', 'be_able.gif', 'be_cold.gif', 'be_friends.gif', 'be_grumpy.gif', 'advise.gif', 'become.gif', 'beg.gif', 'be_interested.gif', 'be_sarcastic.gif', 'break_into.gif', 'broadcast.gif', 'chat.gif', 'choose.gif', 'climb.gif', 'come_up.gif', 'complain.gif', 'compliment.gif', 'confuse.gif', 'count.gif', 'cross_out.gif', 'cut.gif', 'decide.gif', 'disappear.gif', 'do_ballet.gif', 'do_gymnastics.gif', 'entertain.gif', 'feed.gif', 'feel_sick.gif', 'fight.gif', 'forget.gif', 'freeze.gif', 'get_dressed.gif', 'get_fat.gif', 'give.gif', 'go_out.gif', 'have_picnic.gif', 'heat_up.gif', 'hesitate.gif', 'hurt.gif', 'inform.gif', 'invite.gif', 'leave.gif', 'let_go.gif', 'list.gif', 'lose_weight.gif', 'find.gif', 'get_a_present.gif', 'unwrap.gif', 'pay.gif', 'sell.gif', 'wrap.gif', 'win.gif', 'welcome.gif']
let sixth_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.gif', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif', 'clean.gif', 'ask.gif', 'be_angry.gif', 'be_happy.gif', 'look_for.gif', 'be_late.gif', 'be_tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif', 'wait.gif', 'panic.gif', 'live.gif', 'lie.gif', 'meet.gif', 'know.gif', 'argue.gif', 'take_off_plane.gif', 'take_off_clothes.gif', 'tell.gif', 'think.gif', 'think2.gif', 'hit.gif', 'hit2.gif', 'arrive.gif', 'agree.gif', 'throw.gif', 'burn.gif', 'fall.gif', 'feel.gif', 'drive.gif', 'call.gif', 'catch.gif', 'travel.gif', 'try.gif', 'explain.gif', 'hurry.gif', 'make_a_bed.gif', 'make_coffee.gif', 'taste.gif', 'teach.gif', 'create.gif', 'make.gif', 'build.gif', 'add.gif', 'admit.gif', 'be_able.gif', 'be_cold.gif', 'be_friends.gif', 'be_grumpy.gif', 'advise.gif', 'become.gif', 'beg.gif', 'be_interested.gif', 'be_sarcastic.gif', 'break_into.gif', 'broadcast.gif', 'chat.gif', 'choose.gif', 'climb.gif', 'come_up.gif', 'complain.gif', 'compliment.gif', 'confuse.gif', 'count.gif', 'cross_out.gif', 'cut.gif', 'decide.gif', 'disappear.gif', 'do_ballet.gif', 'do_gymnastics.gif', 'entertain.gif', 'feed.gif', 'feel_sick.gif', 'fight.gif', 'forget.gif', 'freeze.gif', 'get_dressed.gif', 'get_fat.gif', 'give.gif', 'go_out.gif', 'have_picnic.gif', 'heat_up.gif', 'hesitate.gif', 'hurt.gif', 'inform.gif', 'invite.gif', 'leave.gif', 'let_go.gif', 'list.gif', 'lose_weight.gif', 'find.gif', 'get_a_present.gif', 'unwrap.gif', 'pay.gif', 'sell.gif']

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
const secondVerb = document.querySelector('.secondVerb');
const thereIs = document.getElementById('there_is');
const mark = document.querySelector('.mark');

const prompts = document.getElementsByClassName('prompt');

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

function get_random_subject() {
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `../images-subject/${selected_image}`
}
function get_random_mark() {
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`
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
}
function zero_level() {
    random_verb = Math.floor(Math.random() * zero_level_verbs.length);
    selected_image = zero_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function first_level() {
    random_verb = Math.floor(Math.random() * first_level_verbs.length);
    selected_image = first_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function second_level() {
    random_verb = Math.floor(Math.random() * second_level_verbs.length);
    selected_image = second_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function third_level() {
    random_verb = Math.floor(Math.random() * third_level_verbs.length);
    selected_image = third_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function fourth_level() {
    random_verb = Math.floor(Math.random() * fourth_level_verbs.length);
    selected_image = fourth_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function fifth_level() {
    random_verb = Math.floor(Math.random() * fifth_level_verbs.length);
    selected_image = fifth_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function sixth_level() {
    random_verb = Math.floor(Math.random() * sixth_level_verbs.length);
    selected_image = sixth_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function there_is() {
    random_subject = Math.floor(Math.random() * there_is_subjects_array.length);
    selected_image = there_is_subjects_array[random_subject]
    document.getElementById('threre_is_pic').src = `./images-thereis/${selected_image}`
    hidePrompts();
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
    // get_random_verb();
        console.log('changing the mark');
})

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 20px, rgb(255, 255, 255) 0px 0px 20px 50px';
    thereIs.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 20px, rgb(255, 255, 255) 0px 0px 20px 50px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
})

buttonThereIs.addEventListener('click', () => {
    secondVerb.classList.toggle('hidden')
    subject.classList.toggle('hidden');
    thereIs.classList.toggle('hidden');
    mark.style.left = "1050px";
    hidePrompts();
    // there_is_prompts();
})
buttonPrC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 20px, yellow 0px 0px 20px 40px';
    hidePrompts();
        promptPrC.classList.remove('hidden');
}) 
buttonPrP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 24px, black 0px 0px 20px 45px';
    hidePrompts();
        promptPrP.classList.remove('hidden');
})    
buttonPrPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, black 0px 0px 0px 41px, yellow 0px 0px 20px 60px';
    hidePrompts();
        promptPrPC.classList.remove('hidden');
}) 
buttonPS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    thereIs.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    hidePrompts();
    promptPS.classList.remove('hidden');
}) 
buttonPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 20px, yellow 0px 0px 20px 40px';
    hidePrompts();
    promptPC.classList.remove('hidden');
}) 
buttonPP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 20px, black 0px 0px 20px 40px';
    hidePrompts();
    promptPP.classList.remove('hidden');
}) 
buttonPPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 25px, black 0px 0px 0px 33px, yellow 0px 0px 20px 45px';
    hidePrompts();
    promptPPC.classList.remove('hidden');
}) 
buttonFS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    thereIs.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    hidePrompts();
        promptFS.classList.remove('hidden');
})
buttonFC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 20px, yellow 0px 0px 20px 40px';
    hidePrompts();
        promptFC.classList.remove('hidden');
})
buttonFP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 20px, black 0px 0px 20px 40px';
    hidePrompts();
        promptFP.classList.remove('hidden');
})
buttonFPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 25px, black 0px 0px 0px 33px, yellow 0px 0px 20px 45px';
    hidePrompts();
        promptFPC.classList.remove('hidden');
})




let whatIsMyStyle = document.querySelector('.boxShadow')
console.log(whatIsMyStyle.style.boxShadow);



function conditionals() {
    let button = document.getElementById('second_verb');
    let circles = document.getElementById('circles');
    let verb = document.getElementById('div');
    {
        button.classList.toggle("hidden");
        circles.classList.toggle("hidden");
        verb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, rgb(255, 255, 255) 0px 0px 20px 100px';

        console.log('toggle_conditional');
    }
}
