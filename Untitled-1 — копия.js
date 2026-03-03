
let wind =["no rain", "rainy", "heavy rain"]
let rain = ["windy","no wind","storm"]
const user = window.prompt ( "имя пользователя"," " );

function getWeather (arr) {
let re = Math.floor(Math.random() *arr.length)
console.log (arr[re])
alert(arr[re]) 
}