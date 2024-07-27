import state from "./state.js"
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from './sounds.js'

export function toggleRunning(){
    state.isRunning=document.documentElement.classList.toggle('running')

    timer.countDown()
}

export function reset(){
    state.isMute=false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function increase() {
    if(state.minutes > 59){
        state.minutes = 60;
        return;
    } else {
        state.minutes += 5;
        timer.updateDisplay();
    }
}

export function decrease() {
    if(state.minutes <5) {
        reset()
    }else{
    state.minutes -= 5;
    timer.updateDisplay();
    }
}

export function theForest() {
    const isMute = document.documentElement.classList.toggle('music-on');
    const button = document.querySelector('[data-action="theForest"]');

    if (isMute) {
        audio.buttonForest.play();
        button.style.backgroundColor = '#02799D';
        button.style.color = 'white';
    } else {
        audio.buttonForest.pause();
        button.style.backgroundColor = '#E1E1E6';
        button.style.color = '#323238';
    }
} 

export function theRain() {
    const isMute = document.documentElement.classList.toggle('music-on');
    const button = document.querySelector('[data-action="theRain"]');

    if (isMute) {
        audio.buttonRain.play();
        button.style.backgroundColor = '#02799D';
        button.style.color = 'white';
    } else {
        audio.buttonRain.pause();
        button.style.backgroundColor = '#E1E1E6';
        button.style.color = '#323238';
    }
} 

export function theStore() {
    const isMute = document.documentElement.classList.toggle('music-on');
    const button = document.querySelector('[data-action="theStore"]');

    button.style.color = 'white';
    if (isMute) {
        audio.buttonStore.play();
        button.style.backgroundColor = '#02799D';
        button.style.color = 'white';
    } else {
        audio.buttonStore.pause();
        button.style.backgroundColor = '#E1E1E6';
        button.style.color = '#323238';
    }
} 

export function theFire() {
    const isMute = document.documentElement.classList.toggle('music-on');
    const button = document.querySelector('[data-action="theFire"]');

    button.style.color = 'white';
    if (isMute) {
        audio.buttonFire.play();
        button.style.backgroundColor = '#02799D';
        button.style.color = 'white';
    } else {
        audio.buttonFire.pause();
        button.style.backgroundColor = '#E1E1E6';
        button.style.color = '#323238';
    }
} 