function playAudio(e) {

    // `${e.keyCode}` --> ES6 `template literals`
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //get the corresponding audio of the key we hit.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //get the key we hit.

    if (!audio) {
        return; //stop the function from running if audio is null.
    }
    audio.currentTime = 0; //rewind to the start so we can play everytime we hit.
    audio.play(); //HTMLMediaElement.play() returns a promise.
    key.classList.add('playing'); //Same with key.addClass('playing'); --> JQuery
}

function removeTransition(e) {

    if (e.propertyName !== 'transform') return; //skip if it's not a transform.
    this.classList.remove('playing'); //this refers to a key(div[.key])
}

window.addEventListener('keydown', playAudio);

//Selecting all the keys to listen to the transition event.
const keys = document.querySelectorAll('.key');
//We listen for the event transitionEnd for each key
//keys.addEventListener won't work because keys is an array and we want 
//to explicitly loop every element in the array and attach an eventlistener.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));