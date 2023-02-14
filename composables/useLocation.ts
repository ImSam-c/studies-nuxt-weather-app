import { Weather } from "~~/types";

const useLocation = async () => {
  const fetchLocation = async (cityName: string) => {
    const config = useRuntimeConfig();

    const key = config.WEATHER_API_KEY;
    const units = "metric";
    const lang = "es";
    const url = `https://api.openweathermap.org/data/2.5/weather`;

    try {
      const res = await useFetch<Weather>(url, {
        query: { q: cityName, appid: key, units, lang },
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchLocation };
};

export default useLocation;
