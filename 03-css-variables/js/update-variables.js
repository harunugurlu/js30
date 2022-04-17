const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {

    const suffix = this.dataset.sizing || '';
    //dataset returns a DOMStringMap object containing all the data-* attributes from that HTMLElement
    //dataset.sizing will return data-sizing attribute's value which is 'px' in this case.

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));