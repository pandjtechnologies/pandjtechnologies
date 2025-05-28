<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="https://i.ibb.co/crQGmf7/1-modified.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="cars.css">
        <link href='https://fonts.googleapis.com/css?family=Berkshire Swash' rel='stylesheet'>
    <title>Trinadh tours and travels-Home</title>
</head>
<style>
.parallax {
   height: 300px;
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-image: url('https://i.ibb.co/jL6Q062/Short-Term-Car-Rental.webp');
   position: relative; /* Make sure the div is positioned relative for absolute positioning of text */

   
 }
     a {
    color: #000000;
  
}
 *{
   margin: 0%;
   padding: 0%;
 }

 .parallax::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background color */
   z-index: 1; /* Place it above the image */
 }

 .parallax-text {
   position: absolute;
   top: 50%; /* Adjust as needed to vertically center the text */
   left: 50%; /* Adjust as needed to horizontally center the text */
   transform: translate(-50%, -50%);
   text-align: center;
   color: #fff; /* Text color */
   z-index: 2; /* Place it above the semi-transparent background */
   white-space: nowrap;
 }
 @font-face {
 font-family: 'CustomFont'; /* Choose a name for your font */
 src: url('path-to-your-font.woff2') format('woff2'), /* Path to your font file */
      url('path-to-your-font.woff') format('woff'); /* Path to your font file */
 font-weight: normal;
 font-style: normal;
}

 .parallax-text h1 {
  /* Choose a name for your font */
  
 font-size: 38px;
 font-weight: 800;
 text-shadow: 1px 1px 2px rgba(209, 205, 186, 0.719);
 color: rgb(252, 250, 247);
 font-family: 'Gabriola', sans-serif;
 
 /* Use the custom font followed by fallback fonts */
}

@import url('https://fonts.cdnfonts.com/css/gabriola');

.parallax-text h2
{
  font-family: 'Gabriola', sans-serif;
}

.parallax-text {
   font-size: 52px;
   font-weight: 900;
   text-shadow: 1px 1px 2px rgba(158, 157, 152, 0.719);
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                                               
 }

 /* Change the color for "YOUR" */
 .your-text {
   color:  rgb(255, 187, 0); /* Replace with your desired color code or color name */
 }

 /* Change the color for "CAR" */
 .carfu-text {
   color:  rgb(255, 187, 0); /* Replace with your desired color code or color name */
 }


 @media (max-width: 768px) {
  .parallax {
  height:300px;
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-image: url('https://i.ibb.co/Thvg8c3/blue-bg.jpg');
   
   position: relative; /* Make sure the div is positioned relative for absolute positioning of text */

   
 }

   
   .parallax-text h1 {
     font-size: 24px; /* Decrease font size for mobile */
     padding-bottom:20%;
   }
   
   .parallax-text h2 {
     font-size: 22px; /* Decrease font size for mobile */
   }
   
  .parallax{
   height: 200px;
  }

 }
 
</style>
<style>
  .reveal{
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: all 2s ease;
  }
  .reveal.active{
    opacity: 1;
    transform: translateY(0px);
  }
 
</style>
<body>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <img style="width: 80px; height: 80px; border-radius: 50%;" class="imagelog" src="https://i.ibb.co/crQGmf7/1-modified.png">
              <a class="navbar-brand" href="#">&nbsp;Trinadh Tours and Travels</a>
              <ul class="navbar-nav mx-auto mt-2 mt-lg-0 justify-content-center" > <!-- Added mx-auto and justify-content-center classes -->
                  <li class="nav-item active" >
                      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="aboutus.html">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="contact us.html"><span class="sr-only">(current)</span>Contact</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="carslist.html">Our Cars</a>
                  </li>
                 
              </ul>
            <a href="https://api.whatsapp.com/send/?phone=918698209999&text&type=phone_number&app_absent=0" class="btn btn-outline-success my-2 my-sm-0">Book Now</a>

            </form>
        </div>
    </nav>

   

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 <!-- Your content goes here -->
 <link href="https://fonts.cdnfonts.com/css/gabriola" rel="stylesheet">
 <div class="slider-container">
  <div class="slider">
      <div class="slide">
          <img src="https://i.ibb.co/RpBrqX1/Trinadh-tours-and-travels-21.png" alt="Image 1" class="image">         
      </div>    
      <div class="slide">
          <img src="https://i.ibb.co/5xdVDB0/best-CAR-for-rental-3.png " alt="Image 2" class="image">     
      </div>
      <div class="slide">
          <img src="https://i.ibb.co/TYrq7VL/best-CAR-for-rental-4.png" alt="Image 3" class="image">
         
      </div>
  </div>
</div>


<script>
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let counter = 0;

  function moveSlide() {
      counter++;
      if (counter === slides.length) {
          counter = 0;
      }
      slider.style.transform = `translateX(-${counter * 100}%)`;
  }

  setInterval(moveSlide, 5000); // Change slide every 5 seconds
</script>
<style>
  .needhelp{
    background-color: #e9ecef;;font-size: 30px; text-align: center;color: rgb(0, 0, 0);
   font-weight:900px;
    font-family: sans-serif;
    font-style: oblique;
   
  }

  @media (max-width: 768px){
.needhelp {
    padding-top: 0px;
    font-size: 19px;
    font-weight: 600;
    background-color: #e9ecef;
    color: #000811;
    font-family: sans-serif;
    font-style: oblique;
  }
.slider-container{
    height: 350px;
  }
  }
     .getthe {
  font-size: 29px;
  font-weight: 600;
  text-align: center;
}

/* Mobile Styles (for screens up to 768px wide, adjust as needed) */
@media (max-width: 768px) {
  .getthe {
     /* Adjust font size for mobile */
    font-size: 20px;
    padding-top: 40px;
    font-family: sans-serif;
    font-weight: 700;
    /* Add other mobile-specific styles here */
  }
}


</style>
<style>
  /* Styles for laptops and desktops (screen width 768px and above) */
  @media screen and (min-width: 768px) {
      .slider-container143 {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
      }

      .text-overlays143 h2 {
          padding-top: 160px;
          
      }

      .slider143 {
          display: flex;
          transition: transform 1s ease-in-out;
      }

      .slide143 {
          width: 100%;
          object-fit: cover; 
          flex-shrink: 0;
          position: relative;
      }

      .slide143 img {
          width: 100%;
          max-height: 600px; /* Use max-height to maintain aspect ratio */
          height: 600px;
      }

      .text-overlays143 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          color: white;
          display: flex;
          background-color: rgba(0, 0, 0, 0.5);
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
      }

      /* Increase font size for larger screens */
      .text-overlays143 h2 {
          font-size: 42px; /* Adjust the font size as needed */
        /* Add text shadow */
          /* Increase letter spacing for unique style */
          font-weight: 900;
          text-shadow: 1px 4px 2px rgb(0, 8, 43);/* Add font weight for emphasis */
          text-transform: uppercase;
      }

      .text-overlays143 p {
          font-size: 28px;
          margin: 0; /* Remove default margin */
          padding: 10px 0; /* Add some padding at the bottom */
          text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.7); /* Add text shadow */
          /* Add italic style for uniqueness */
      }
  }

  /* Styles for mobile devices (screen width up to 767px) */
  @media screen and (max-width: 767px) {
      .slider-container143 {
          display: none; /* Hide the slider container on mobile devices */
      }
  }
</style>
<div class="slider-container143">
  <div class="slider143">
      <div class="slide143">
          <img src="https://i.ibb.co/T1sFt82/Trinadh-tours-and-travels-24.png" alt="Image 1" class="image143">         
          
      </div>    
      <div class="slide143">
           <img src="https://i.ibb.co/Gv9Xv0g/prakasam-barrage.jpg" alt="Image 2" class="image143">
          <div class="text-overlays143">
              <h2>AP'S Largest Car Travels with<span class="carfu-text">100+ vehicles</span></h2>      
          </div> 
        
      </div>
      <div class="slide143">
          <img src="https://i.ibb.co/VwJjh6S/side.jpg" alt="Image 3" class="image143">
          <div class="text-overlays143">
              <h2>Explore the World with Trinadh <span class="carfu-text">Tours and Travels</span></h2>      
          </div>
      </div>
  </div>
</div>
<script>
  const slider143 = document.querySelector('.slider143');
  const slides143 = document.querySelectorAll('.slide143');
  let counter143 = 0;

  function moveSlide143() {
      counter143++;
      if (counter143 === slides143.length) {
          counter143 = 0;
      }
      slider143.style.transform = `translateX(-${counter143 * 100}%)`;
  }

  setInterval(moveSlide143, 5000); // Change slide every 5 seconds
</script>

<p class="needhelp">Contact Us <a href="tel:+918698209999">+91 8698209999 </a> <a href="tel:+918885277553">+91 8885277553</a></p>


  <h2 class="getthe">Get The Best Offers</h2>
<div class="parallax">
  <div class="parallax-text">
    <h1>OUR VEHICLES</h1>
  
<h2 class="parallax-text">CHOOSE <span class="your-text">YOUR</span> PERFECT <span class="carfu-text">CAR</span></h2>
  </div>
</div>

<div class="car-list reveal">
  <!-- Etios -->
  <div class="car reveal">
      <img src="https://i.ibb.co/12vdJ36/toyota-etios-car-rental-services-1000x1000.webp" alt="Car 2" >
    
      <div class="car-details">
        
        <div class="car-price">Etios</div>
        <div class="car-name">Car 1</div>
      </div>
      <div class="toggle-buttons">
        <button class="toggle-button active" data-tab="1">Day Rent</button>
        <button class="toggle-button" data-tab="2">Regular  </button>
        <button class="toggle-button" data-tab="3">Out station</button>
        
        <div class="content active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: block;">
        </br>
        <table>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 Hrs</td>
              <td>1200</td>
            </tr>
          
            
            <tr>
              <td>Fuel Charge</td>
              <td>10 Km/ 1 Litre</td>
            </tr>
            <tr>
              <td>Chauffeur Allowance</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Extra Hr</td>
              <td>200</td>
            </tr>
            <tr>
                <td>24 Hrs</td>
                <td>1800</td>
              </tr>
            <tr>
                <td>Chauffeur Allowance</td>
                <td>500</td>
              </tr>
          </tbody>
          </table>
          </br>
      
    
  </div>
         
        <div class="content" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
        </br>
        <table>
          <thead>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;4 Hrs-40KMS &nbsp;</td>
              <td>&nbsp;1200 &nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;8 Hrs-80KMS&nbsp;</td>
              <td>&nbsp;2000&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;EXTRA HOUR&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;200&nbsp;</td>
            </tr>
            
            <tr>
              <td>&nbsp;&nbsp;&nbsp;Extra Km&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;13&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </br>
    </br>
  </br>
</br>
</br>
        </div>
        <div class="content1" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
        </br>
        <table>
          <thead>
            <tr>
              <th>Duration&nbsp;&nbsp;&nbsp;</th>
              <th>Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RATE PER EACH KM</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Chauffeur Allowance</td>
              <td>500</td>
            </tr>
            
          </tbody>
        </table>
        </br>


      </div>
      
      </div> 

      <a href="https://api.whatsapp.com/send/?phone=918698209999&text&type=phone_number&app_absent=0" class="btn btn-outline-success my-2 my-sm-0">Book Now</a>

  </div>
  <div class="car reveal">
    <!-- Dezire/etios -->
   <img src="https://i.ibb.co/LhVkzxz/PEARL-ARCTIC-WHITE-939393.webp" alt="Car 2">
   <div class="car-details">
     
     <div class="car-price">SWIFT DEZIRE</div>
     <div class="car-name">Car-2</div>
   </div>
      <div class="tab-container">
        <button class="tab-button active" data-tab="1">Day Rent</button>
        <button class="tab-button" data-tab="2">Regular</button>
        <button class="tab-button" data-tab="3">Out station</button>
        
        <div class="content10 active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: block;">
        </br>
        <table>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 Hrs</td>
              <td>1200</td>
            </tr>
          
            
            <tr>
              <td>Fuel Charge</td>
              <td>10 Km/ 1 Litre</td>
            </tr>
            <tr>
              <td>Chauffeur Allowance</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Extra Hr</td>
              <td>200</td>
            </tr>
            <tr>
                <td>24 Hrs</td>
                <td>1800</td>
              </tr>
            <tr>
                <td>Chauffeur Allowance</td>
                <td>500</td>
              </tr>
          </tbody>
        </table>
        </br>

        </div>
         
        <div class="content10" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
        </br>
        <table>
          <thead>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;4 Hrs-40KMS &nbsp;</td>
              <td>&nbsp;1200 &nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;8 Hrs-80KMS&nbsp;</td>
              <td>&nbsp;2000&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;EXTRA HOUR&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;200&nbsp;</td>
            </tr>
            
            <tr>
              <td>&nbsp;&nbsp;&nbsp;Extra Km&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;13&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </br>
    </br>
  </br>
</br>
</br>
        </div>
        
        <div class="content10" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
        </br>
        <table>
          <thead>
            <tr>
              <th>Duration&nbsp;&nbsp;&nbsp;</th>
              <th>Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RATE PER EACH KM</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Chauffeur Allowance</td>
              <td>500</td>
            </tr>
            
          </tbody>
        </table>
        </br>
       </div>
        
      </div>
    
      <a href="https://api.whatsapp.com/send/?phone=918698209999&text&type=phone_number&app_absent=0" class="btn btn-outline-success my-2 my-sm-0">Book Now</a>

  </div>
 
  <div class="car reveal">
    <!--Innova -->
   <img src="https://i.ibb.co/LCZSJRB/PHOTO-2023-09-07-18-06-27.jpg" alt="Car 2">
   <div class="car-details">
     <div class="car-price">Innova</div>
     <div class="car-name">Car-3</div>
   </div>
      <div class="tab-container1">
          <button class="tab-button1 active" data-tab="1">Day Rent</button>
          <button class="tab-button1" data-tab="2">Regular</button>
          <button class="tab-button1" data-tab="3">Out station</button>
      
        
        <div class="content12 active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: block;">
        </br>
        <table>
          <thead>
            <tr>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12 Hrs</td>
              <td>2000</td>
            </tr>
          
            
            <tr>
              <td>Fuel Charge</td>
              <td>8Km/ 1 Litre</td>
            </tr>
            <tr>
              <td>Chauffeur Allowance</td>
              <td>500</td>
            </tr>
            <tr>
              <td>Extra Hr</td>
              <td>300</td>
            </tr>
            <tr>
                <td>24 Hrs</td>
                <td>3000</td>
              </tr>
            <tr>
                <td>Chauffeur Allowance</td>
                <td>700</td>
              </tr>
          </tbody>
        </table>
        </br>
        </div>
         
        <div class="content12" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
        </br>
        <table>
          <thead>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;4 Hrs-40KMS &nbsp;</td>
              <td>&nbsp;2500 &nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;8 Hrs-80KMS&nbsp;</td>
              <td>&nbsp;3000&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;EXTRA HOUR&nbsp;&nbsp;&nbsp;</td>
              <td>&nbsp;300&nbsp;</td>
            </tr>
            
            <tr>
              <td>&nbsp;&nbsp;&nbsp;Extra Km&nbsp;</td>
              <td>&nbsp;&nbsp;&nbsp;17&nbsp;</td>
            </tr>
          </tbody>
        </table>
       
      </br>
    </br>
  </br>
</br>
</br>
        </div>
        <div class="content12" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
        </br>
        <table>
          <thead>
            <tr>
              <th>Duration&nbsp;&nbsp;&nbsp;</th>
              <th>Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RATE PER EACH KM</td>
              <td>17</td>
            </tr>
            <tr>
              <td>Chauffeur Allowance</td>
              <td>700</td>
            </tr>
            
          </tbody>
        </table>
        </br>
       </div>
       <a href="https://api.whatsapp.com/send/?phone=918698209999&text&type=phone_number&app_absent=0" class="btn btn-outline-success my-2 my-sm-0">Book Now</a>
      
      </div>
      
  
  <!--  cars here -->

</div>
<div class="car reveal">
  <!-- crysta -->
 <img src="https://i.ibb.co/J521ZCf/c-h-6-500x500.webp" alt="Car 2">
 <div class="car-details">
 
 <div class="car-price">CRYSTA</div>
 <div class="car-name">Car-4</div>
 </div>
  <div class="tab-container12">
      <button class="tab-button12 active" data-tab="1">Day Rent</button>
      <button class="tab-button12 " data-tab="2">Regular</button>
      <button class="tab-button12" data-tab="3">Out station</button>
    
    <div class="content22 active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: block;">
    </br>
    <table>
      <thead>
      <tr>
       <th>Duration</th>
       <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr>
       <td>12 Hrs</td>
       <td>2500</td>
      </tr>
      
      
      <tr>
       <td>Fuel Charge</td>
       <td>8 Km/ 1 Litre</td>
      </tr>
      <tr>
       <td>Chauffeur Allowance</td>
       <td>500</td>
      </tr>
      <tr>
       <td>Extra Hr</td>
       <td>350</td>
      </tr>
      <tr>
         <td>24 Hrs</td>
         <td>3500</td>
       </tr>
      <tr>
         <td>Chauffeur Allowance</td>
         <td>700</td>
       </tr>
      
      </tbody>
      </table>

    </div>
     
    <div class="content22" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
    </br>
    <table>
      <thead>
        <tr>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
          <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>&nbsp;4 Hrs-40KMS &nbsp;</td>
          <td>&nbsp;3000 &nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;8 Hrs-80KMS&nbsp;</td>
          <td>&nbsp;4000&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;EXTRA HOUR&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;350&nbsp;</td>
        </tr>
        
        <tr>
          <td>&nbsp;&nbsp;&nbsp;Extra Km&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;19&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </br>
</br>
</br>
</br>
    </div>
    <div class="content22" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-6831" tabindex="0" style="display: none;">
  </br>
  <table>
    <thead>
      <tr>
        <th>Duration&nbsp;&nbsp;&nbsp;</th>
        <th>Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>RATE PER EACH KM</td>
        <td>19</td>
      </tr>
      <tr>
        <td>Chauffeur Allowance</td>
        <td>700</td>
      </tr>
      
    </tbody>
  </table>
  </br>
 </div>
   
  </div>
</br>
<a href="https://api.whatsapp.com/send/?phone=918698209999&text&type=phone_number&app_absent=0" class="btn btn-outline-success my-2 my-sm-0">Book Now</a>

</div>

<script>
  // Select all toggle buttons
const buttons = document.querySelectorAll('.toggle-button');

// Select all content sections
const contents = document.querySelectorAll('.content');

// Select all content1 sections
const content1 = document.querySelectorAll('.content1');

// Add click event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    // Remove 'active' class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Hide all content sections
    contents.forEach((content) => {
      content.style.display = 'none';
    });

    // Hide all content1 sections
    content1.forEach((content1) => {
      content1.style.display = 'none';
    });

    // Show the selected content section and add 'active' class to the clicked button
    contents.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      }
    });

    content1.forEach((content1) => {
      if (content1.dataset.tab === tab) {
        content1.style.display = 'block';
      }
    });

    button.classList.add('active');
  });
});


// Select all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Select all content sections
const contentSections = document.querySelectorAll('.content10');

// Add click event listeners to tab buttons
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    // Remove 'active' class from all tab buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Hide all content sections
    contentSections.forEach((content) => {
      content.style.display = 'none';
    });

    // Show the selected content section and add 'active' class to the clicked tab button
    contentSections.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      }
    });

    button.classList.add('active');
  });
});



// Select all tab buttons
const tabButtons1 = document.querySelectorAll('.tab-button1');

// Select all content sections
const contentSections1 = document.querySelectorAll('.content12');

// Add click event listeners to tab buttons
tabButtons1.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    // Remove 'active' class from all tab buttons
    tabButtons1.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Hide all content sections
    contentSections1.forEach((content) => {
      content.style.display = 'none';
    });

    // Show the selected content section and add 'active' class to the clicked tab button
    contentSections1.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      }
    });

    button.classList.add('active');
  });
});



// Select all tab buttons
const tabButtons12 = document.querySelectorAll('.tab-button12');

// Select all content sections
const contentSections12 = document.querySelectorAll('.content22');

// Add click event listeners to tab buttons
tabButtons12.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    // Remove 'active' class from all tab buttons
    tabButtons12.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Hide all content sections
    contentSections12.forEach((content) => {
      content.style.display = 'none';
    });

    // Show the selected content section and add 'active' class to the clicked tab button
    contentSections12.forEach((content) => {
      if (content.dataset.tab === tab) {
        content.style.display = 'block';
      }
    });

    button.classList.add('active');
  });
});
  </script>
</div>
<script src="script.js"></script>  
</br>
<div class="cousnt123654">
    <a href="carslist.html">
        <button class="buncars1304 reveal">View all cars</button>
    </a>
</div>
</br>
</br>
<div class="experienceservice reveal">
  
  <div class="image-experience123 reveal">
    <img src="https://i.ibb.co/4SVhtVb/opt.png">
  </div>
  <div class="contentexperiences123">
    <h3 class="protocols">Feel The Best Experience With Our Services</h3>
    <div class="subtitle">Our services are categorized under 3 segments:</div>
    <div class="elementor-icon elementor-animation-">
      <i aria-hidden="true" class="icon icon-cog"></i>
    </div>
    <div class="segment reveal">
      <img src="https://i.ibb.co/mcJFTtZ/protocols.png">
      <h1>Govt Protocol:</h1>
    </div>
    <p>
      We have been providing vehicles to the government through protocol and also to the Head Of Departments and commissioners of the respective govt departments.
    </p>
    <div class="segment reveal">
      <img src="https://i.ibb.co/Kyp9nTV/luxurysegment.png">
      <h1>Luxury segment</h1>
    </div>
    <p>
      We offer luxury cars namely Audi Q7, BMW 7series, and Mercedes C 220, etc. For Govt officials, Celebrities, foreign delegates, and also for events like marriages, etc.
    </p>
    <div class="segment reveal">
      <img src="https://i.ibb.co/wQRqdfs/outstation.png">
      <h1>Local and Outstation services.</h1>
    </div>
    <p>
      We also provide vehicles on KM basis and also Day basis like in tour packages, long trips, or wedding packages, etc.
    </p>
  </div>
</div>
</br>

<h2 class="main-comfort reveal">Your comfort and convenience are our first priority</h2>
<p class="subcomfort reveal">You can trust us to do our job in delivering cars on time and up to your expectations, 100% of the time, all the time.</p>
</br></br></br>
<div class="service-container reveal">
  <div class="service-box">
    <div class="icon-container">
      <img src="https://i.ibb.co/3djqwYr/car-icon.jpg" style="width: 15%; height: 18%;">
      <h6 style="text-align: center;">&nbsp;SAFETY &amp; COMFORT</h6>
    </div>
  </br>
    <p class="service-paragraph ">Your safety and comfort are our first priority. A complete GPS tracking of the vehicle is also maintained. Every vehicle is well maintained regularly and proper maintenance tests take place before the commencement of any trip. All vehicles are maintained with perfect and updated vehicle records</p>
  </div>
  <div class="service-box" style="background-color: #268040;"></br>
    <div class="icon-container reveal"></br>
      <img src="https://i.ibb.co/vXtn8BJ/prof.jpg" style="width: 32px;">
      <h6 style="text-align: center;">&nbsp;PROFESSIONAL</h6>
    </div>
  </br>
    <p class="service-paragraph ">All our chauffeurs and employees are well trained and professionals. Our chauffeurs are recruited only after passing multiple tests like driving, behavior, maintenance etc. They arrive at duty in well-groomed uniforms.</p>
  </div>
  <div class="service-box reveal">
  </br><div class="icon-container">
      <img src="https://i.ibb.co/K2kFFS7/24png.png" style="width: 37px;">
      <h6 style="text-align: center;">&nbsp;24/7 SERVICE</h6>
    </div></br>
    <p class="service-paragraph ">We’re always at your fingertips and a call away to help you with our services. You can call us anytime and get your journey started or even get your queries clarified from our well-supportive team.</p>
  </div>
</div>
</br></br></br>
<div class="container987 reveal">

<div class="content53">
  <div class="arrow left">&lt;</div>
  <div class="heading53">Our Customers Love Us!</div>
  <div class="mini-box">
    <br /><br /><br />
    <p>"Experience was great traveling with this cabs service rental. The rates were affordable, driver was good, and the overall experience was also awesome. </p>
    <h2 style="font-size: 24px; font-family: 'Brush Script MT', cursive; color:	#8686d1;margin-top: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bhargav</h2>
  </div>
  <div class="mini-box">
    <br /><br /><br /><br />
    <p>"Excellent service provided by reliable car rentals. Disciplined pickup and drop and good quality of car provided</p>
    <h2 style="font-size: 24px; font-family: 'Brush Script MT', cursive; color:	#8686d1;margin-top: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rama Krishna</h2>
  </div>
  <div class="mini-box">
    <br /><br /><br /><br />
    <p>"Best service with good price, nice driver, nice vehicle overall very good. I will recommend it to all of you</p>
    <h2 style="font-size: 24px; font-family: 'Brush Script MT', cursive; color:	#8686d1;margin-top: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rishita</h2>
  </div>
  <div class="mini-box">
    <br /><br />
    <p>"5 out of 5. I have tried many car rental services in Vijayawada and found that Rayudu Travels is the best and professional among all. They have very professional drivers who are very caring, loyal</p>
    <h2 style="font-size: 24px; font-family: 'Brush Script MT', cursive; color:	#8686d1;margin-top: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manasa</h2>
  </div>
  <div class="mini-box">
    <br /><br /><br />
    <p>"Very good service, totally satisfied. The driver was very genial and loved his work. I had an occasion to engage your services on April from Vijayawada to Secunderabad</p>
    <h2 style="font-size: 24px; font-family: 'Brush Script MT', cursive; color:	#8686d1;margin-top: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Santhi Dutha</h2>
  </div>
  <div class="mini-box">
    <br /><br /><br />
    <p>"Excellent service provided by reliable car rentals. Disciplined pickup and drop and good quality of car provided</p>
    <h2 style="font-size: 24px; font-family: 'Brush Script MT', cursive; color:	#8686d1;margin-top: 28px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pradeep</h2>
  </div>
  <div class="arrow right">&gt;</div>
</div>
<img class="mapimage" style="width: 55%;height: 650px;"src="https://i.ibb.co/ZKw4SJs/213-2139247-india-map-png-transparent-indian-map-with-people.jpg">


</div>
</div>

<script>

  var miniBoxes = document.querySelectorAll('.mini-box');
  var currentIndex = 0;

  function showMiniBox(index) {
    for (var i = 0; i < miniBoxes.length; i++) {
      miniBoxes[i].style.display = 'none';
    }
    miniBoxes[index].style.display = 'block';
  }

  function showNextMiniBox() {
    currentIndex = (currentIndex + 1) % miniBoxes.length;
    showMiniBox(currentIndex);
  }

  function showPreviousMiniBox() {
    currentIndex = (currentIndex - 1 + miniBoxes.length) % miniBoxes.length;
    showMiniBox(currentIndex);
  }

  // Add click event listeners to arrows
  document.querySelector('.arrow.left').addEventListener('click', showPreviousMiniBox);
  document.querySelector('.arrow.right').addEventListener('click', showNextMiniBox);

  // Show the first mini box initially
  showMiniBox(currentIndex);

  // Automatically show the next mini box every 3 seconds
  setInterval(showNextMiniBox, 5000);
</script>
</br>
</div>
</body>
<link
rel="stylesheet"
href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
crossorigin="anonymous"
/>
<footer>
<div class="container reveal">
<div class="sec aboutus">
  <h2 style="text-align: left;padding-top: 0%">Location</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1952913.6025989961!2d78.195996!3d17.0587369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efc22bc560b7%3A0x687ec5a940dc83!2sTrinadh%20tours%20and%20travels!5e0!3m2!1sen!2sin!4v1694447371061!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  <ul class="sci">
    <li>
      <a href="https://www.facebook.com/profile.php?id=61551121944330&mibextid=ZbWKwL"><i class="fab fa-facebook"></i></a>
    </li>
    
    <li>
      <a href="https://instagram.com/trinadhtoursandtravels?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><i class="fab fa-instagram"></i></a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCf3Sx0KP91T-MJjdLYaEunA"><i class="fab fa-youtube"></i></a>
    </li>
    <li>
      <a href="mailto:Trinadhtoursandtravels@gmail.com">
        <img src="https://i.ibb.co/qphmBbT/maillog.png"style="width: 12px;heigth:15px"; alt="Gmail Logo">
      </a>
    </li>
  </ul>
</div>
<div class="sec quicklink">
 
<div class="sec contact">
   
  <h2 style="text-align: left; padding-top: 0%;">Contact Us</h2>
  <ul class="info">  
    <li> 
      <span><i class="fad fa-map-marker-alt"></i></span>
      <p>
        1-3-198, Cement Road</br>Beside Sachivalayam</br>
         Vidhyadharapuram</br>
         Vijayawada-520012
       </p>
    </li>                    
    <li>
        
      <span><i class="fad fa-phone"></i></span>
      <p>
        <a href="tel:+918698209999">+91 8698209999</a> <br />
        <a href="tel:+918885277553">+91 8885277553</a>
      </p>
    </li>
    <li>
      <span><i class="fad fa-envelope"></i></span>
      <p>
        <a href="mailto:TRINADHTOURSANDTRAVELS@GMAIL.COM">trinadhtoursandtravels@gmail.com</a>

        
      </p>
    </li> 
  </ul> 
</div>
</div>

  <div class="logo-container">
    <a href="index.html"><img src="https://i.ibb.co/crQGmf7/1-modified.png" alt="log" class="logo123"></a>
  </div>

</footer>
<div class="copyrightText">
  <p>@ 2023 Trinadh Tours and Travels | Designed By JS Projects.</p>
  </div>
    <script type="text/javascript">
      window.addEventListener('scroll', reveal);
    
      function reveal() {
        var reveals = document.querySelectorAll('.reveal');
    
        for (var i = 0; i < reveals.length; i++) {
    
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;
    
          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
          } else {
            reveals[i].classList.remove('active');
          }
        }
      }
    </script>
    
      
</body>
</html>


