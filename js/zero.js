const buttonPrS = document.getElementById('present__s');
const buttonFS = document.getElementById('future__s');
const buttonMain = document.getElementById('main_menu');
const subject = document.getElementById('subject');
const secondVerb = document.querySelector('.secondVerb');
const mark = document.querySelector('.mark');

const prompts = document.getElementsByClassName('prompt');
const promptPrS = document.getElementById('prompt__pr__s')
const promptFS = document.getElementById('prompt__f__s');
const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 20px, rgb(255, 255, 255) 0px 0px 20px 50px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 20px, white 0px 0px 20px 50px'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let zero_level_verbs = ['can.jpg', 'want.jpg', 'have.jpg', 'see.gif', 'is.jpg', 'do.gif']
let zero_level_styles = [PrSStyle, FSStyle]

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
function zero_level() {
    random_verb = Math.floor(Math.random() * zero_level_verbs.length);
    selected_image = zero_level_verbs[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}
function get_random_style() {
    random_style = Math.floor(Math.random() * zero_level_styles.length);
    selected_style = zero_level_styles[random_style]
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
    zero_level();
    hidePrompts();
        console.log('changing the mark');
})

buttonPrS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(19, 246, 49) 0px 0px 4px 20px, rgb(255, 255, 255) 0px 0px 20px 50px';
    hidePrompts();
    promptPrS.classList.remove('hidden');
})

buttonFS.addEventListener('click', () => {
    secondVerb.style.boxShadow = 'rgb(255, 5, 5) 0px 0px 4px 20px, white 0px 0px 20px 50px';
    hidePrompts();
        promptFS.classList.remove('hidden');
})