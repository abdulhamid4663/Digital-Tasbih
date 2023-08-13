const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahInrement = document.getElementById('subhanAllahInrement');
const subhanAllahDecrement = document.getElementById('subhanAllahDecrement');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahInrement = document.getElementById('alhamdulillahInrement');
const alhamdulillahDecrement = document.getElementById('alhamdulillahDecrement');

const allahuAkbarDisplay = document.getElementById('allahuAkbarDisplay');
const allahuAkbarInrement = document.getElementById('allahuAkbarInrement');
const allahuAkbarDecrement = document.getElementById('allahuAkbarDecrement');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;

// SubhanAllah Event Listener
subhanAllahInrement.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33) return alert('Completed SubhanAllah');
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
});
subhanAllahDecrement.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) return alert('Cannot add a negative value')
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
});

// Alhamdulillah Event Listener
alhamdulillahInrement.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) return alert('Completed Alhamdulillah');
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});
alhamdulillahDecrement.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) return alert('Cannot add a negative value')
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
});

// AllahuAkbar Event Listener
allahuAkbarInrement.addEventListener('click', function () {
    if (allahuAkbarInitialValue === 34) return alert('Completed AllahuAkbar');
    allahuAkbarInitialValue += 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
});
allahuAkbarDecrement.addEventListener('click', function () {
    if (allahuAkbarInitialValue === 0) return alert('Cannot add a negative value')
    allahuAkbarInitialValue -= 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
});

// Reset Button Event Listener
resetBtn.addEventListener('click', function () {

    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;

    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
    
});