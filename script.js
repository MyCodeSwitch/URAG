//Set global obj
const global = {
  currentPage: window.location.pathname
}

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

//Close the msg bar for email list input on landing page
function close(){
    const alert = document.querySelector('#alert');
    alert.classList.add('d-none');
}

const closeBtn = document.querySelector('#closeAlert');
closeBtn.addEventListener('click', close);

//Card generation on team page - DYNAMIC

function teamPage(){
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
)}

//**********
//SignUpForm
//**********

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 1080; // You can change this to the desired port

// MySQL database configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Jing',       // Replace with your MySQL username
  password: '258258', // Replace with your MySQL password
  database: 'urag_team'    // Replace with your MySQL database name
});

// Express middleware to parse incoming request data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle the form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Insert the form data into the database
  const sql = 'INSERT INTO  (name, email) VALUES (?, ?)';
  connection.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error submitting data:', err);
      res.status(500).send('Error submitting data.');
    } else {
      console.log('Form data submitted successfully!');
      res.status(200).send('Form data submitted successfully!');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

















//Init App
function init(){
  switch(global.currentPage){
    case'/':
    case'/URAG/index.html':
      console.log('Home');
      break;
    case'/URAG/team.html':
      teamPage();
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);