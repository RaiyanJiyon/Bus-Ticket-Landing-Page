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

        const economy = document.getElementById('economy');

        if (!button.classList.contains('bg-primary-color', 'text-white')) {
            // Seat is being selected
            if (selectedSeat < maxSeat) {
                button.classList.add('bg-primary-color', 'text-white');

                // Update seat count and total price
                updateSeatCount(-1, +1);
                updateTotalPrice(550);
                selectedSeat++;

                noSeatMsg.classList.add('hidden');

                // Create and append seat info
                if (economy) {
                    economy.classList.remove('hidden');

                    const economyDiv = document.createElement('div');
                    economyDiv.classList.add('flex', 'justify-between');
                    // Add a data attribute to identify the seat
                    economyDiv.setAttribute('data-seat-id', button.id);

                    const seatName = button.textContent; // e.g., 'A1', 'B1', etc.
                    const seatClass = 'Economy';
                    const seatPrice = '550';

                    const economyParagraph1 = document.createElement('p');
                    economyParagraph1.classList.add('text-raleway', 'text-description');
                    economyParagraph1.textContent = seatName;

                    const economyParagraph2 = document.createElement('p');
                    economyParagraph2.classList.add('text-raleway', 'text-description');
                    economyParagraph2.textContent = seatClass;

                    const economyParagraph3 = document.createElement('p');
                    economyParagraph3.classList.add('text-raleway', 'text-description');
                    economyParagraph3.textContent = seatPrice;

                    economyDiv.appendChild(economyParagraph1);
                    economyDiv.appendChild(economyParagraph2);
                    economyDiv.appendChild(economyParagraph3);

                    economy.appendChild(economyDiv);
                } else {
                    console.error('Element with ID "economy" not found.');
                }

                // Handle coupon application if selected seats are 4
                if (selectedSeat === 4) {
                    couponInput.removeAttribute('disabled');
                    applyBtn.removeAttribute('disabled');

                    applyBtn.addEventListener('click', () => {
                        const couponInputValue = couponInput.value;

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
            // Seat is being deselected
            button.classList.remove('bg-primary-color', 'text-white');

            // Update seat count and total price
            updateSeatCount(+1, -1);
            updateTotalPrice(-550);
            selectedSeat--;

            // Remove the seat info from 'economy' div
            if (economy) {
                const seatDivs = economy.querySelectorAll('div[data-seat-id]');
                seatDivs.forEach(seatDiv => {
                    if (seatDiv.getAttribute('data-seat-id') === button.id) {
                        economy.removeChild(seatDiv);
                    }
                });

                // If no seats are selected, show 'No seat Booked' message
                if (selectedSeat === 0) {
                    noSeatMsg.classList.remove('hidden');
                }
            } else {
                console.error('Element with ID "economy" not found.');
            }

            if (selectedSeat < 4) {
                couponInput.setAttribute('disabled', true);
                applyBtn.setAttribute('disabled', true);
            }

            grandTicketAmountElement.innerText = "****";
            couponInputLaval.classList.remove('hidden');
            couponInput.value = "";
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

function getTextElementValueAsNumber(id) {
    const element = document.getElementById(id);
    return parseInt(element.innerText) || 0;
}
