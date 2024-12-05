<template>
  <div class="content">
    <div class="headContent">
      <h1>Ivaylo Georgiev</h1>
      <h2>Web Developer</h2>
    </div>
    <div class="linkContent">
      <ul class="linkList">
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
  </div>
  <NuxtParticles id="tsparticles" :options="nuxtParticleOptions" />
</template>

<script setup lang="ts">
import {
  tsParticles,
  type IOptions,
  type RecursivePartial,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const route = useRoute();

await loadFull(tsParticles);

const nuxtParticleOptions: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  particles: {
    stroke: {
      width: 0,
    },
    color: {
      value: "random",
    },
    shape: {
      type: ["circle", "polygon", "edge"],
    },
    size: {
      value: 5,
    },
    links: {
      color: "#111",
      enable: true,
      opacity: 0.4,
      width: 1,
      distance: 150,
    },
    move: {
      enable: true,
      speed: 6,
    },

    number: {
      value: 80,
      density: {
        enable: true,
        height: 1000,
        width: 1000,
      },
    },
    opacity: {
      value: 0.5,
    },
  },
};
</script>

<style scoped>
@import url("~/assets/css/mainPage.css");
</style>
