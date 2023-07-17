<?php
include 'inc/header.php';
?>

<style>
  body{
    background-color: var(--bs-gray-200);
  }

  .card{
    background-color: var(--bs-gray-300) ;
  }


</style>

<!-- Header -->
<!-- <header class="header">
      <div class="hero text-white pt-7 pb-5">
        <div class="container">
          <div class="p-md-7 ps-md-0 col-lg-7 col-md-10 col-12 pb-2 ">
            <div class="p-4 rounded-5" style="background-color: rgba(54, 54, 54, 0.7);">

              <h1 class="display-5 fw-bold mb-5">Building Together: Ukrainian-led Recovery with Global Support</h1>
  
              <p class="lead">The Ukraine Rebuilding Action Group (URAG) is a volunteer organization established by the American Planning Association International Division to assist Ukraine in its recovery in collaboration with Ukrainian planners, architects, builders, government officials, and community members.  </p>
            </div>
          </div>
        </div>
      </div>
    </header> -->






<div class="container mt-7 mb-7">
  <div id="personCtn" class="row">
    <div class="col-lg-6">
      <div class="card mb-3 border-0 rounded-3">
        <!-- cardbody -->
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              <div class="user-img d-flex justify-content-center">
                <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="" class="img-fluid rounded-circle" />
              </div>
            </div>
            <div class="col-8">
              <div class="user-info">
                <h3 class="display-6 mb-4">Jing Zhang <span class="small fs-4 ms-2">AICP</span></h3>
                <h6 class="mb-4 fw-bolder text-secondary">United States, China</h6>
                <a id="linkedInIcon" href="https://www.cnn.com" target="_blank"><i class="fa-brands fa-linkedin fs-3 me-2"></i></a>
                <a id="emailIcon" href="https://www.cnn.com" target="_blank"><i class="fa-solid fa-envelope fs-3 mb-4"></i></a>

                <div>
                  Transportation Planning, Full Stack Development, Piano
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- expand button -->
        <div id="btn-expand" class="bg-info rounded-bottom d-flex align-items-center justify-content-center" style="height: 40px;" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <div id="learnMoreAboutText" class="myClose" p-2>
            Learn More About Jing
          </div>

        </div>

        <div class="container card-text collapse mt-2" id="collapseExample">
          <p>
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