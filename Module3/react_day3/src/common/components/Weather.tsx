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
    <div className="bg-[url('https://unisolar.com.vn/wp-content/uploads/2024/06/Unisolar_13.jpg')] bg-cover ">
      <div className="flex w-2xl m-auto items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md">
        <input
          className="w-80 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out shadow-sm text-gray-700 placeholder-gray-500"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Nhập địa chỉ "
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="text-center mt-4">Thời tiết {city}</div>
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
    </div>
  );
};

export default Weather;
