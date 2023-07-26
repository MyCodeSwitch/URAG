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
  <div id="personCtn" class="row d-flex align-items-stretch">
    
  </div>
</div>







<!-- Join email list Section // ALL Footer Section-->
<?php
include 'inc/footer.php';
?>