document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if(name && room && date && time) {
        const bookingCard = `
            <div class="alert alert-info mt-3 hover-scale">
                <strong>${name}</strong> telah menempah <strong>${room}</strong> pada <strong>${date}</strong> jam <strong>${time}</strong>.
            </div>
        `;
        document.getElementById('calendar').innerHTML += bookingCard;
        this.reset();
        alert('Tempahan Berjaya!');
    } else {
        alert('Sila lengkapkan semua maklumat!');
    }
});
