const sunglare1 = document.getElementById('sunglareid1');
const sunglare3 = document.getElementById('sunglareid3');
const sunglare4 = document.getElementById('sunglareid4');

const onMouseMove = (e) => {
    sunglare1.style.left = .03 % e.pageX + 12.30 + 'vw';
    sunglare1.style.top = .03 * e.pageY + 24.60 + 'vh';
    sunglare3.style.left = .02 * e.pageX + 9.50 + 'vw';
    sunglare3.style.top = .02 % e.pageY + 17.0 + 'vh';
    sunglare4.style.left = .01 * e.pageX + 7.90 + 'vw';
    sunglare4.style.top = .01 * e.pageY + 17.80 + 'vh';
}

document.addEventListener('mousemove', onMouseMove);
