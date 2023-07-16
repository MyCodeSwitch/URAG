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



document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formLandingPage');

    var messageElement = document.createElement('div');
    messageElement.className = 'alert';
    messageElement.style.display = 'none';

    document.body.appendChild(messageElement);


    

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var emailInput = form.querySelector('input[name="email"]');
        var email = emailInput.value;

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
        const msgBar = document.querySelector('#alert')
        msgBar.classList.remove('d-none');
    }
    
    // function displayMessage(message, type) {
    //     messageElement.textContent = message;
    //     messageElement.className = 'alert alert-' + type;
    //     messageElement.style.display = 'block';
    // }
});

function close(){
    const alert = document.querySelector('#alert');
    alert.classList.add('d-none');
}


const closeBtn = document.querySelector('#closeAlert');
closeBtn.addEventListener('click', close)


// expendable card at team page
document.addEventListener('DOMContentLoaded', function() {
    var expandButton = document.querySelector('.expand-btn');
    var expandableContent = document.querySelector('.expandable');
  
    expandButton.addEventListener('click', function() {
      expandableContent.classList.toggle('expanded');
      expandButton.textContent = expandableContent.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
  });