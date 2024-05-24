
const btn = document.querySelector('button')
btn.addEventListener('click',()=>{
const APIKey = "5f1077f561d87b1be334b15838fc01b4";
const city = document.querySelector('input').value
const img = document.querySelector('img')
const h1 = document.querySelector('h1')
const p = document.getElementById('deg')
const pi = document.getElementById('speed')
const wind = document.getElementById('wind')
const im = document.getElementById('im')



fetch(
   ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    switch(data.weather[0].main){
        case 'Clear':
            img.src="./sun.jpg"
            break;
        case 'Clouds':
            img.src="./shomol.jpg"
            break;
    
        case 'Rain':
            img.src="./yongir.jpg"
            break;
    
        case 'Snow':
            img.src="./qor.jpg"
            break;
            case 'Partly Cloudy':
    img.src="./yongirquyosh.jpg"
      break;
    }
h1.innerHTML=`${parseInt(data.main.temp)}°C`
p.innerHTML=`${data.weather[0].description}`
pi.innerHTML=`${data.main.humidity}%`
wind.innerHTML=`${parseInt(data.wind.speed)} Km/h`


  });
  
});
