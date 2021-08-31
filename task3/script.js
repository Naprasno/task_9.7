const trafficLightEl= document.querySelector('#trafficLightEl');
const trafficLightElFirst = document.querySelector('#trafficLight1');
const trafficLightElSecond = document.querySelector('#trafficLight2');
const trafficLightElThird = document.querySelector('#trafficLight3');

let isGreen = false;
let isYellow = false;
let isRed = false;

trafficLightEl.addEventListener("click", function() {
if( ((isGreen == false) && (isYellow == false) && (isRed == false)) || ((isGreen == false) && (isYellow == false) && (isRed == true)) )
{
    console.log('green')
    trafficLightElFirst.style.background = ('green')
    trafficLightElSecond.style.background = ('black')
    trafficLightElThird.style.background = ('black')
    isGreen = true;
    isYellow = false;
    isRed = false;

}
else if( (isGreen == true) && (isYellow == false) && (isRed == false) )
{
    console.log('yellow')
    trafficLightElFirst.style.background = ('black')
    trafficLightElSecond.style.background = ('yellow')
    trafficLightElThird.style.background = ('black')
    isGreen = false;
    isYellow = true;
    isRed = false;
}
else if( (isGreen == false) && (isYellow == true) && (isRed == false) )
{
    console.log('Red')
    trafficLightElFirst.style.background = ('black')
    trafficLightElSecond.style.background = ('black')
    trafficLightElThird.style.background = ('Red')
    isGreen = false;
    isYellow = false;
    isRed = true;
}
});