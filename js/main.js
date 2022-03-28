// let mark = document.getElementById('mark');
// mark.addEventListener('click', function (mark) {
//     mark.target.classList.toggle('change-mark');
// })
    
let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg','it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'Kianu.jpg', 'Emilia.jpg', 'Charlie.jpg', 'David.jpg']
let verbs_array = ['accuse.gif', 'add.gif', 'admit.gif', 'advise.gif', 'agree.gif', 'apologize.gif', 'argue.gif', 'ask_for_opinion.gif', 'ask.gif', 'backup.gif', 'become.gif', 'begged.gif', 'bet.gif','bite.gif', 'break.gif', 'bring.gif', 'broadcast.gif', 'buy.gif', 'cast.gif', 'catch.gif', 'challenge.gif', 'challenge.gif', 'chatting.gif', 'cheer.gif', 'choose.gif', 'claim.gif', 'come_up.gif', 'come.gif', 'comfort.gif', 'complain.gif', 'cook.gif', 'compliment.gif', 'conclude.gif', 'confess.gif', 'confuse.gif', 'continue.gif', 'cut.gif', 'decide.gif', 'deny.gif', 'doubt.gif', 'drive.gif', 'eat.gif', 'get_embarrassed.gif', 'encourage.gif', 'entertain.gif', 'explain.gif', 'fall.gif', 'fight.gif', 'forget.gif', 'count.gif', 'get_dressed.gif', 'give.gif', 'greet.gif', 'hear.gif', 'hesitate.gif', 'hide.gif', 'hit.gif', 'hit_again.gif', 'hurt.gif', 'inform.gif', 'interrupt.gif', 'buy.gif', 'ask.gif', 'interrupt.gif', 'knit.gif', 'let_go.gif', 'lie.gif', 'list.gif', 'listen.gif', 'look_for.gif', 'lost.gif', 'attract_attention.gif', 'offer.gif', 'persuade.gif','point_out.gif', 'punch.gif', 'put_down.gif', 'deny2.gif', 'quit.gif', 'read.gif', 'realize.gif', 'recommend.gif', 'regret.gif', 'remind.gif', 'repeat.gif', 'reply.gif', 'respond.gif', 'ride.gif', 'rip_off.gif', 'rise.gif', 'run_out_of_time.gif', 'run_out_of.gif', 'run.gif', 'rush.gif', 'being_sarcastic.gif', 'say.gif', 'see.gif', 'seek.gif', 'set.gif', 'shout_out.gif', 'shut.gif', 'slice.gif', 'sorry.gif', 'spare.gif', 'speak.gif', 'spread.gif', 'start_talking.gif', 'steal.gif', 'suggest.gif', 'shopping.gif', 'surprise.gif', 'take.gif', 'take_off_clothes.gif', 'take_off_plane.gif', 'taste.gif', 'teach.gif', 'tell.gif', 'think.gif', 'think2.gif', 'throw.gif', 'figure_out.gif', 'being_interested.gif', 'try.gif', 'turn_back.gif', 'wake.gif', 'walk.gif', 'warn.gif', 'welcome.gif', 'whisper.gif', 'write.gif']

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
function get_random_verb() {
    random_verb = Math.floor(Math.random() * verbs_array.length);
    selected_image = verbs_array[random_verb]
    document.getElementById('verb').src = `./images-verbs/${selected_image}`
}

let button = document.getElementById('mark');
button.addEventListener('click', function () {
    get_random_mark();
    get_random_subject();
    // get_random_verb();
        console.log('fuck');
})

let button_verb = document.getElementById('verb');
button_verb.addEventListener('click', function () {
    get_random_verb();
        console.log('fucking verb');
})



function presentP() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__pr__p');

    if (search == "verb") {
        button.classList.add("present__p"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("present__p")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}


function presentS() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__pr__s');

    if (search == "verb") {
        button.classList.add("present__s"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("present__s")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}


function presentC() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__pr__c');

    if (search == "verb") {
        button.classList.add("present__c"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("present__c")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function presentPC() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__pr__pc');

    if (search == "verb") {
        button.classList.add("present__pc"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("present__pc")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function pastS() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__p__s');      
    
    if (search == "verb") {
        button.classList.add("past__s"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("past__s")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function pastC() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__p__c'); 

    if (search == "verb") {
        button.classList.add("past__c"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
        
    } else {
         button.classList.remove ("past__c")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function pastP() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__p__p'); 

    if (search == "verb") {
        button.classList.add("past__p"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("past__p")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function pastPC() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__p__pc');

    if (search == "verb") {
        button.classList.add("past__pc"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("past__pc")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function futureS() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');
    let prompt = document.getElementById('prompt__f__s');

    if (search == "verb") {
        button.classList.add("future__s"); 
        console.log('первый шаг');
        prompt.classList.remove("hidden");
    } else {
         button.classList.remove ("future__s")
        console.log("второй шаг");
        prompt.classList.add("hidden");
    }
}

function futureC() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');

    if (search == "verb") {
        button.classList.add("future__c"); 
        console.log('первый шаг');
    } else {
         button.classList.remove ("future__c")
        console.log("второй шаг");
    }
}

function futureP() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');

    if (search == "verb") {
        button.classList.add("future__p"); 
        console.log('первый шаг');
    } else {
         button.classList.remove ("future__p")
        console.log("второй шаг");
    }
}

function futurePC() {
    let search = document.getElementById('div').className;
    let button = document.getElementById('div');

    if (search == "verb") {
        button.classList.add("future__pc"); 
        console.log('первый шаг');
    } else {
         button.classList.remove ("future__pc")
        console.log("второй шаг");
    }
}