const latt = document.getElementById('lat')
const longg = document.getElementById('long')
const cityy = document.getElementById('city')
const regionn = document.getElementById('region')
const orgg = document.getElementById('org')
const timeZonee = document.getElementById('timezone')
const hostNamee = document.getElementById('host')


function getdetails() {
  document.getElementById('lat').innerText= `Lat : ${latt.value}`
  document.getElementById('long').innerText= `Long : ${long}`
  document.getElementById('city').innerText= `City : ${city}`
  document.getElementById('region').innerText= `Region : ${region}`
  document.getElementById('org').innerText= `Organisation : ${org}`
  document.getElementById('timezone').innerText= `TimeZone : ${timeZone}`
  document.getElementById('host').innerText= `Hostname : ${host}`
}

function submitData(){
    const url = `https://ipinfo.io/27.58.144.104/geo`
    fetch (url)
    .then ((response) => response.json())
    .then ((data) => getdetails(data))
    .catch((error) => console.log(error)); 
}


// const successCallback = (position) => {
//     submitData(position)
//     console.log(position);
//   };
  
//   const errorCallback = (error) => {
//     console.log(error);
//   };
  
//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//render data
document.getElementById("lat").innerText = `Lat : ${lat}`