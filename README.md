<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>P&J Technologies</title>
  <link rel="icon" type="image/x-icon" href="https://i.ibb.co/TC68vJr/logo-png.png">
  <link rel="stylesheet" href="styless.css">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Playfair+Display:wght@700&family=Montserrat:wght@700;900&display=swap" rel="stylesheet">
  
  <!-- AOS Animate On Scroll CSS -->
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet" />

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
    html, body { height: 100%; font-family: 'Poppins', sans-serif; background: #ffffff; }

    .hero {
      position: relative;
      height: 100vh;
      color: white;
      overflow: hidden;
    }

    #particles-js {
      position: absolute;
      width: 100%;
      height: 100%;
      background: black;
      z-index: 0;
    }

    .hero::before {
      content: '';
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    header {
      position: absolute; top: 0; width: 100%;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8px);
      z-index: 2;
      padding: 15px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-area img {
      height: 60px;
    }

    .logo-area span {
      font-size: 2.5em;
      color: white;
      font-weight: bold;
      font-family: noto serif display;
      font-style: italic;
    }

    nav {
      display: flex;
      gap: 80px;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-size: 1.1em;
      font-weight: bold;
    }

    nav a:hover { color: #00e1ff; }

    .hamburger {
      display: none;
      font-size: 2em;
      color: white;
      cursor: pointer;
      z-index: 3;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: -100%;
      width: 270px;
      height: 100vh;
      background: rgba(25, 25, 25, 0.8);
      backdrop-filter: blur(10px);
      border-right: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 4px 0 15px rgba(0, 0, 0, 0.4);
      padding: 70px 20px 20px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      transition: left 0.4s ease-in-out;
      z-index: 1000;
    }

    .sidebar.active { left: 0; }

    .sidebar a {
      color: white;
      text-decoration: none;
      font-size: 1.1em;
      display: flex;
      align-items: center;
      position: relative;
      padding-left: 20px;
      transition: color 0.3s ease;
    }

    .sidebar a::before {
      content: '';
      position: absolute;
      left: 0;
      height: 100%;
      width: 4px;
      background: #00e1ff;
      transform: scaleY(0);
      transition: transform 0.3s ease;
      transform-origin: top;
    }

    .sidebar a:hover::before { transform: scaleY(1); }
    .sidebar a:hover { color: #00e1ff; }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.8em;
      cursor: pointer;
      color: white;
      background: rgba(255, 255, 255, 0.1);
      padding: 5px 12px;
      border-radius: 50%;
      transition: background 0.3s ease;
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 20px;
    }

    .hero-content h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 4em;
      font-weight: 300;
      text-transform: uppercase;
      line-height: 1.1;
      color: white;
    }

    .hero-content h1 span.purple {
      color: #a100ff;
      text-shadow: 0 0 12px rgba(161, 0, 255, 0.6);
    }

    .hero-content h2 {
      font-size: 1.4em;
      font-weight: 500;
      color: #ffffff;
      margin-top: 33px;
    }

    .section {
      padding: 100px 20px;
      max-width: 900px;
      margin: auto;
      text-align: center;
      scroll-margin-top: 120px;
    }

    .section h2 {
      font-size: 2em;
      margin-bottom: 20px;
      color: #222;
    }

    .section p {
      font-size: 1.1em;
      line-height: 1.6;
      background: white;
      color: #000;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
      nav { display: none; }
      .hamburger {
        display: block;
        position: absolute;
        left: 20px;
      }
      header { justify-content: center; }
      .hero-content h1 { font-size: 3em; }
      .logo-area img { height: 36px; }
      .logo-area span {
        font-size: 1.5em;
        color: white;
        font-weight: bold;
        font-family: noto serif display;
        font-style: italic;
      }
      .hero-content h1 {
        font-size: 1.5em;
        padding-top: 30px;
      }
      .hero {
        height: 65vh;
      }
      .hero-content h2 {
        font-size: 0.7em;
        margin-top: 75px;
      }
    }
  </style>
</head>

<body>

  <div class="hero" id="home">
    <div id="particles-js"></div>

    <header>
      <div class="hamburger" onclick="toggleSidebar()">☰</div>
      <div class="logo-area">
        <img src="https://i.ibb.co/TC68vJr/logo-png.png" alt="Logo">
        <span>P<span style="font-size: 15px;font-style: normal;">&</span>J Technologies</span>
      </div> 
      <nav>
        <a href="#home">Dashboard</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Let's Talk</a>
      </nav>
    </header>

    <div class="sidebar" id="sidebar">
      <div class="close-btn" onclick="toggleSidebar()">×</div>
      <a href="#home" onclick="toggleSidebar()">🏠 Dashboard</a>
      <a href="#about" onclick="toggleSidebar()">👤 About Us</a>
      <a href="#services" onclick="toggleSidebar()">⚙️ Our Services</a>
      <a href="#contact" onclick="toggleSidebar()">📞 Let's Talk</a>
    </div>

    <div class="hero-content" data-aos="fade-up">
      <h1>Innovative Solution <br>For Your<span class="purple">&nbsp;</span>Business</h1>
      <h2 data-aos="fade-up" data-aos-delay="300">Empowering businesses with next-generation technology and transformation.</h2>
    </div>
  </div>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    body {
      margin: 0;
      
      background-color: #f4f7fb;
      color: #1c1c1c;
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
    }

    .pj-about-heading {
      font-family: 'Quicksand', sans-serif;
      color: #1F3A93;
      text-align: center;
      margin-top: 40px;
    }

    .pj-about-container {
      display: flex;
      flex-direction: column-reverse;
      gap: 2rem;
      padding: 2rem;
    }

    .pj-about-text {
      flex: 1;
     
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: #2c2c2c;
      text-align: justify;
    }

    .pj-gallery {
      flex: 1;
    }

    .pj-slideshow {
      position: relative;
      width: 100%;
      height: 400px;
      overflow: hidden;
    }

    .pj-slide {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1s ease-in-out, transform 1s ease;
    }

    .pj-slide.active {
      opacity: 1;
      transform: scale(1.03);
      z-index: 1;
    }

    @media(min-width: 768px) {
      .pj-about-container {
        flex-direction: row;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <h2 class="pj-about-heading"id="about">About Us</h2>

  <div class="pj-about-container">
    <div class="pj-about-text">
      <p>Welcome to our company at <strong>P&J Technologies</strong>, we are passionate about leveraging technology to build intelligent, scalable, and innovative digital solutions for businesses of all sizes. Founded with a vision to become a trusted partner in IT services and consulting, we specialize in delivering customized software, web and mobile applications, cloud solutions, and digital transformation services that drive measurable results.</p>
      <p>Our team comprises experienced professionals, creative thinkers, and technology enthusiasts committed to delivering excellence and exceeding client expectations. We believe that success in the digital world comes from strong collaboration, future-focused innovation, and an unwavering dedication to quality. We continuously invest in the latest technologies and methodologies to ensure our solutions remain ahead of the curve. Join us on a journey to transform your business challenges into powerful digital opportunities.</p>
    </div>

    <div class="pj-gallery">
      <div class="pj-slideshow">
        <img class="pj-slide active" src="https://i.ibb.co/tp0KqJKs/p-4.png" alt="Slide 1">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=2" alt="Slide 2">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=3" alt="Slide 3">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=4" alt="Slide 4">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=5" alt="Slide 5">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=6" alt="Slide 6">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=7" alt="Slide 7">
        <img class="pj-slide" src="https://source.unsplash.com/random/800x600?sig=8" alt="Slide 8">
      </div>
    </div>
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll('.pj-slide');
      let current = 0;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) slide.classList.add('active');
        });
      }

      showSlide(current);

      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 5000);
    });
  </script>

</body>


    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet">
<style>
 .body{
   line-height: 2.6;
 }
h2 {
  font-family: 'Raleway', sans-serif;
  text-align: center;

  
  margin-top: 60px;
  margin-bottom: 20px;

   
      font-size: 2rem;
      color: #000e1c;
      text-align: center;
     font-weight: 800;
    
}

.section-box {
  margin-bottom: 60px; /* more spacing between boxes */
}

    @keyframes fadeInPage {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .container {
      max-width: 1200px;
      margin: auto;
      padding: 60px 20px;
    }


    .section-box {
      background: white;
     line-height:1.5 ;
      border-radius: 30px;
      padding: 30px;
      margin-bottom: 30px;
      box-shadow: 0 4px 15px rgba(8, 8, 8, 0.08);
      transition: transform 0.3s ease;
      animation: scrollFade 1s ease-in-out both;
    }

    .section-box:hover {
      transform: translateY(-5px);
    }

    .core-values {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .value-box {
      background-color: #e3f2fd;
      border-left: 5px solid #1976d2;
      padding: 20px;
      border-radius: 10px;
      animation: scrollZoom 1s ease forwards;
    }

    .profile-message {
      display: flex;
      align-items: center;
      gap: 30px;
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      margin-bottom: 40px;
      animation: scrollFade 1.2s ease-in-out both;
    }

    .profile-message img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #0d1b2a;
    }

    .profile-message:nth-child(even) {
      flex-direction: row-reverse;
    }

    .gallery {
      margin-top: 40px;
      text-align: center;
    }

    .slider {
      position: relative;
      width: 80%;
      margin: auto;
      height: 400px;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      animation: scrollZoom 1s ease forwards;
    }

    .slides {
      display: flex;
      width: calc(100% * 8);
      transition: transform 1s ease-in-out;
    }

    .slide {
      width: 100%;
      flex-shrink: 0;
      position: relative;
    }

    .slide img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }

    .caption {
      position: absolute;
      bottom: 15px;
      left: 20px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 8px 15px;
      border-radius: 8px;
      font-size: 1rem;
    }

    .controls {
      position: absolute;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      transform: translateY(-50%);
    }

    .control {
      background: rgba(0,0,0,0.5);
      color: white;
      border: none;
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 50%;
      margin: 0 10px;
    }

    .lightbox {
      display: none;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.9);
    }

    .lightbox img {
      display: block;
      margin: auto;
      max-width: 80%;
      max-height: 80%;
      margin-top: 50px;
    }

    .lightbox:target {
      display: block;
    }

    /* Scroll Animations */
    .scroll-animate {
      opacity: 0;
      transform: translateY(40px);
      transition: all 1s ease-in-out;
    }

    .scroll-animate.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes scrollFade {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scrollZoom {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  </style>
  <h2>Our Mission</h2>
    <div class="section-box"data-aos="fade-up">
      <p>To empower businesses through reliable, secure, and scalable technology solutions, driving growth and innovation with integrity and passion.</p>
    </div>

    <h2>Our Vision</h2>
    <div class="section-box"data-aos="fade-up">
      <p>To be a globally respected IT company known for transforming ideas into cutting-edge digital realities, while fostering long-term partnerships based on trust, value, and technological leadership.</p>
    </div>

    <h2>Our Core Values</h2>
    <div class="core-values"data-aos="fade-up">
      <div class="value-box"><strong>🔍 Integrity:</strong> Transparency, accountability, and doing the right thing—always.</div>
      <div class="value-box"><strong>💡 Innovation:</strong> Thinking differently and staying ahead of technology trends.</div>
      <div class="value-box"><strong>💼 Client-Centricity:</strong> Tailored solutions aligned with your business goals.</div>
      <div class="value-box"><strong>🤝 Collaboration:</strong> Open communication and mutual respect.</div>
      <div class="value-box"><strong>📈 Excellence:</strong> Delivering quality and exceeding expectations.</div>
    </div>
<style>

  .director-section h2 {
  text-align: center;
  color: #0d47a1;
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  margin-top: 80px;
  margin-bottom: 30px;
}

.profile-message {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
 background: #f0fdff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.profile-message:nth-child(even) {
  flex-direction: row-reverse;
  
   background: #f5faff;
}

.profile-message img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
}

.profile-message p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.profile-message strong {
  display: block;
  font-size: 1.2rem;
  color: #0d47a1;
  margin-bottom: 10px;
}
/* Keep existing styles above this */

/* Mobile responsiveness */
@media (max-width: 768px) {
  .profile-message {
    flex-direction: column !important;
    text-align: center;
    padding: 20px;
  }

  .profile-message img {
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
  }

  .profile-message p {
    font-size: 1rem;
    line-height: 1.6;
  }

  .profile-message ul {
    text-align: left;
    padding-left: 20px;
    display: inline-block;
  }

  .director-section h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
}
</style>
<div class="director-section">
  <h2>Director’s Message</h2>
  <div class="profile-message">
    <img src="https://i.ibb.co/ds3YTS2D/08d6e1f3-0fe6-4f6a-bff1-52406292633f-2.jpg" alt="Director">
    <div>
      <p>
        <strong>P. Jayadeep Kumar, Director</strong>
        As Director of P & J Technologies, I am proud to lead a team that believes in transforming ideas into impactful solutions. Our journey is rooted in a vision to deliver innovative, agile, and reliable IT services that help businesses stay ahead in a fast-evolving digital landscape.
        <br><br>
        <ul style="padding-left: 20px;">
          <li>✅ Delivering excellence through custom-built software and IT consulting.</li>
          <li>✅ Maintaining transparency and trust in every client relationship.</li>
          <li>✅ Building a culture of continuous learning and forward thinking.</li>
        </ul>
        <br>
        Together, we strive to be more than a service provider — we aim to be a long-term technology partner for every organization we work with.
      </p>
    </div>
  </div>

  
  <div class="profile-message">
     <img src="https://i.ibb.co/q3x2wbCr/PHOTO-2025-05-13-11-49-25.jpg" alt="Managing Director">
    <div>
     
      
        <p>
        <strong>P. Pradeep Kumar, Managing Director</strong>
        “Driving strategic innovation and sustainable growth is at the heart of what we do. We envision a future where technology enables progress for all.”
      </p>
    </div>
  </div>
</div>


</body>

   <h2 id="Services" style="scroll-margin-top: 100px;" data-aos="fade-up">Our Services</h2>
   
 <style>
  

    @keyframes fadeInHeader {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }

   

    .services-container {
      max-width: 1200px;
      margin: auto;
      padding: 60px 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      animation: fadeIn 1.2s ease-in-out;
    }

    .service-box {
      background-color: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: slideUp 0.6s ease-in-out;
    }

    .service-box:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    }

    .service-box h3 {
      margin-top: 20px;
      font-size: 1.5rem;
      color: #0d1b2a;
    }

    .service-box p {
      font-size: 1rem;
      color: #444;
      margin-top: 10px;
    }

    .icon {
      font-size: 40px;
      color: #1976d2;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

   
  </style>
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>


 

  <section class="services-container">
    <div class="service-box">
      <div class="icon"><i class="fas fa-laptop-code"></i></div>
      <h3>Website Designing</h3>
      <p>Modern, responsive, and user-friendly websites to make your brand stand out online.</p>
    </div>

    <div class="service-box">
      <div class="icon"><i class="fas fa-pen-alt"></i></div>
      <h3>Testing Exams</h3>
      <p>Secure and scalable online exam solutions for academic and professional testing.</p>
    </div>

    <div class="service-box">
      <div class="icon"><i class="fas fa-certificate"></i></div>
      <h3>Certification Exams & Consultation</h3>
      <p>Expert guidance for certification exams in various fields, ensuring your path to success.</p>
    </div>

    <div class="service-box">
      <div class="icon"><i class="fas fa-network-wired"></i></div>
      <h3>ERP Services</h3>
      <p>Comprehensive ERP implementation and support to streamline your business operations.</p>
    </div>

    <div class="service-box">
      <div class="icon"><i class="fas fa-bullhorn"></i></div>
      <h3>Digital Marketing</h3>
      <p>End-to-end digital marketing strategies to enhance your online visibility and reach.</p>
    </div>
  </section>
  
 <h2 id="contact"data-aos="fade-up" a href="#contact">Contact Us</h2>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <style>


    .containercontact {
      max-width: 1100px;
      margin: auto;
      padding: 50px 20px;
    }

    h1 {
      font-size: 3rem;
      color: #000e1c;
      text-align: center;
      margin-bottom: 40px;
    }

    .contact-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }

    .contact-info, .contact-form {
      flex: 1 1 450px;
    }

    .contact-info h2, .contact-form h2 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #005792;
    }

    .contact-info ul {
      list-style: none;
      padding: 0;
    }

    .contact-info li {
      margin-bottom: 15px;
      font-size: 1.1rem;
    }

    .contact-info li i {
      margin-right: 10px;
      color: #005792;
    }

    .contact-form form {
      display: flex;
      flex-direction: column;
    }

    .contact-form input, .contact-form textarea {
      padding: 12px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
    }

    .contact-form button {
      background-color: #005792;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .contact-form button:hover {
      background-color: #003f66;
    }

    @media (max-width: 768px) {
      .contact-wrapper {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="containercontact">
    
    <div class="contact-wrapper">
      <div class="contact-info">
        <h2>Get In Touch</h2>
        <ul>
          <li><i class="fas fa-map-marker-alt"></i> 49-1-127, Eluru Rd, Gunadala, Vijayawada, AP 520004</li>
          <li><i class="fas fa-phone"></i><a href="+91 8977787605" target="_blank"></a> +91 8977787605,<a href="+91 8977787606" target="_blank"></a> +91 8977787606</li>
          <li><i class="fas fa-envelope"></i><a href="contact@pandjtechnologies.com" target="contact@pandjtechnologies.com"></a> contact@pandjtechnologies.com</li>
          <li><i class="fab fa-linkedin"></i> <a href="" target="_blank">LinkedIn</a></li>
          <li><i class="fab fa-instagram"></i> <a href="#" target="_blank">Instagram</a></li>
        </ul>
      </div>
      <div class="contact-form">
        <h2>Send Us a Message</h2>
        <form action="send_mail.php" method="POST" onsubmit="return validateForm()">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>

  <script>
    function validateForm() {
      const name = document.querySelector('input[name="name"]').value.trim();
      const email = document.querySelector('input[name="email"]').value.trim();
      const message = document.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
      }
      return true;
    }
  </script>
</body>
</html>



<!-- Tailwind CDN (for quick use) -->
<script src="https://cdn.tailwindcss.com"></script>
<div class="..." data-aos="fade-up">

<section class="bg-[#0D2550] text-white px-6 py-12">
  <div class="max-w-xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-4"style="color=white-space: inherit;">Let’s Talk</h2>
    <p class="text-base md:text-lg leading-relaxed">
      Every project starts with a chat. Joven leads our client conversations and will be happy to discuss your project.
      He will also pull in the right people from the team when needed.
    </p>
    <a href="#contact" class="inline-block mt-6 bg-[#1FC177] text-white font-semibold text-base px-6 py-3 rounded-md shadow-md hover:bg-[#17a865] transition duration-300">
      Tell us about your project
    </a>
  </div>
</section>




<!-- Button to open modal already exists -->

<!-- Modal Popup Form -->
<div id="projectModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.6); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:#fff; padding:30px; border-radius:10px; width:90%; max-width:500px; position:relative;">
    <button onclick="closeModal()" style="position:absolute; top:10px; right:15px; font-size:18px; border:none; background:none; cursor:pointer;">&times;</button>
    <h2 style="margin-bottom:20px; color:#005792;">Tell us about your project</h2>
    <form id="projectForm">
      <input type="text" name="name" placeholder="Your Name" required style="width:100%; padding:10px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;">
      <input type="email" name="email" placeholder="Your Email" required style="width:100%; padding:10px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;">
      <input type="tel" name="phone" placeholder="Contact Number" required style="width:100%; padding:10px; margin-bottom:10px; border:1px solid #ccc; border-radius:5px;">
      <textarea name="description" placeholder="Project Description" rows="4" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:5px;"></textarea>
      <button type="submit" style="margin-top:15px; background-color:#005792; color:#fff; padding:10px 20px; border:none; border-radius:5px; cursor:pointer;">Submit</button>
    </form>
  </div>
</div>

<script>
  // Open modal
  document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('projectModal').style.display = 'flex';
  });

  // Close modal
  function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
  }

  // Handle form submit (optional: add validation or send via PHP/AJAX)
  document.getElementById('projectForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your project info has been submitted!');
    closeModal();
    this.reset();
  });
</script>
  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init();

    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    function toggleSidebar() {
      sidebar.classList.toggle('active');
    }
    window.addEventListener('click', (e) => {
      if (
        sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        sidebar.classList.remove('active');
      }
    });

    // ParticlesJS Config
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80 },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" }
        },
        "modes": {
          "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }
        }
      },
      "retina_detect": true
    });
  </script>
</body>



<body>
                <iframe
  src="https://www.google.com/maps?q=16.523925733184825,80.6726158192385&z=17&output=embed"
  style="border:0; border-radius:10px;width: 100%;height: 350px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
<footer>
  <div class="footer-container">

    <!-- Let's Talk Section -->
   

    <!-- Main Footer Sections -->
    <div class="footer-sections">

      <!-- Company Info -->
      <div class="footer-section">
<h4>🗺️ Our Office</h4>
        
        <p>Gunadala Main Road<br>Opposite Vidyuth Soudha<br>Vijayawada,520004 <br> Andhra Pradesh 
            <br>
   
      </div>
      <div class="footer-section">
  <h4>⚙️ Services</h4>
      </div>
    
      <!-- Google Map -->   
<div class="footer-section">
        <h4>📧 Connect With Us</h4>
        <ul>
          <li><a href="mailto:contact@openai.in">Email Us</a></li>
          <li><a href="https://linkedin.com/company/openai" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com/openai" target="_blank">Twitter</a></li>
          <li><a href="https://instagram.com/openai" target="_blank">Instagram</a></li>
        </ul>
        <div class="social-icons">
          <a href="mailto:contact@openai.in"><i class="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/company/openai" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/openai" target="_blank"><i class="fab fa-x-twitter"></i></a>
          <a href="https://instagram.com/openai" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <!-- Quick Links -->
      <div class="footer-section">
        <h4>🔗 Quick Links</h4>
        <ul>
          <li><a href="#home">Dashboard</a></li>
          <li><a href="#about">👤 About Us</a></li>
          <li><a href="#services">⚙️ Services</a></li>
          <li><a href="#contact">📧 Contact Us</a></li>
        </ul>
      </div>

      <!-- Connect With Us -->
      

    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      &copy; 2025 P&J Technologies. All rights reserved.
    </div>
  </div>
</footer>

</body>
</html>
