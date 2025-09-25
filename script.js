document.addEventListener('DOMContentLoaded', function() {
    const loading = document.querySelector('.loading-animation');
    
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        loading.classList.add('hidden');
        document.body.style.overflow = 'auto';
        initializeGrid();
        generateSkillCards();
        startTypeWriter();
    }, 5000);
});

function startTypeWriter() {
    const bemutatkozas = document.getElementById('bemutatkozas');
    const szovegek = [
        'Üdvözöllek a portfólió oldalamon!',
        'A nevem Bogdán László',
        'Nézz szét, ha felkeltettem az érdeklődésed szívesen dolgoznék veled együtt, akár a saját weboldalad létrehozásában, kisebb programokon..',
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
                bemutatkozas.innerHTML += '<br><br>';
                szovegIndex++;
                karakterIndex = 0;
                setTimeout(typeWriter, 800);
            }
        }
    }

    if (bemutatkozas) {
        bemutatkozas.innerHTML = '';
        setTimeout(typeWriter, 500);
    }
}

function initializeGrid() {
    const colors = ['#c21c09ff', '#5b1379ff', '#196496ff', '#e67e22', '#2ecc71', '#f1c40f', '#3498db', '#9b59b6', '#34495e', '#00eeffff'];
    const SQUARES = 400;
    const squares = [];
    const container = document.getElementById('container');
    
    if (!container) {
        return;
    }
    
    for(let i = 0; i < SQUARES; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseout', () => removeColor(square));

        container.appendChild(square);
        squares.push(square);
    }

    setInterval(() => {
        const randomSquare = squares[Math.floor(Math.random() * squares.length)];
        setColor(randomSquare);
        
        setTimeout(() => {
            removeColor(randomSquare);
        }, 2000);
    }, 100);

    function setColor(element) {
        const color = getRandomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }

    function removeColor(element) {
        element.style.background = '#1d1d1d';
        element.style.boxShadow = '0 0 2px #000';
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

function generateSkillCards() {
    const cards = [
        {
            'id': 1,
            'name': 'JavaScript',
            'description': 'Szerver-Kliens kapcsolat',
            'github': 'https://github.com/lacko186/carshop',
            'value': '70%',
            'progresstyle': 'background-color: #e0a720ff;',
            'project': 'https://github.com/lacko186/carshop/raw/main/carshop.png'
        },
        {
            'id': 2,
            'name': 'PHP',
            'description': 'Szerveroldali programozás és adatbázis kezelés',
            'github': 'https://github.com/lacko186/KaposTransit-vizsgaremek',
            'value': '60%',
            'progresstyle': 'background-color: #2d0454;',
            'project': 'https://github.com/Noszlopy-13D/FalkaMarietta_BogdanLaszlo/raw/main/dokumentacio/valosideju.png'
        },
        {
            'id': 3,
            'name': 'NodeJS',
            'description': 'Valós idejű alkalmazások és API fejlesztés',
            'github': 'https://github.com/lacko186/websocket',
            'value': '80%',
            'progresstyle': 'background-color: #084e04ff;',
            'project': 'https://github.com/lacko186/websocket/blob/main/chat.PNG?raw=true'
        },
        {
            'id': 4,
            'name': 'C#',
            'description': 'Asztali alkalmazások és .NET fejlesztés',
            'github': 'https://github.com/lacko186/asztali-gyakorlo',
            'value': '70%',
            'progresstyle': 'background-color: #9a0c85ff;',
            'project': 'konvertalo.png'
        },
        {
            'id': 5,
            'name': 'Python',
            'description': 'Django webalkalmazás',
            'github': 'https://github.com/lacko186/Django_alapok',
            'value': '90%',
            'progresstyle': 'background-color: #0e6585ff;',
            'project': 'https://github.com/lacko186/Django_alapok/raw/main/ujfelhasznalo.PNG'
        },
        {
            'id': 6,
            'name': 'Android',
            'description': 'Mobil alkalmazásfejlesztés',
            'github': 'https://github.com/lacko186/Android',
            'value': '50%',
            'progresstyle': 'background-color: #5af114;',
            'project': 'https://github.com/lacko186/Android/blob/master/szamologep.PNG?raw=true'
        }
    ];

    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = '';

    cards.forEach(card => {
        const cardElement = createSkillCard(card);
        container.appendChild(cardElement);
    });

    setTimeout(() => {
        animateProgressBars();
    }, 500);
}

function createSkillCard(card) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 mb-4';

    const progressBarStyle = card.progresstyle.replace('padding: 3px;', '').replace('text-align:center', '');

    col.innerHTML = `
        <div class="card skill-card h-100">
            <img src="${card.project}" class="card-img-top" alt="${card.name} projekt" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMiI+SW1nPC90ZXh0Pgo8L3N2Zz4K'">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text flex-grow-1">${card.description}</p>
                
                <div class="progress-container">
                    <div class="progress-label">Készség szint</div>
                    <div class="custom-progress">
                        <div class="custom-progress-bar" style="${progressBarStyle}" data-width="${card.value}"></div>
                    </div>
                </div>
                
                <div class="card-buttons mt-auto">
                    <a href="${card.github}" target="_blank" class="btn-github">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    `;

    return col;
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.custom-progress-bar');
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, Math.random() * 500);
    });
}
