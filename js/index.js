let selectedSeat = 0;
let maxSeat = 4;
let totalPrice = 0;

const seatButtons = document.querySelectorAll('.seat-btn');
seatButtons.forEach(button => {
    button.addEventListener('click', () => {
        const grandTicketAmountElement = document.getElementById('grand-ticket-amount');
        const couponInput = document.getElementById('coupon-input');
        const applyBtn = document.getElementById('apply-btn');
        const couponInputLaval = document.getElementById('coupon-input-laval');
        const noSeatMsg = document.getElementById('no-seat-msg');

        if (!button.classList.contains('bg-primary-color', 'text-white')) {
            if (selectedSeat < maxSeat) {
                button.classList.add('bg-primary-color', 'text-white');

                updateSeatCount(-1, +1);
                updateTotalPrice(550);
                selectedSeat++;

                noSeatMsg.classList.add('hidden');

                if (selectedSeat === 4) {
                    couponInput.removeAttribute('disabled');
                    applyBtn.removeAttribute('disabled');

                    applyBtn.addEventListener('click', () => {
                        const couponInputValue = getInputElementValue('coupon-input');

                        if (couponInputValue === 'NEW15' || couponInputValue === 'Couple 20') {
                            const newDiscountedPrice = totalPrice - 330;
                            grandTicketAmountElement.innerText = newDiscountedPrice.toFixed(2);

                            const discountPrice = document.getElementById('discount-price');
                            discountPrice.classList.remove('hidden');

                            const discountHeading1 = document.createElement('h4');
                            discountHeading1.classList.add('font-semibold');
                            discountHeading1.textContent = 'Discount';

                            const discountHeading2 = document.createElement('h4');
                            discountHeading2.classList.add('font-semibold');
                            discountHeading2.textContent = '- BDT: 330.00';

                            discountPrice.appendChild(discountHeading1);
                            discountPrice.appendChild(discountHeading2);

                            couponInputLaval.classList.add('hidden');
                            applyBtn.classList.add('hidden');
                        } else {
                            alert('Your Provided Coupon Code Is Not Valid 😕');
                        }
                    });
                }
            } else {
                alert('Maximum seat added');
            }
        } else {
            button.classList.remove('bg-primary-color', 'text-white');

            updateSeatCount(+1, -1);
            updateTotalPrice(-550);
            selectedSeat--;

            if (selectedSeat < 4) {
                couponInput.setAttribute('disabled', true);
                applyBtn.setAttribute('disabled', true);
            }

            if (selectedSeat === 0) {
                noSeatMsg.classList.remove('hidden');
            }

            grandTicketAmountElement.innerText = "****";
            couponInputLaval.classList.remove('hidden');
            couponInputLaval.textContent = "";
            applyBtn.classList.remove('hidden');
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
    return totalPrice;
}