<script setup lang="ts">
const { fetchLocation } = await useLocation();

let pending = ref<boolean>(false);
let data = ref();
let refresh = ref();
let error = ref();
let locationValue = ref<string>("");

const callFetchLocation = async (location: string) => {
  locationValue.value = "";

  try {
    pending.value = true;
    const res = await fetchLocation(location);

    if (res) {
      data.value = res.data.value;
      refresh.value = res.refresh;
      error.value = res.error;
    }

    pending.value = false;
  } catch (error) {
    pending.value = false;
    console.log(error);
  }
};
</script>

<template>
  <main>
    <Title>Weather App</Title>

    <section>
      <h1>Search a location 🔎</h1>
      <input
        autofocus
        autocomplete="off"
        v-model="locationValue"
        @keydown.enter="callFetchLocation(locationValue)"
        type="search"
      />

      <Loader v-if="pending" />

      <Location v-else-if="data" :weather="data">
        <button @click="refresh()">Refrescar</button>
      </Location>

      <article v-else-if="error">
        <h2>Location not found</h2>
      </article>
    </section>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat";
}

h1,
h2 {
  color: #222222;
}

h2 {
  line-height: 2.3rem;
}

body {
  background-color: #f2f2f2;
}

main {
  margin: auto;
  max-width: 1200px;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

input {
  padding: 0.3rem;
  font-size: 1.2rem;
}

button {
  cursor: grab;
  margin-left: 1rem;
  font-size: 1rem;
  padding: 7px 16px;
  border: none;
  border-radius: 3px;
  background-color: #222222;
  color: #f2f2f2;
  font-weight: 500;
  transition: background 100ms, transform 200ms;
}

button:hover {
  background-color: #fff;
  color: #000;
  outline: 1px solid black;
  transform: scale(1.1);
}
</style>
