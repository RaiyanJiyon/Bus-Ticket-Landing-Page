const totalSeat = getTextElementValueAsNumber('total-seat');
const bookedSeat = getTextElementValueAsNumber('booked-seat');

// const A1 = getTextElementValue('A-1');
// const A2 = getTextElementValue('A-2');
// const A3 = getTextElementValue('A-3');
// const A4 = getTextElementValue('A-4');

// const B1 = getTextElementValue('B-1');
// const B2 = getTextElementValue('B-2');
// const B3 = getTextElementValue('B-3');
// const B4 = getTextElementValue('B-4');

// const C1 = getTextElementValue('C-1');
// const C2 = getTextElementValue('C-2');
// const C3 = getTextElementValue('C-3');
// const C4 = getTextElementValue('C-4');

// const D1 = getTextElementValue('D-1');
// const D2 = getTextElementValue('D-2');
// const D3 = getTextElementValue('D-3');
// const D4 = getTextElementValue('D-4');

// const E1 = getTextElementValue('E-1');
// const E2 = getTextElementValue('E-2');
// const E3 = getTextElementValue('E-3');
// const E4 = getTextElementValue('E-4');

// const F1 = getTextElementValue('F-1');
// const F2 = getTextElementValue('F-2');
// const F3 = getTextElementValue('F-3');
// const F4 = getTextElementValue('F-4');

// const G1 = getTextElementValue('G-1');
// const G2 = getTextElementValue('G-2');
// const G3 = getTextElementValue('G-3');
// const G4 = getTextElementValue('G-4');

// const H1 = getTextElementValue('H-1');
// const H2 = getTextElementValue('H-2');
// const H3 = getTextElementValue('H-3');
// const H4 = getTextElementValue('H-4');

// const I1 = getTextElementValue('I-1');
// const I2 = getTextElementValue('I-2');
// const I3 = getTextElementValue('I-3');
// const I4 = getTextElementValue('I-4');

// const J1 = getTextElementValue('J-1');
// const J2 = getTextElementValue('J-2');
// const J3 = getTextElementValue('J-3');
// const J4 = getTextElementValue('J-4');


const seatButtons = document.querySelectorAll('.seat-btn');
seatButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('bg-primary-color', 'text-white')
        console.log('click')
    });
    button.addEventListener('dblclick', () => {
        button.classList.remove('bg-primary-color', 'text-white')
        console.log('click')
    });
});