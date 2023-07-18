<?php
include 'inc/header.php';
?>

<style>
  body{
    background-color: var(--bs-gray-200);
  }

  .card{
    background-color: whitesmoke ;
  }
 

  .expandCtn,
  .expandBtn{
  background-color: var(--bs-gray-300);
  transition: background-color 0.3s ease;
  }

  .expandBtn:hover {
  background-color: var(--bs-gray-400);
}


</style>

<!-- Header -->
<div class="container">
  <div class="pt-7 flex-column justify-content-center">
    <div class="display-4 text-dark">
      The Team
    </div>
      <p>We are consisted of volunteers</p>
    </div>
</div>

<!-- cards -->
<div class="container mt-3 mb-7">
  <div id="personCtn" class="row">
    <div class="col-lg-4 col-md-6">
      <div class="card m-3 pt-3 shadow">
        <!-- cardbody -->
        <div class="card-body">
          <div class="d-flex flex-column justify-content-center">
              <div class="user-img d-flex justify-content-center">
                <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="" class="img-fluid rounded-circle" />
              </div>
                <div class="fs-3 fw-bold my-4 d-inline-flex justify-content-center"> <div>Jing Zhang</div>,<div class="ms-2">AICP</div></div>
                <h6 class="mb-4 d-flex justify-content-center">United States, China</h6>
                <div class="d-flex justify-content-center">
                  <a id="linkedInIcon" href="https://www.cnn.com" target="_blank"><i class="fa-brands fa-linkedin fs-3 me-3"></i></a>
                  <a id="emailIcon" href="https://www.cnn.com" target="_blank"><i class="fa-solid fa-envelope fs-3 mb-4"></i></a>
                </div>
                <div class="d-flex justify-content-center text-center">
                  <p>Transportation Planning, Full Stack Development</p> 
                </div>
          </div>
        </div>

        <!-- expand button -->
        <div class="expandBtn rounded-bottom d-flex justify-content-center align-items-center toggleBtn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <div class="myClose px-3 toggleBtnContent">
            More about Jing
          </div>
          <i class="fa-solid fa-circle-plus p-3 ms-auto toggleBtnIconPlus"></i>
          <i class="fa-solid fa-circle-minus p-3 ms-auto toggleBtnIconMinus d-none"></i>
        </div>

        <div class="container card-text collapse expandCtn" id="collapseExample">
          <p class="p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptate commodi culpa porro tempora quasi minima,
            impedit unde atque quia assumenda blanditiis dolore eius nobis eveniet doloribus reprehenderit laboriosam totam
            natus earum eligendi. Perferendis voluptas nisi excepturi tempora modi quae dolores? Minus fugiat nesciunt ratione
            corporis recusandae autem laudantium ullam libero, pariatur soluta, distinctio expedita dolores? Quae quisquam ratione
            voluptatibus velit vero illo aliquam ut soluta nemo omnis saepe doloremque neque laboriosam alias tempore atque ex optio
            quasi et sequi dolores rem, repellendus rerum nulla. Ab sit blanditiis eius laboriosam quae repellendus?
          </p>
        </div>
      </div>
    </div>
  </div>
</div>







<!-- Join email list Section // ALL Footer Section-->
<?php
include 'inc/footer.php';
?>