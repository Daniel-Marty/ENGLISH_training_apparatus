const buttonPrS = document.getElementById('present__s');
const buttonFS = document.getElementById('future__s');
const buttonPS = document.getElementById('past__s');
const buttonPrP = document.getElementById('present__p');
const buttonPrC = document.getElementById('present__c');
const buttonPC = document.getElementById('past__c');


const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const mark = document.querySelector('.mark');

const prompts = document.getElementsByClassName('prompt');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const promptPS = document.getElementById('prompt__p__s')
const promptPrP = document.getElementById('prompt__pr__p');
const promptPrC = document.getElementById('prompt__pr__c');
const promptPC = document.getElementById('prompt__p__c');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PrPStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, black 0px 0px 20px 30px'
const PrCStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'
const PCStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, yellow 0px 0px 20px 35px'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let fourth_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif', 'eat.gif', 'drink.gif', 'go.gif', 'like.gif', 'cook.gif', 'read.gif', 'listen.gif', 'say.gif', 'write.gif', 'look.gif', 'sleep.gif', 'want.gif', 'need.gif', 'run.gif', 'take.gif', 'walk.gif', 'work.gif', 'have.jpg', 'fly.gif', 'sleep.gif', 'come.gif', 'come_back.gif', 'have_to.gif', 'clean.gif','ask.gif', 'be_angry.gif', 'be_happy.gif', 'look_for.gif', 'be_late.gif', 'be_tired.gif', 'bite.gif', 'break.gif', 'bring.gif', 'buy.gif', 'circle.gif', 'continue.gif', 'speak.gif', 'hear.gif', 'hide.gif', 'wait.gif', 'panic.gif', 'live.gif', 'lie.gif', 'meet.gif', 'know.gif', 'argue.gif', 'take_off_plane.gif', 'take_off_clothes.gif', 'tell.gif', 'think.gif', 'think2.gif', 'hit.gif', 'hit2.gif', 'arrive.gif', 'agree.gif', 'throw.gif', 'burn.gif', 'fall.gif', 'feel.gif', 'drive.gif', 'call.gif', 'catch.gif', 'travel.gif', 'try.gif', 'explain.gif', 'hurry.gif', 'make_a_bed.gif', 'make_coffee.gif', 'taste.gif', 'teach.gif', 'create.gif', 'make.gif', 'build.gif']
let fourth_level_styles = [PrSStyle, FSStyle, PSStyle, PrPStyle, PrCStyle, PCStyle]

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
function fourth_level() {
    random_verb = Math.floor(Math.random() * fourth_level_verbs.length);
    selected_image = fourth_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function get_random_style() {
    random_style = Math.floor(Math.random() * fourth_level_styles.length);
    selected_style = fourth_level_styles[random_style]
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
    fourth_level();
    hidePrompts();
        console.log('changing the mark');
})

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fourth_level();
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
    fourth_level();
    secondVerb.style.boxShadow = FSStyle;
    subject.style.boxShadow = FSStyle;
    mark.style.boxShadow = FSStyle;
})
buttonPS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px';
    hidePrompts();
    promptPS.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fourth_level();
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
    fourth_level();
    secondVerb.style.boxShadow = PrPStyle;
    subject.style.boxShadow = PrPStyle;
    mark.style.boxShadow = PrPStyle;
})  
buttonPrC.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, yellow 0px 0px 20px 35px';
    hidePrompts();
    promptPrC.classList.remove('hidden');
    get_random_mark();
    get_random_subject();
    fourth_level();
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
    fourth_level();
    secondVerb.style.boxShadow = PCStyle;
    subject.style.boxShadow = PCStyle;
    mark.style.boxShadow = PCStyle;
}) 