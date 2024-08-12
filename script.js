// Event data
const eventData = [
    {
        id: 'countdown1',
        targetDate: new Date('2024-07-29T00:05:00'),
        description: 'Evento 1'
    },
    {
        id: 'countdown2',
        targetDate: new Date('2024-07-30T18:00:00'),
        description: 'Evento 2'
    }
];

// Function to format the time difference
function formatTimeDiff(timeDiff) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
}

// Function to update countdown display
function updateCountdownDisplay(event) {
    const countdownElement = document.getElementById(event.id);
    const now = new Date();
    const timeDiff = now - event.targetDate;

    if (timeDiff < 0) {
        countdownElement.textContent = 'El evento aún no ha ocurrido.';
    } else {
        countdownElement.textContent = formatTimeDiff(timeDiff);
    }
}

// Update countdown display for each event
function updateCountdowns() {
    eventData.forEach(updateCountdownDisplay);
    requestAnimationFrame(updateCountdowns);
}

// Start the countdown
updateCountdowns();
