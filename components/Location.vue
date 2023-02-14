<script setup lang="ts">
import type { Weather } from "~~/types";

defineProps<{ weather: Weather }>();
</script>

<template>
  <main>
    <h1>
      <a
        rel="noopener norel"
        target="_blank"
        :href="`https://www.google.com/maps/search/${weather.name}/`"
        ><u>{{ weather.name }}</u></a
      >
    </h1>
    <h2>
      Estado: {{ weather.weather[0].description }}
      <img
        :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
      />
    </h2>
    <h2>Temperatura: {{ weather.main.temp }} °C</h2>
    <h2>Presión: {{ weather.main.pressure }}</h2>

    <slot> </slot>
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #83beec;
  font-weight: 900;
  cursor: grab;
}

h1 {
  text-align: center;
  font-size: 2rem;
  transition: transform 300ms;
}

h1:hover {
  transform: scale(1.09);
}

img {
  width: 50px;
  position: relative;
  top: 18px;
}

main {
  margin-top: 2.5rem;
  height: 22rem;
  width: 33rem;
  border: 1px solid black;
  border-radius: 7px;
}
</style>
