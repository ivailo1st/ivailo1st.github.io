<template>
  <div class="headContent">
    <div class="name">
      <h1>Ivaylo Georgiev</h1>
      <h2>Web Developer</h2>
    </div>
    <div class="persInfo">
      <ul>
        <li><NuxtLink to="/">Back to Main Site</NuxtLink></li>
        <li>
          <a href="mailto:Ivailo2nd@gmail.com" rel="nofollow"
            >Ivailo2nd@gmail.com</a
          >
        </li>
        <li>
          <p>+45 42 80 04 72</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="topContent">
      <div class="topLeft">
        <h1>Personal Information</h1>
        <div class="topLeftImageContainer">
          <img src="../assets/images/PersPhoto.jpg" />
          <ul>
            <li>
              <p><strong>Nationality:</strong></p>
              <p>Bulgarian</p>
            </li>
            <li>
              <p><strong>Date of Birth:</strong></p>
              <p>The 29th of October 1999</p>
            </li>
            <li>
              <p><strong>Address:</strong></p>
              <p>Fredensvej, 2 tv., Viby J, DK</p>
            </li>
            <li>
              <p><strong>Spoken Languages:</strong></p>
              <p>
                Bulgarian - <strong>Native</strong>, English -
                <strong>C2</strong>, Russian - <strong>B1</strong>, Danish -
                <strong>B1</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="topRight">
        <h1>Education</h1>
        <ul>
          <li>
            <p><strong>2006-2018</strong></p>
            <p>
              Linguistic and ICT studies at Secondary School "St. Kliment
              Ohridski", Troyan
            </p>
          </li>
          <li>
            <p><strong>2018-2020</strong></p>
            <p>ITEK at Business Academy Aarhus</p>
          </li>
          <li>
            <p><strong>2020-2022</strong></p>
            <p>Web Development at Business Academy Aarhus</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="middleContent">
      <h1>My Work</h1>
      <Carousel v-bind="carouselConfig" class="slideshowContainer">
        <div class="slideshow">
          <div class="prev">
            <button onclick="plusSlides(-1)">&#10094;</button>
          </div>
          <div class="projects">
            <Slide class="mySlides fade">
              <a href="E-Bike Guardian.html">
                <img src="../assets/images/E-Bike Guardian.jpg" />
              </a>
            </Slide>

            <Slide class="mySlides fade">
              <a href="Mini Project.html">
                <img src="../assets/images/Mini Logo Alt.jpg" />
              </a>
            </Slide>

            <Slide class="mySlides fade">
              <a href="30th Anniversary.html">
                <img src="../assets/images/30th Anniversary Logo.jpg" />
              </a>
            </Slide>
          </div>
          <div class="next">
            <button onclick="plusSlides(1)">&#10095;</button>
          </div>
        </div>
        <Pagination class="dotContainer">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </Pagination>
      </Carousel>
    </div>
    <div class="bottomContent">
      <div class="bottomLeft">
        <h1>Skills and Experience</h1>
        <ul>
          <li>
            <p><strong>Excellent:</strong></p>
            <p>
              HTML, JavaScript, CSS, Tailwind, TypeScript, React, Node.js,
              WordPress, MySQL/PostgreSQL, Office suite (MS Word, MS Excel, MS
              PowerPoint)
            </p>
          </li>
          <li>
            <p><strong>Good:</strong></p>
            <p>
              Python, C#, Java, ASP.NET, PHP, Angular, jQuery, Umbraco,
              Redux,Vue.js
            </p>
          </li>
          <li>
            <p><strong>Average:</strong></p>
            <p>C++, C, Kotlin</p>
          </li>
          <li>
            <p><strong>Vague:</strong></p>
            <p>Pascal, Visual Basic</p>
          </li>
        </ul>
      </div>
      <div class="bottomRight">
        <h1>Achievements</h1>
        <p>Participation in the National Olympiad of 2015</p>
        <p>
          Participation in various IT and linguistic related events and
          competitions in the municipality of Troyan, Bulgaria
        </p>
        <p>Cambridge Certificate in Advanced English (CAE) with a Grade B</p>
        <h1>Hobbies and Interests</h1>
        <p>Robotics, Sciencie Fiction, Fantasy, Movies, Video Games, Reading</p>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const route = useRoute();
const carouselConfig = {
  itemsToShow: 1.5,
};
</script>
<style scoped>
@import url("~/assets/css/cvPage.css");
</style>
