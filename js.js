const sun = document.getElementById('sunid');
const line = document.getElementById('lineid');
const name1 = document.getElementById('namecontid');
const button = document.getElementById('buttonid');
const hermes = document.getElementById('hermesid');
const aphro = document.getElementById('aphroid');
const earth = document.getElementById('earthid');
const ares = document.getElementById('aresid');
const zeus = document.getElementById('zeusid');
const kronos = document.getElementById('saturnid');
const ouranos = document.getElementById('ouranosid');
const poseidon = document.getElementById('poseidonid')

const startbtn = document.getElementById('startbtnid');
const nextbtn = document.getElementById('nextid');
const resetbtn = document.getElementById('resetbtnid');

function sunintro() {
    sun.style.animation = "sunintro 6s linear forwards, rotation 150s linear infinite";
    line.style.display = "flex";
    name1.style.display = "flex";
    startbtn.style.display = "none";
    nextbtn.style.display = "flex";



    setTimeout(hermesintro, 6100)

    function hermesintro() {
        sun.style.display = "none";
        hermes.style.display = "flex";
    }
}

let n = 0;

function next() {

    var value = document.getElementById('nextid').value;

    value = n++;
    console.log(value);

    if (value === 0) {

        nextbtn.disabled = true;
        hermes.style.animation = "rotationh 150s linear forwards infinite, exit 3s ease forwards";

        setTimeout(aphrointro, 3100);

        function aphrointro() {
            hermes.style.display = "none";
            aphro.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }

    }

    if (value === 1) {

        nextbtn.disabled = true;
        aphro.style.animation = "rotationa 24s linear .5s forwards infinite, exit 3s ease forwards";

        setTimeout(earthintro, 3100);

        function earthintro() {
            aphro.style.display = "none";
            earth.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }

    }

    if (value === 2) {

        nextbtn.disabled = true;
        earth.style.animation = "exit 3s ease forwards";

        setTimeout(aresintro, 3100);

        function aresintro() {
            earth.style.display = "none";
            ares.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }

    }

    if (value === 3) {

        nextbtn.disabled = true;
        ares.style.animation = "rotationar 24.37s linear .5s forwards infinite, exit 3s ease forwards";

        setTimeout(zeusintro, 3100);

        function zeusintro() {
            ares.style.display = "none";
            zeus.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }
    }


    if (value === 4) {

        nextbtn.disabled = true;
        zeus.style.animation = "rotationz 300s linear .5s forwards infinite, exit 3s ease forwards";

        setTimeout(kronosintro, 3100);

        function kronosintro() {
            zeus.style.display = "none";
            kronos.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }
    }

    if (value === 5) {

        nextbtn.disabled = true;
        kronos.style.animation = "exit 3s ease forwards";

        setTimeout(uranosintro, 3100);

        function uranosintro() {
            kronos.style.display = "none";
            ouranos.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }

    }

    if (value === 6) {

        nextbtn.disabled = true;
        ouranos.style.animation = "rotationu 100s linear forwards infinite, exit 3s ease forwards";

        setTimeout(poseidonintro, 3100);

        function poseidonintro() {
            ouranos.style.display = "none";
            poseidon.style.display = "flex";
            clearTimeout;
            nextbtn.disabled = false;
        }

        nextbtn.style.display = "none";
        resetbtn.style.display = "flex";

    }

}

function reset() {

    resetbtn.style.display = "none";
    startbtn.style.display = "flex";
    line.style.display = "none";
    name1.style.display = "none";    

    poseidon.style.animation = "rotationp 150s linear forwards infinite, exit 3s ease forwards"

    setTimeout(sunreset, 3100);

    function sunreset() {

        poseidon.style.display = "none";
        sun.style.display = "flex";
        sun.style.animation = "rotations 150s linear infinite, sunreset 3s ease forwards";
    
        hermes.style.animation = "rotationh 150s linear forwards infinite, entry 3s ease forwards";
        aphro.style.animation = "rotationa 24s linear .5s forwards infinite, entry 3s ease forwards";
        earth.style.animation = "entry 3s ease forwards";
        ares.style.animation = "rotationz 300s linear .5s forwards infinite, entry 3s ease forwards";
        zeus.style.animation = "rotationz 300s linear .5s forwards infinite, entry 3s ease forwards";
        kronos.style.animation = "entry 3s ease forwards";
        ouranos.style.animation = "rotationu 100s linear forwards infinite, entry 3s ease forwards";
        poseidon.style.animation = "rotationp 150s linear forwards infinite, entry 3s ease forwards";
    
    }

    n = 0;

    
}


