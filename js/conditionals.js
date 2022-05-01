const buttonPrS = document.getElementById('present__s');
const buttonThereIs = document.getElementById('button_there_is');
const subject = document.getElementById('subject');
const firstVerb = document.getElementById('firstVerbPic');
const secondVerb = document.getElementById('secondVerb');
const thereIs = document.getElementById('there_is');
const mark = document.querySelector('.mark');
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
const second_verb_question = document.getElementById('secondVerb_question');
const second_verb_prompt = document.getElementById('secondVerb_prompt');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PPStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 35px'


let marks_array = ['1.png', '2.png', '3.png']
let no_question_marks = ['1.png', '2.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let first_verbs_array = ['want.jpg', 'need.gif', 'have to.gif', 'apologize.gif', 'argue.gif', 'be able.gif', 'be angry.gif', 'be annoyed.gif', 'be cold.gif', 'be happy.gif', 'be interested.gif', 'be late.gif', 'be sarcastic.gif', 'be stubborn.gif', 'be tired.gif', 'be young.gif', 'build.gif', 'bring.gif', 'be friends.gif', 'nod.gif',]
let second_verbs_array = ['want.jpg', 'have to.gif', 'throw up.gif', 'get dirty.gif', 'nod.gif', 'write.gif', 'work.gif', 'win.gif', 'walk.gif', 'wait.gif', 'try.gif', 'travel.gif', 'think.gif', 'teach.gif', 'take off clothes.gif', 'swim.gif', 'suggest.gif', 'stay.jpg', 'start talking.gif', 'spin.gif', 'smoke.gif', 'sleep.gif', 'run.gif', 'repeat.gif', 'remind.gif', 'realize.gif', 'read.gif', 'pay.gif', 'panic.gif', 'overtake.gif', 'make coffee.gif', 'make a bed.gif', 'lose weight.gif', 'look for.gif', 'listen.gif', 'like.gif', 'lie.gif', 'let go.gif', 'leave.gif', 'jump.gif', 'interrupt.gif', 'hide.gif', 'hesitate.gif', 'hear.gif', 'go out.gif', 'get fat.gif', 'figure out.gif', 'feel sick.gif', 'disappear.gif', 'fall.gif', 'fart.gif', 'escape.gif', 'drink.gif', 'drive.gif', 'forget.gif', 'deny.gif', 'come.gif', 'come up.gif', 'come back.gif', 'recommend.gif' ]
let first_conditional_styles = [PrSStyle, FSStyle]
let second_conditional_styles = [PSStyle, ]

function getFirstConditionalStyle() {
    random_style = Math.floor(Math.random() * first_conditional_styles.length);
    selected_style = first_conditional_styles[random_style]
    firstVerb.style.boxShadow = selected_style;
}
 

function get_random_subject() {
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject];
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}
function get_random_mark1() {
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark1').src = `./images-marks/${selected_image}`
}
function get_random_mark2() {
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark2').src = `./images-marks/${selected_image}`
}
function no_question1() {
    random_mark = Math.floor(Math.random() * no_question_marks.length);
    selected_image = no_question_marks[random_mark]
    document.getElementById('mark1').src = `./images-marks/${selected_image}`
}
function no_question2() {
    random_mark = Math.floor(Math.random() * no_question_marks.length);
    selected_image = no_question_marks[random_mark]
    document.getElementById('mark2').src = `./images-marks/${selected_image}`
}
function get_first_verb() {
    random_verb = Math.floor(Math.random() * first_verbs_array.length);
    selected_image = first_verbs_array[random_verb]
    document.getElementById('firstVerbPic').src = `./images-verbs/${selected_image}`
    console.log(selected_image);
}
function get_second_verb() {
    random_verb = Math.floor(Math.random() * second_verbs_array.length);
    selected_image = second_verbs_array[random_verb]
    document.getElementById('secondVerbPic').src = `./images-verbs/${selected_image}`
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

function zeroStyle() {
    firstVerb.style.boxShadow = PrSStyle;
    secondVerb.style.boxShadow = PrSStyle;
}

let hidePrompts = function() {
    for (let i = 0; i < prompts.length; i++) {
        let promptsClasses = prompts[i];
        promptsClasses.classList.add('hidden');
    }
}
let hideTimeMarkers = function() {
    for (let i = 0; i < timeMarkers.length; i++) {
        let TM_Classes = timeMarkers[i];
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
    if (firstVerb.style.boxShadow == PrSStyle) { secondVerb.style.boxShadow = FSStyle, firstIf.style.opacity = '1', secondIf.style.opacity = '0', get_random_mark2(), no_question1()} 
    else {secondVerb.style.boxShadow = PrSStyle, firstIf.style.opacity = '0', secondIf.style.opacity = '1',get_random_mark1(), no_question2() }
});
// window.addEventListener('click', function (event) {
//     get_random_subject()
//     get_random_mark1()
//     get_random_mark2()
//     get_second_verb()
//     get_first_verb()
//     event.stopPropagation();
// },{capture: true});
// buttonPrS.addEventListener('click', () => {
//     secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px';
//     hidePrompts();
//     promptPrS.classList.remove('hidden');
//     get_random_mark();
//     get_random_subject();
//     zero_level();
//     secondVerb.style.boxShadow = PrSStyle;
//     subject.style.boxShadow = PrSStyle;
//     mark.style.boxShadow = PrSStyle;
// })

// 3. Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// Але рахуватись мають лише позитивні числа!!!

