function updateCountdown(elementId, targetDate, eventDescription) {
    const countdownElement = document.getElementById(elementId);

    function update() {
        const now = new Date();
        const timeDiff = now - targetDate;

        if (timeDiff < 0) {
            countdownElement.textContent = "El evento aún no ha ocurrido.";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos y ${seconds}"`;
    }

    update();
    setInterval(update, 1000);
}

const targetDate1 = new Date('2024-07-29T00:05:00');
const targetDate2 = new Date('2024-07-30T18:00:00');

updateCountdown('countdown1', targetDate1, "Evento 1");
updateCountdown('countdown2', targetDate2, "Evento 2");
