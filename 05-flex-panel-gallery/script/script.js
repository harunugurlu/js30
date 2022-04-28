const panels = document.querySelectorAll('.panel');

function toggleOpen() {

    this.classList.toggle('open');
    //removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true.
}

function toggleOpenActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {

        this.classList.toggle('open-active');
    }
    //Since there are 2 transitionend events (flex-grow and font-size) that event listener is being triggered two times. First time  
    //it is triggered it adds the 'open-active' class, and the second time it removes the 'open-active' class. Therefore, we are making
    //it getting triggered only once each click.
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));