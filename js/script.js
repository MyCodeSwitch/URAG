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




//Card generation on team page - DYNAMIC

async function getData() {
    const contentRes = await fetch('./rss/member.json');
    const content = await contentRes.json();
    return content; 
  }

getData()
.then((people)=>{
    people.forEach(function (person){
        //console.log(person);
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6');
        div.innerHTML = `
        <div class="card m-3 pt-3 shadow align-self-stretch">
        <!-- cardbody -->
        <div class="card-body">
          <div class="d-flex flex-column justify-content-center">
              <div class="user-img d-flex justify-content-center">
                <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="" class="img-fluid rounded-circle" />
              </div>
                <div class="fs-4 fw-bold my-4 d-inline-flex justify-content-center"> <div>${person.first_name} ${person.last_name}, ${person.professional}</div></div>
                <h6 class="mb-4 d-flex justify-content-center">${person.country}</h6>
                <div class="d-flex justify-content-center mb-4">
                  ${person.linkedIn ? 
                      `<a id="linkedInIcon" href="https://www.cnn.com" target="_blank"><i class="fa-brands fa-linkedin fs-3"></i></a>
                      ` : ``
                  }
                  ${person.email ? 
                    `<a id="emailIcon" href="https://www.cnn.com" target="_blank"><i class="fa-solid fa-envelope fs-3 ms-3"></i></a>
                    `:``
                  }
              
                  
                </div>
                <div class="d-flex justify-content-center text-center">
                  <p>${person.fields}</p> 
                </div>
          </div>
        </div>

        
        <div class="expandBtn rounded-bottom d-flex justify-content-center align-items-center toggleBtn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <div class="myClose px-3 toggleBtnContent unclickable-element inside-clickable">
            More about ${person.first_name}
          </div>
          <i class="fa-solid fa-circle-plus p-3 ms-auto toggleBtnIconPlus unclickable-element inside-clickable"></i>
          <i class="fa-solid fa-circle-minus p-3 ms-auto toggleBtnIconMinus unclickable-element inside-clickable d-none"></i>
        </div>

        <div class="container card-text expandCtn d-none">
          <p class="p-3">
            ${person.detail}
          </p>
        </div>
      </div>
        `;
        document.querySelector('#personCtn').appendChild(div);
    })
}
) 

.then(function(){
  let toggleBtns = document.querySelectorAll('.toggleBtn');
  

  toggleBtns.forEach((toggleBtn)=>{
    console.log(toggleBtn);
    toggleBtn.addEventListener('click', show);
  })

  function show(e){
    let clickedElement = e.target;
    
    //click on the btn
    if (e.target.classList.contains('expandBtn')){
      let toggleBtn = clickedElement
      let toggleBtnContent = clickedElement.querySelector('.toggleBtnContent');
      let toggleBtnIconPlus = clickedElement.querySelector('.toggleBtnIconPlus');
      let toggleBtnIconMinus = clickedElement.querySelector('.toggleBtnIconMinus');
  
      let moreInfo = clickedElement.nextElementSibling;
  
      if (toggleBtnContent.classList.contains('myClose')){
        toggleBtnContent.textContent = "Close";
        toggleBtnIconPlus.classList.add('d-none');
        toggleBtnIconMinus.classList.remove('d-none');
        toggleBtnContent.classList.remove('myClose');
        toggleBtn.classList.remove('rounded-bottom')
        moreInfo.classList.remove('d-none')
       }else{
        toggleBtnContent.textContent = "More about Jing";
        toggleBtnIconPlus.classList.remove('d-none');
        toggleBtnIconMinus.classList.add('d-none');
        toggleBtnContent.classList.add('myClose');
        toggleBtn.classList.add('rounded-bottom')
        moreInfo.classList.add('d-none')
    }}
  }
}
)

