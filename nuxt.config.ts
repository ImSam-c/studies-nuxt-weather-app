// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
  },
  app: { pageTransition: { name: "page", mode: "out-in" } },
});
