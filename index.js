const gtData = document.getElementById('ip');
let ipAddr = null;

 $.getJSON("https://api.ipify.org?format=json", function(data) {
 $("#ip").html(data.ip);
}).then(() =>{
    console.log(ipAddr);
})


const url = (`https://ipinfo.io/${ipAddr}/geo"`)
async function getData(){
    let ipAddress = document.getElementById('ip').textContent;
    console.log("hi", ipAddress);
    const url = (`https://ipinfo.io/${ipAddress}/geo?token=c20d2ffd19e322`)
    const gotData = await fetch(url);
    console.log(gotData);

    const theData = await gotData.json()
    console.log(theData);
}



// const url = "https://api.postalpincode.in/pincode/221001*
// const post = await fetch(url);
// const postdata = await post.json () :
// console. log(postdata);
// postOffice(postdata);
// }
// catch(error) {
// console. log(erroril;
// function postOffice(postdata) {
// const message = postdata[0] message;
// document-getElementById('message").innerText = message;


// function renderData(data) {
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         loc.innerHTML = "Not Avaiable"
//     }
//     }
//     function showPosition(position) {
//         loc.innerHTML = "lat : " + position.coords.latitude
//         longi.innerHTML = "long : " + position.coords.longitude
//     }
    


//post office upi

