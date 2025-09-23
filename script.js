const container = document.getElementById('container');
const colors = ['#c21c09ff', '#5b1379ff', '#196496ff', '#e67e22', '#2ecc71', '#f1c40f', '#3498db', '#9b59b6', '#34495e', '#00eeffff'];
const SQUARES = 200;
const squares = [];

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
    squares.push(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    
    setTimeout(() => {
        removeColor(element);
    }, 500);
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(() => {
    const randomSquare = squares[Math.floor(Math.random() * squares.length)];
    setColor(randomSquare);
}, 100);


const bemutatkozas = document.getElementById('bemutatkozas');
const szovegek = [
'Üdvözöllek a portfólió oldalamon!',
'A nevem Bogdán László',
'Nézz szét az oldalamon, ha felkeltettem az érdeklődésed szívesen dolgoznék veled együtt, akár a saját weboldalad létrehozásában, kisebb programokon..',
];

let szovegIndex = 0;
let karakterIndex = 0;

function getRandomDelay() {
    return Math.random() * 100 + 50; 
}

function typeWriter() {
    if (szovegIndex < szovegek.length) {
        const aktualisSzoveg = szovegek[szovegIndex];
        
        if (karakterIndex < aktualisSzoveg.length) {
            bemutatkozas.innerHTML += aktualisSzoveg.charAt(karakterIndex);
            karakterIndex++;
            setTimeout(typeWriter, getRandomDelay());
        } else {
            bemutatkozas.innerHTML += '<br>';
            szovegIndex++;
            karakterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }
}
setTimeout(typeWriter, 500);


window.onload = function(){
    const cards = [
    {
    'id':1,
    'name': 'JavaScript',
    'description': '',
    'github': 'https://github.com/lacko186/carshop'
    },
        {
    'id':2,
    'name': 'PHP',
    'description': '',
    'github': 'https://github.com/lacko186/KaposTransit_vizsgaremek'
    },
        {
    'id':3,
    'name': 'NodeJS',
    'description': '',
    'github': 'https://github.com/lacko186/websocket_gyakorlas'
    },
        {
    'id':4,
    'name': 'C#',
    'description': '',
    'github': 'https://github.com/lacko186/asztali_gyakorlo'
    },
        {
    'id':5,
    'name': 'Python',
    'description': '',
    'github': 'https://github.com/lacko186/python_alapok'
    },
    {
    'id':6,
    'name': 'Android',
    'description': '',
    'github': 'https://github.com/lacko186/Android'
    }
]

const one = document.getElementById('elsoskill');
const two = document.getElementById('masodikskill');
const three = document.getElementById('harmadikskill');
const four = document.getElementById('negyedikskill');
const five = document.getElementById('otodikskill');
const six = document.getElementById('hatodikskill');

one.innerHTML = `<h1>${cards[0].name}</h1><br><p>${cards[0].description}</p><a href='${cards[0].github}'>${cards[0].github}</a>`
two.innerHTML = `<h1>${cards[1].name}</h1><br><p>${cards[1].description}</p><a href='${cards[1].github}'>${cards[1].github}</a>`
three.innerHTML = `<h1>${cards[2].name}</h1><br><p>${cards[2].description}</p><a href='${cards[2].github}'>${cards[2].github}</a>`
four.innerHTML = `<h1>${cards[3].name}</h1><br><p>${cards[3].description}</p><a href='${cards[3].github}'>${cards[3].github}</a>`
five.innerHTML = `<h1>${cards[4].name}</h1><br><p>${cards[4].description}</p><a href='${cards[4].github}'>${cards[4].github}</a>`
six.innerHTML = `<h1>${cards[5].name}</h1><br><p>${cards[5].description}</p><a href='${cards[5].github}'>${cards[5].github}</a>`
}

const tapasztalat = document.getElementById('tapasztalat');
const tapasztalatok = [{
'id':1,
'date': '2023.03-2023.06',
'position': 'Szoftverfejlesztő',
'company': 'Alfabox Kft',
'description': 'Munkakörömben fejlesztőként dolgoztam, betekintést nyerve az adatbázisok és nagyobb vállalati rendszerek működésébe. A feladatok között szerepelt weboldalak és webalkalmazások fejlesztése, valamint kisebb rendszerek karbantartása és hibajavítás. A munkám során különböző programozási nyelveket és technológiákat használtam, mint például JavaScript, PHP és SQL. Emellett részt vettem csapatmunkában is, ahol együttműködtem más fejlesztőkkel a projektek sikeres megvalósítása érdekében.'

},
{
    'id':2,
    'date': '2024.03-2025.06',
    'position': 'Információs és kommunikációs rendszerek felhasználóit támogató technikus',
    'company': 'KIÁKK Nonprofit Kft.',
    'description': 'A cégnél lehetőségem nyílt betekintést nyerni mind a szerver, mind a kliens oldali fejlesztési folyamatokba. Verziókezelőkkel, adatbázisokkal foglalkozhattam. A gyakorlati tapasztalat lehetővé tette, hogy naprakész programnyelvekkel dolgozhassak, valamint mesterséges intelligencia alapú segédeszközöket is bevonjak a fejlesztésbe.'
}
]

tapasztalat.innerHTML = `<h5>${tapasztalatok[0].date}</h5><h5>${tapasztalatok[0].position}</h5><h5>${tapasztalatok[0].company}</h5><p>${tapasztalatok[0].description}</p><br><h5>${tapasztalatok[1].date}</h5><h5>${tapasztalatok[1].position}</h5><h5>${tapasztalatok[1].company}</h5><p>${tapasztalatok[1].description}</p>`