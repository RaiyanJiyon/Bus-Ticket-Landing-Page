let selectedSeat = 0;
let maxSeat = 4;
let totalPrice = 0;

const seatButtons = document.querySelectorAll('.seat-btn');
seatButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('bg-primary-color', 'text-white')) {
            if (selectedSeat < maxSeat) {
                button.classList.add('bg-primary-color', 'text-white')

                updateSeatCount(-1, +1);
                updateTotalPrice(550);
                selectedSeat++;

                const noSeatMsg = document.getElementById('no-seat-msg');
                noSeatMsg.classList.add('hidden');
            } else {
                alert('Maximum seat added');
            }
        } else {
            button.classList.remove('bg-primary-color', 'text-white');
            
            updateSeatCount(+1, -1);
            updateTotalPrice(-550);
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

function updateTotalPrice(change) {
    totalPrice += change;
    const totalTicketAmount = document.getElementById('total-ticket-amount');
    totalTicketAmount.innerText = totalPrice.toFixed(2);
}