<template>
  <div class="content">
    <div class="headContent">
      <h1>Ivaylo Georgiev</h1>
      <h2>Web Developer</h2>
    </div>
    <div class="linkContent">
      <ul>
        <div class="extraInfo">
          <li>
            <NuxtLink to="/myCV"> My CV </NuxtLink>
            <span class="extraText">
              More in-depth on my Education and Skills
            </span>
          </li>
        </div>
        <div class="extraInfo">
          <li>
            <a href="https://github.com/ivailo1st/MyProjects/tree/master">
              GitHub
            </a>
            <span class="extraText"> My GitHub </span>
          </li>
        </div>
        <div class="extraInfo">
          <li>
            <a
              href="https://www.linkedin.com/in/ivaylo-georgiev-georgiev"
              rel="nofollow"
            >
              Linkedin
            </a>
            <span class="extraText"> My LinkedIn </span>
          </li>
        </div>
        <div class="extraInfo">
          <li>
            <a href="mailto:Ivailo2nd@gmail.com" rel="nofollow">
              To Contact Me
            </a>
            <span class="extraText"> My E-mail </span>
          </li>
        </div>
      </ul>
    </div>
    <div id="particles-js"></div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style>
@import url("~/assets/css/mainPage.css");
</style>
