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

let btnExpand = document.querySelector('#btn-expand');

function expandChange (){
    let learnMoreAbout = document.querySelector('#learnMoreAboutText');

    if (learnMoreAbout.classList.contains('myClose')){
        learnMoreAbout.textContent = "Minimize tab";
        learnMoreAbout.classList.remove('myClose');
    }else{
        learnMoreAbout.textContent = "Learn more about Jing";
        learnMoreAbout.classList.add('myClose');
    }

}

btnExpand.addEventListener('click', expandChange)

//Card Expand Button on Team page - DYNAMIC

async function getData() {
    const contentRes = await fetch('./rss/member.json');
    const content = await contentRes.json();
    return content;
  }

getData().then((people)=>{
    people.forEach(function (person){
        const col = document.createElement('div');
        col.className = "col-lg-6";

        const card = document.createElement('div');
        card.classList.add('card', 'mb-3', 'border-0', 'rounded-3', 'shadow');

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const cardBodyRow = document.createElement('div');
        cardBodyRow.className = "row";

        // photo side

        const cardBodyRowCol4 = document.createElement('div');
        cardBodyRowCol4.className = 'col-4';

        const memberPhotoDiv = document.createElement('div');
        memberPhotoDiv.className = 'user-img';
        
        const memberPhotoContent = document.createElement('img');
        memberPhotoContent.classList.add('img-fluid', 'rounded-circle');
        memberPhotoContent.setAttribute("src", "https://randomuser.me/api/portraits/men/75.jpg")

        col.appendChild(card); 
        card.appendChild(cardBody);
        cardBody.appendChild(cardBodyRow);
        cardBodyRow.appendChild(cardBodyRowCol4);
        cardBodyRowCol4.appendChild(memberPhotoDiv);
        memberPhotoDiv.appendChild(memberPhotoContent);

        const personCtn = document.querySelector('#personCtn');
        personCtn.appendChild(col);

        // info side

        const cardBodyRowCol8 = document.createElement('div');
        cardBodyRowCol8.className = 'col-8';
        
        const memberInfoCtn = document.createElement('div');
        memberInfoCtn.className = 'user-info';

        const nameCtn = document.createElement('div');
        nameCtn.classList.add('display-6','mb-4');
        nameCtn.textContent = person.name

        cardBodyRowCol8.appendChild(memberInfoCtn);
        memberInfoCtn.appendChild(nameCtn);

        cardBodyRow.appendChild(cardBodyRowCol8);

        console.log(person)
    })
}


) 