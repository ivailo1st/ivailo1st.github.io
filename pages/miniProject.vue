<template>
	<div class="content">
		<div class="topContent">
			<img src="/images/Mini Logo Alt.jpg" style="width: 100%; max-width: 400px" />
		</div>
		<div class="middleContent">
			<p>
				This project was my second to last project for Year 1 and was title "Mini Project" due to the usage of a
				micro-controller. The idea of this project was for a user to be able to press a button in front of a
				carwash, which then prompts a nearby camera to scan the license plate of the car from where it checks if
				the said user is subscribe to the carwash services and whether if he is or not it will either allow him
				to enter or to register. For this project I used a micro-controller titled
				<a href="https://en.wikipedia.org/wiki/ESP8266">ESP8266</a> and the linux system
				<a href="https://www.raspberrypi.org/">Raspberry Pi 3</a> and a
				<a href="https://en.wikipedia.org/wiki/MQTT"> MQTT</a> brocker. The first thing I did for this project
				was set up the micro-controller so that it can be subscribe to a specific MQTT topic and also publish in
				the same topic. This way it can activate the whole system that is managed by the
				<a href="https://www.raspberrypi.org/">Raspberry Pi 3</a> and do a specific task when a specific command
				is published. Here is the code for the <a href="https://en.wikipedia.org/wiki/ESP8266">ESP8266</a> I
				wrote:
				<a href="https://drive.google.com/file/d/1Bq8VF9iS_GbyS3mcePZTm_2CcGT9WBDI/view?usp=sharing">Code</a>.
			</p>
			<p>
				Afterwards I wrote the code for the <a href="https://www.raspberrypi.org/">Raspberry Pi 3</a> that
				enables the linux system to be able to be subscribe to the same
				<a href="https://en.wikipedia.org/wiki/MQTT"> MQTT</a> brocker as the
				<a href="https://en.wikipedia.org/wiki/ESP8266">ESP8266</a> and to publish there too. That allows it to
				give specific commands to the micro-controller and also know when to start the checking proccess. The
				proccess itself consits of taking a picture of the license plate and then sending it to the
				<a href="https://cloud.google.com/vision/">Google Vision API</a>, which gives back the letters and
				numbers of the plate. From there the <a href="https://www.raspberrypi.org/">Raspberry Pi 3</a> checks to
				see if the data is in the IoT Database (<a href="https://cloud.google.com/sql/">Google Database</a>) and
				then depending on whether the users in the database or not the linux system sends a specifc command to
				the micro-controller. Furthermore, the <a href="https://en.wikipedia.org/wiki/ESP8266">ESP8266</a> then
				either shines a green LED and then allows the user to enter or shines a red LED and then prompts the
				user to register. Here is the code for the linux system:
				<a href="https://drive.google.com/file/d/1RcYyXJkOeGvvEYm0sdv5Z9eN8oM3o0km/view?usp=sharing">Code</a>.
			</p>
		</div>
		<div class="bottomContent topBorder">
			<NuxtLink to="/myCV">
				<button class="backButton" style="vertical-align: middle">
					<span>Back To CV </span>
				</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
@import url('~/assets/css/projectPages.css');
</style>
