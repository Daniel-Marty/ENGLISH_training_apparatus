let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let verbs_array = ['accuse.gif', 'achieve.gif', 'act.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'answer.gif', 'apologize.gif', 'argue.gif', 'arrive.gif', 'ask_for_opinion.gif', 'ask.gif', 'attract_attention.gif', 'assist.gif', 'backup.gif', 'bare.gif', 'be_able.gif', 'be_angry.gif', 'be_annoyed.gif', 'be_cold.gif', 'be_friends.gif', 'be_grumpy.gif', 'be_happy.gif', 'be_interested.gif', 'be_late.gif', 'be_sarcastic.gif', 'be_stubborn.gif', 'be_tired.gif', 'be_young.gif', 'become.gif', 'beg.gif', 'bet.gif', 'bite.gif', 'break.gif', 'break_into.gif', 'bring.gif', 'broadcast.gif', 'build.gif', 'burn.gif', 'buy.gif', 'call.gif', 'can.jpg', 'cast.gif', 'catch.gif', 'challenge.gif', 'chase.gif', 'chat.gif', 'cheer.gif', 'choose.gif', 'circle.gif', 'claim.gif', 'clean.gif', 'climb.gif', 'collapse.gif', 'collect.gif', 'come.gif', 'come_up.gif', 'come_back.gif', 'comfort.gif', 'compensate.jpg', 'complain.gif', 'compliment.gif', 'comprehend.gif', 'conclude.gif', 'confess.gif', 'confuse.gif', 'continue.gif', 'cook.gif', 'count.gif', 'create.gif', 'cross_out.gif', 'cut.gif', 'debate.gif', 'decide.gif', 'defend.gif', 'demonstrate.gif', 'deny.gif', 'deny2.gif', 'develop.gif', 'disappear.gif', 'discover.gif', 'do.gif', 'do_ballet.gif', 'do_gymnastics.gif', 'double-cross.gif', 'doubt.gif', 'drink.gif', 'drive.gif', 'drop.gif', 'eat.gif', 'embrace.gif', 'encourage.gif', 'entertain.gif', 'escape.gif', 'experience.gif', 'explain.gif', 'fall.gif', 'fart.gif', 'feed.gif', 'feel.gif', 'feel_sick.gif', 'fight.gif', 'figure_out.gif', 'find.gif', 'fly.gif', 'follow.gif', 'forget.gif', 'freeze.gif', 'gather.gif', 'get_a_present.gif', 'get_a_shock.gif', 'get_dressed.gif', 'get_embarrassed.gif', 'get_fat.gif', 'get_promoted.gif', 'give.gif', 'give_up.gif', 'go.gif', 'go_out.gif', 'greet.gif', 'have.jpg', 'have_picnic.gif', 'have_to.gif', 'hear.gif', 'heat_up.gif', 'hesitate.gif', 'hide.gif', 'hit.gif', 'hit2.gif', 'hold.gif', 'hurry.gif', 'hurt.gif', 'improve.gif', 'include.gif', 'inform.gif', 'interrupt.gif', 'invite.gif', 'is.jpg', 'jump.gif', 'keep.gif', 'knit.gif', 'know.gif', 'leave.gif', 'let_go.gif', 'lie.gif', 'list.gif', 'listen.gif', 'live.gif', 'look.gif', 'look_for.gif', 'lose_weight.gif', 'lose.gif',
    'make.gif', 'make_a_bed.gif', 'make_coffee.gif', 'marry.gif', 'meet.gif', 'memorize.gif', 'mention.gif', 'mind.gif', 'miss.gif', 'miss_train.gif', 'miss_you.gif', "mix.gif", 'move.gif', 'need.gif', 'note.gif', 'offer.gif', 'order.gif', 'overtake.gif', 'panic.gif', 'pass_by.gif', 'pass_exam.gif', 'pay.gif', 'persuade.gif', 'play.gif', 'point_out.gif', 'pour.gif', 'prefer.jpg', 'protect.gif', 'provide.gif', 'punch.gif', 'pursue.gif', 'put_down.gif', 'quit.gif', 'rain.gif', 'reach.gif', 'read.gif', 'realize.gif', 'recognize.gif', 'recommend.gif', 'record.gif', 'regret.gif', 'remain.gif', 'remind.gif', 'repeat.gif', 'reply.gif', 'represent.gif', 'request.gif', 'resolve.gif', 'respond.gif', 'ride.gif', 'rip_off.gif', 'rise.gif', 'run_out_of_time.gif', 'run_out_of.gif', 'run.gif', 'rush.gif', 'be_sarcastic.gif', 'save.gif', 'say.gif', 'see.gif', 'seek.gif', 'select.gif', 'sell.gif', 'separate.gif', 'set.gif', 'shopping.gif', 'shout_out.gif', 'shut.gif', 'ski.gif', 'sleep.gif', 'slice.gif', 'smoke.gif', 'solve.gif', 'sorry.gif', 'spare.gif', 'speak.gif', 'spend.gif', 'spin.gif', 'split.gif', 'spread.gif', 'stand_for.gif', 'start_talking.gif', 'stay.jpg', 'steal.gif', 'stir.gif', 'study.gif', 'succeed.gif', 'suggest.gif', 'sunstroke.gif', 'surf_the_internet.gif', 'surprise.gif', 'swim.gif', 'take.gif', 'take_off_clothes.gif', 'take_off_plane.gif', 'taste.gif', 'teach.gif', 'tell.gif', 'think.gif', 'think2.gif', 'throw.gif', 'travel.gif', 'try.gif', 'turn.gif', 'turn_back.gif', 'twist.gif', 'understand.gif', 'unwrap.gif', 'use.gif', 'visit.gif', 'wait.gif', 'wake.gif', 'walk.gif', 'want.jpg', 'warn.gif', 'wear.gif', 'welcome.gif', 'whisper.gif', 'win.gif', 'work.gif', 'wrap.gif', 'write.gif']
let first_verbs_array = ['want.jpg', 'need.gif', 'have_to.gif', 'apologize.gif', 'argue.gif', 'be_able.gif', 'be_angry.gif', 'be_annoyed.gif', 'be_cold.gif', 'be_happy.gif', 'be_interested.gif', 'be_late.gif', 'be_sarcastic.gif', 'be_stubborn.gif', 'be_tired.gif', 'be_young.gif', 'build.gif', 'bring.gif', 'be_friends.gif']
let there_is_subjects_array = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg']

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

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 15px, rgb(255, 255, 255) 0px 0px 20px 35px'
const FSStyle =  'rgb(255, 5, 5) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, white 0px 0px 20px 35px'
const PPStyle = 'rgb(0, 87, 250) 0px 0px 4px 15px, black 0px 0px 20px 35px'


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
function get_first_verb() {
    random_verb = Math.floor(Math.random() * first_verbs_array.length);
    selected_image = first_verbs_array[random_verb]
    document.getElementById('firstVerbPic').src = `./images-verbs/${selected_image}`
}
function get_second_verb() {
    random_verb = Math.floor(Math.random() * verbs_array.length);
    selected_image = verbs_array[random_verb]
    document.getElementById('secondVerbPic').src = `./images-verbs/${selected_image}`
}
function there_is() {
    random_subject = Math.floor(Math.random() * there_is_subjects_array.length);
    selected_image = there_is_subjects_array[random_subject]
    document.getElementById('threre_is_pic').src = `./images-thereis/${selected_image}`
    hidePrompts();
}
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

