const BASE_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/solaris-api';

const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
const allDivs = document.querySelectorAll('div');
const PLANETS_ELEM = document.querySelectorAll('.alla-planeter')

const solenElem = document.querySelector('.solen')
const merkuriusElem = document.querySelector('.merkurius')
const venusElem = document.querySelector('.venus')
const jordenElem = document.querySelector('.jorden')
const marsElem = document.querySelector('.mars')
const jupiterElem = document.querySelector('.jupiter')
const saturnusElem = document.querySelector('.saturnus')
const uranusElem = document.querySelector('.uranus')
const neptunusElem = document.querySelector('.neptunus')

const planetElem = document.querySelector('.planet')




function RenderData(dataFromApi) {
    
    solenElem.addEventListener('click',function() {
        
        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#F4D03F'
        }
        document.querySelector('#name').innerText = dataFromApi.bodies[0].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[0].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[0].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[0].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[0].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[0].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[0].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[0].moons.join(' - ')
    })

    merkuriusElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#717D7E'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[1].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[1].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[1].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[1].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[1].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[1].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[1].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[1].moons.join(' - ')
    })

    venusElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#FADBD8'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[2].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[2].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[2].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[2].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[2].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[2].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[2].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[2].moons.join(' - ')
    })

    jordenElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#3498DB'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[3].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[3].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[3].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[3].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[3].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[3].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[3].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[3].moons.join(' - ')
    })

    marsElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#E74C3C'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[4].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[4].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[4].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[4].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[4].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[4].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[4].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[4].moons.join(' - ')
    })

    jupiterElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#E59866'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[5].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[5].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[5].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[5].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[5].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[5].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[5].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[5].moons.join(' - ')
    })

    saturnusElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#FAD7A0'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[6].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[6].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[6].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[6].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[6].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[6].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[6].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[6].moons.join(' - ')
    })

    uranusElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = 	'#D6DBDF'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[7].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[7].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[7].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[7].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[7].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[7].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[7].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[7].moons.join(' - ')
    })

    neptunusElem.addEventListener('click',function() {

        if(planetElem !== 'sad') {
            planetElem.style.backgroundColor = '#5D6D7E'
        }

        document.querySelector('#name').innerText = dataFromApi.bodies[8].name
        document.querySelector('#latin-name').innerText = dataFromApi.bodies[8].latinName
        document.querySelector('#desc').innerText = dataFromApi.bodies[8].desc
        document.querySelector('#circumference').innerText = dataFromApi.bodies[8].circumference
        document.querySelector('#distance').innerText = dataFromApi.bodies[8].distance
        document.querySelector('#max-temp').innerText = dataFromApi.bodies[8].temp.day+ ' ℃'
        document.querySelector('#min-temp').innerText = dataFromApi.bodies[8].temp.night+ ' ℃'
        document.querySelector('#moons').innerText = dataFromApi.bodies[8].moons.join(' - ')
    })
    
}



async function getKey() {
    const response = await fetch(`${BASE_URL}/keys`);
    const data = await response.json();
    console.log(data);

    return data.key;
}

async function getPlanets() {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': key
        }
    });
    const data = await response.json();
    console.log('data från api:', data)

    RenderData(data)
}


function showOrHide() {
    pageOne.classList.toggle('hide'); 
    pageTwo.classList.toggle('hide'); 
    pageOne.classList.toggle('animate-in'); 
    pageTwo.classList.toggle('animate-in'); 

} 




allDivs.forEach((div) => {
    div.addEventListener('click', () => {
        showOrHide();
    });
})



getPlanets()

