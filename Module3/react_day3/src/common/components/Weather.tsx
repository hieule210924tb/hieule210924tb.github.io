import { useEffect, useState } from "react";

const Weather = () => {
  type WeatherItem = {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  };
  const [city, setCity] = useState<string>("Hanoi");
  const [searchValue, setSearchValue] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherItem[]>([]);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`
        );
        const data = await res.json();
        setWeatherData(data.list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [city]);
  const handleSearch = () => {
    if (searchValue.trim()) {
      setCity(searchValue.trim());
      setSearchValue("");
    }
  };
  return (
    <>
      <div className="mt-5 flex align-center justify-center gap-3 ">
        <input
          className="border-2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Nhập địa chỉ "
        />
        <button className="border-2 bg-amber-400 p-1.5" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="text-center">Thời tiết {city}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {weatherData.map((item) => (
          <div
            key={item.main.temp}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <p className="text-gray-600 text-sm mb-2">{item.dt_txt}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-blue-500">
                  {item.main.temp}°C
                </p>
                <p className="text-gray-700 capitalize">
                  {item.weather[0].description}
                </p>
              </div>

              <div className="w-16 h-16">
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Weather;
