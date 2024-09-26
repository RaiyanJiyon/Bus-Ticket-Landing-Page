const totalSeatElement = document.getElementById('total-seat');
const bookedSeatElement = document.getElementById('booked-seat');

function updateSeatCount(totalChange, seatChange) {
    const totalSeat = getTextElementValueAsNumber('total-seat');
    const bookedSeat = getTextElementValueAsNumber('booked-seat');

    document.getElementById('total-seat').innerText = totalSeat + totalChange;
    document.getElementById('booked-seat').innerText = bookedSeat + seatChange;
}

const buttons = document.querySelectorAll('.seat-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('bg-primary-color', 'text-white')) {
            updateSeatCount(-1, +1);
            button.classList.add('bg-primary-color', 'text-white');
        }
    });

    button.addEventListener('dblclick', () => {
        if (button.classList.contains('bg-primary-color', 'text-white')) {
            updateSeatCount(+1, -1);
            button.classList.remove('bg-primary-color', 'text-white');
        }
    });
});