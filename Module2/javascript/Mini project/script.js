// (getWeather = (city = "Hanoi") => {
//   const a = fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`
//   );
//   a.then((res) => {
//     return res.json();
//   }).then((data) => {
//     console.log(data);
//     let title = document.querySelector(".address");
//     title.innerHTML = data.city.name;

//     let infoWeather = data.list
//       .map((item) => {
//         return `
//             <div class="col-12 col-md-6 col-lg-3">
//               <div class="item p-3">
//                 <p>${item.dt_txt}</p>
//                 <div class="description">
//                   <div class="description_weather">
//                     <p class="description_weather-temp">${item.main.temp}°C</p>
//                     <p>${item.weather[0].description}</p>
//                   </div>
//                   <div class="imgIcon">
//                     <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           `;
//       })
//       .join("");
//     document.getElementById("weather").innerHTML = infoWeather;
//   });
// })();
// const search = () => {
//   let searchInput = document.getElementById("search").value;
//   getWeather((city = searchInput));
// };

(getWeather = async (city = "Hanoi") => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`
  );
  const data = await res.json();
  let title = document.querySelector(".address");
  title.innerHTML = data.city.name;

  let infoWeather = data.list
    .map((item) => {
      return `
            <div class="col-12 col-md-6 col-lg-3">
              <div class="item p-3">
                <p>${item.dt_txt}</p>
                <div class="description">
                  <div class="description_weather">
                    <p class="description_weather-temp">${item.main.temp}°C</p>
                    <p>${item.weather[0].description}</p>
                  </div>
                  <div class="imgIcon">
                    <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" />
                  </div>
                </div>
              </div>
            </div>
          `;
    })
    .join("");
  document.getElementById("weather").innerHTML = infoWeather;
})();
const search = () => {
  let searchInput = document.getElementById("search").value;
  getWeather((city = searchInput));
};
