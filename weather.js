const API_KEY = "5f4cf56d970b3274ce61f2d12d1fa9d1"; // https://openweathermap.org/weathermap API 키 받아오기
const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("Can't Access Geo Location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords ==null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCoords();
}


init();
