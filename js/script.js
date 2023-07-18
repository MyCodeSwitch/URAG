// navbar hide and show
let prevScrollPosition = window.scrollY || window.pageYOffset;

window.addEventListener("scroll", function(){
    let currentScrollPosition = window.scrollY || window.pageXOffset;

    if (prevScrollPosition > currentScrollPosition){
        document.querySelector(".navbar").classList.remove("navbar-hidden");
    }else{
        document.querySelector(".navbar").classList.add("navbar-hidden");
    }

    prevScrollPosition = currentScrollPosition;
}
)


// form submision at landing page

let emailValueInMsg;

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formLandingPage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var emailInput = form.querySelector('input[name="email"]');
        var email = emailInput.value;

        emailValueInMsg = email;

        // Validate and sanitize email
        email = email.trim();
        if (!validateEmail(email)) {
            displayMessage('Invalid email format', 'error');
            return;
        }

        // Submit the form via AJAX
        fetch('', {
            method: 'POST',
            body: new URLSearchParams(new FormData(form))
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(function(data) {
            if (data.status === 'success') {
                displayMessage();
                form.reset();
            } else {
                displayMessage(data.message, 'error');
            }
        })
        .catch(function(error) {
            console.error(error);
            displayMessage('An error occurred while submitting the form.', 'error');
        });
    });

    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function displayMessage() {
        let closeIcon = document.querySelector('#closeAlert')

        let msg = document.createTextNode(`Thank you! We added ${emailValueInMsg} to our database`);

        const msgBar = document.querySelector('#alert')

        msgBar.insertBefore(msg, closeIcon);

        msgBar.classList.remove('d-none');
    }
});


//Close the msg bar for email list input on landing page
function close(){
    const alert = document.querySelector('#alert');
    alert.classList.add('d-none');
}

const closeBtn = document.querySelector('#closeAlert');
closeBtn.addEventListener('click', close);


//Card Expand Button on Team page - HARD CODE

let toggleBtn = document.querySelector('.toggleBtn');

function memberInfoToggle (){
    let toggleBtnContent = document.querySelector('.toggleBtnContent');
    let toggleBtnIconPlus = document.querySelector('.toggleBtnIconPlus')
    let toggleBtnIconMinus = document.querySelector('.toggleBtnIconMinus')

    if (toggleBtnContent.classList.contains('myClose')){
        toggleBtnContent.textContent = " ";
        toggleBtnIconPlus.classList.add('d-none');
        toggleBtnIconMinus.classList.remove('d-none');
        toggleBtnContent.classList.remove('myClose');
        toggleBtn.classList.remove('rounded-bottom')
    }else{
        toggleBtnContent.textContent = "More about Jing";
        toggleBtnIconPlus.classList.remove('d-none');
        toggleBtnIconMinus.classList.add('d-none');
        toggleBtnContent.classList.add('myClose');
        toggleBtn.classList.add('rounded-bottom')
    }
}

toggleBtn.addEventListener('click', memberInfoToggle)

//Card generation on team page - DYNAMIC

async function getData() {
    const contentRes = await fetch('./rss/member.json');
    const content = await contentRes.json();
    return content; 
  }

getData().then((people)=>{
    people.forEach(function (person){
        
        console.log(person)
    })
}


) 