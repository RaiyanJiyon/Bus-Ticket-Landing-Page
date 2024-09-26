let selectedSeat = 0;
let maxSeat = 4;

const seatButtons = document.querySelectorAll('.seat-btn');
seatButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('bg-primary-color', 'text-white')) {
            if (selectedSeat < maxSeat) {
                button.classList.add('bg-primary-color', 'text-white')

                updateSeatCount(-1, +1);
                selectedSeat++;
            } else {
                alert('Maximum seat added');
            }
        } else {
            button.classList.remove('bg-primary-color', 'text-white');
            
            updateSeatCount(+1, -1);
            selectedSeat--;
        }
    });
});





function updateSeatCount(totalChange, seatChange) {
    const totalSeat = getTextElementValueAsNumber('total-seat');
    const bookedSeat = getTextElementValueAsNumber('booked-seat');

    document.getElementById('total-seat').innerText = totalSeat + totalChange;
    document.getElementById('booked-seat').innerText = bookedSeat + seatChange;
}