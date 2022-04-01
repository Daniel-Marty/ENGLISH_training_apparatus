let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let verbs_array = ['accuse.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'apologize.gif', 'argue.gif', 'ask_for_opinion.gif', 'ask.gif', 'backup.gif', 'become.gif', 'begged.gif', 'bet.gif','bite.gif', 'break.gif', 'bring.gif', 'broadcast.gif', 'buy.gif', 'cast.gif', 'catch.gif', 'challenge.gif', 'challenge.gif', 'chatting.gif', 'cheer.gif', 'choose.gif', 'circle.gif', 'claim.gif', 'come_up.gif', 'come.gif', 'comfort.gif', 'complain.gif', 'cook.gif', 'compliment.gif', 'conclude.gif', 'confess.gif', 'confuse.gif', 'continue.gif', 'cross_out.gif', 'cut.gif', 'decide.gif', 'deny.gif', 'doubt.gif', 'drive.gif', 'eat.gif', 'get_embarrassed.gif', 'encourage.gif', 'entertain.gif', 'explain.gif', 'fall.gif', 'fight.gif', 'forget.gif', 'count.gif', 'get_dressed.gif', 'give.gif', 'go.gif', 'greet.gif', 'have_to.gif', 'hear.gif', 'hesitate.gif', 'hide.gif', 'hit.gif', 'hit_again.gif', 'hurt.gif', 'inform.gif', 'interrupt.gif', 'buy.gif', 'ask.gif', 'interrupt.gif', 'knit.gif', 'let_go.gif', 'lie.gif', 'list.gif', 'listen.gif', 'look_for.gif', 'lost.gif', 'attract_attention.gif', 'offer.gif', 'persuade.gif','point_out.gif', 'punch.gif', 'put_down.gif', 'deny2.gif', 'quit.gif', 'read.gif', 'realize.gif', 'recommend.gif', 'regret.gif', 'remind.gif', 'repeat.gif', 'reply.gif', 'respond.gif', 'ride.gif', 'rip_off.gif', 'rise.gif', 'run_out_of_time.gif', 'run_out_of.gif', 'run.gif', 'rush.gif', 'being_sarcastic.gif', 'say.gif', 'see.gif', 'seek.gif', 'set.gif', 'shout_out.gif', 'shut.gif', 'slice.gif', 'sorry.gif', 'spare.gif', 'speak.gif', 'spread.gif', 'start_talking.gif', 'steal.gif', 'suggest.gif', 'shopping.gif', 'surprise.gif', 'take.gif', 'take_off_clothes.gif', 'take_off_plane.gif', 'taste.gif', 'teach.gif', 'tell.gif', 'think.gif', 'think2.gif', 'throw.gif', 'figure_out.gif', 'being_interested.gif', 'try.gif', 'turn_back.gif', 'wake.gif', 'walk.gif', 'want.gif', 'warn.gif', 'welcome.gif', 'whisper.gif', 'write.gif']
let simple_verbs_array = ['go.gif', 'ask.gif', 'buy.gif', 'catch.gif', 'circle.gif', 'come.gif', 'cook.gif', 'cut.gif', 'drive.gif', 'eat.gif', 'explain.gif', 'fall.gif', 'fight.gif', 'give.gif', 'go.gif', 'hear.gif', 'listen.gif', 'hit.gif', 'lie.gif', 'look_for.gif', 'need.gif', 'offer.gif', 'read.gif', 'ride.gif', 'run.gif', 'say.gif', 'shut.gif', 'take.gif', 'take_off_clothes.gif', 'teach.gif', 'think.gif', 'throw.gif', 'try.gif', 'wake.gif', 'walk.gif', 'write.gif']
let first_verbs_array = ['want.gif', 'need.gif', 'have_to.gif']

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
const secondVerb = document.querySelector('.secondVerb');

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
    document.getElementById('subject').src = `./images-subject/${selected_image}`
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
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, rgb(255, 255, 255) 0px 0px 20px 100px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
})

buttonPrC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, yellow 0px 0px 20px 60px';
    hidePrompts();
        promptPrC.classList.remove('hidden');
}) 

buttonPrP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, black 0px 0px 20px 60px';
    hidePrompts();
        promptPrP.classList.remove('hidden');
})    

buttonPrPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 35px, black 0px 0px 0px 41px, yellow 0px 0px 20px 60px';
    hidePrompts();
        promptPrPC.classList.remove('hidden');
}) 

buttonPS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 35px, white 0px 0px 20px 100px';
    hidePrompts();
    promptPS.classList.remove('hidden');
}) 

buttonPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 35px, yellow 0px 0px 20px 60px';
    hidePrompts();
    promptPC.classList.remove('hidden');
}) 

buttonPP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 35px, black 0px 0px 20px 60px';
    hidePrompts();
    promptPP.classList.remove('hidden');
}) 

buttonPPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 35px, black 0px 0px 0px 41px, yellow 0px 0px 20px 60px';
    hidePrompts();
    promptPPC.classList.remove('hidden');
}) 

buttonFS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 35px, white 0px 0px 20px 100px';
    hidePrompts();
        promptFS.classList.remove('hidden');
})

buttonFC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 35px, yellow 0px 0px 20px 60px';
    hidePrompts();
        promptFC.classList.remove('hidden');
})

buttonFP.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 35px, black 0px 0px 20px 60px';
    hidePrompts();
        promptFP.classList.remove('hidden');
})

buttonFPC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 35px, black 0px 0px 0px 41px, yellow 0px 0px 20px 60px';
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
