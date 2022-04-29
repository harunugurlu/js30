const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(response => response.json())
    .then(response => cities.push(...response))
    .catch(e => console.log(e));

function findMatches(wordToMatch, cities) {

    return cities.filter(place => {
        //here we will figure out if a city or a state matches with what was searched using regex
        const regex = new RegExp(`${wordToMatch}`, 'gi');
        //g means it'll be global meaning it's going to be search through the whole string.
        //i means it'll be insensitive.
        return (place.city.match(regex) || place.state.match(regex));
    });
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function setList(match) {

    for (const result of match) {

        const resultItem = document.createElement('li');

        suggestions.appendChild(resultItem);

        const text = document.createTextNode(result.city + ', ' + result.state);

        resultItem.appendChild(text);
    }
}

function clearList() {

    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild);
    }

    const clearList = document.createElement('li');
    const text = document.createTextNode('Filter for a city or a state');
    clearList.appendChild(text);


    suggestions.appendChild(clearList);


}

function displayMatch() { //this will display matches and it will work when the search input value has changed.

    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);

    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild);
    }

    const html = matchArray.map(place => {

        const regex = new RegExp(this.value, 'gi');
        //formatting population
        const populationFormat = Intl.NumberFormat();
        const population = populationFormat.format(place.population);
        //highlighting the searched word
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);


        //create a list, spans and appen spans to list
        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.classList.add('name');
        const textName = document.createTextNode(`${cityName}, ${stateName}`);
        spanName.innerHTML = `${cityName}, ${stateName}`;


        const spanPopulation = document.createElement('span');
        spanPopulation.classList.add('population');
        const textPopulation = document.createTextNode(`${population}`);
        spanPopulation.appendChild(textPopulation);

        li.appendChild(spanName);
        li.appendChild(spanPopulation);
        li.classList.add('animate');

        //append list to ul
        suggestions.appendChild(li);
    });

    //clear the list when the input value.length = 0;
    if (!(this.value && this.value.trim().length > 0)) {
        clearList();
    }
}


searchInput.addEventListener('input', displayMatch);