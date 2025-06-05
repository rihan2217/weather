let search = document.querySelector("#search")
let input = document.querySelector("#city");

let weatheicon = document.querySelector(".weathericon img");
let temparature = document.querySelector(".temprature h1");
let feelslike = document.querySelector(".feelslike h1");
let date = document.querySelector(".date h1");
let date2 = document.querySelector(".date h2");
let cityname = document.querySelector(".cityname h1");

console.log(weatheicon);

let humid = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let rise = document.querySelector("#rise");
let set = document.querySelector("#set");
let index = document.querySelector("#index");
let cloud = document.querySelector("#cloud");
let pressure = document.querySelector("#pressure");

const time = new Date();

let time_date = time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();

let Time = time.getHours() + ":" + time.getMinutes();

console.log(input.value);

async function weather(city) {

    const apikey = `beb7c15e4d29c25893708f80b0b666ab`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const data = await fetch(url).then((Response) => Response.json())

    if(data.cod === `404`){
        pressure.innerText="---";
            humid.innerText ="---";
            cloud.innerText="---";
            set.innerText="---";
            rise.innerText="---";
            wind.innerText="---";
            cityname.innerText="---";
            temparature.innerText="---";
            date.innerText="---";
            date2.innerText="---";
            feelslike.innerText="---";
            alert("check the city");
        return;
    }


    cityname.innerText = data.name + "," + data.sys.country;
    temparature.innerText = data.weather[0].main;
    feelslike.innerHTML = Math.round(data.main.temp - 273.15) + "<sup>.</sup>C";
    date.innerText = time_date;
    date2.innerText = Time;

    humid.innerHTML = data.main.humidity + "<sub>%</sub>";
    wind.innerHTML = data.wind.speed + "<sub>km/h</sub>";
    rise.innerHTML = Math.round(data.main.temp - 273.15) + " <sup>.</sup>C";;
    set.innerHTML = Math.round(data.main.temp - 273.15) + " <sup>.</sup>C";
    cloud.innerHTML = data.clouds.all + "<sub>%</sub>";
    pressure.innerHTML = data.main.pressure + "<sub>hpa</sub>";
    index.innerHTML = data.visibility + "m";

    console.log(data.main);

    switch (data.weather[0].main) {
        case 'Clouds':
            weatheicon.src = "cloud.png";
            break;
        case 'Clear':
            weatheicon.src = "clear.png";
            break;
        case 'Rain':
            weatheicon.src = "rain.png";
            break;
        case 'Haze':
            weatheicon.src = "mist.png";
            break;
        case 'Snow':
            weatheicon.src = "snow.png";
            break;
        case 'Smoke':
            weatheicon.src="4413332.png"
        default:
            weatheicon.src = "404.png";
            break;
    }
    console.log(data.weather[0].main)
}
search.addEventListener("click", () => {
    weather(input.value);
});

