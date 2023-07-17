<?php include 'config/database.php';?>

<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/font-awesome.css" />
    <link rel="stylesheet" href="css/bootstrap.css" />
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="icon" href="images/favicon.png" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">


    <title>URAG</title>
  </head>

  <body>
    <!-- nav -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow">
      <div class="container">


        <!-- brand -->
        <a href="index.php" class="navbar-brand h1 fw-bolder fs-3 mb-0">URAG</a>

        <!-- button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- dropoff -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li class="nav-item me-3">
              <a href="index.html" class="nav-link fw-semibold active" aria-current="page">Home</a>
            </li>

            <li class="nav-item dropdown me-3">
              <a class="nav-link dropdown-toggle fw-semibold" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu boundary-primary" aria-labelledby="aboutDropdown">
                <li><a class="dropdown-item" href="#">Background</a></li>
                <li><a class="dropdown-item" href="#">Mission</a></li>
                <li><a class="dropdown-item" href="./team.php">Team</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Contact</a></li>
              </ul>
            </li>

            <li class="nav-item me-3">
              <a href="#details" class="nav-link fw-semibold">Project</a>
            </li>

            <li class="nav-item me-3">
              <a href="#details" class="nav-link fw-semibold">Resources</a>
            </li>

            <li class="nav-item mt-md-0 mt-4">
        
              <a href="#details" class="nav-link fw-semibold btn btn-primary text-white mx-4 px-4">Join Us</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>