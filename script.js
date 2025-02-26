function startCountdown() {
    const eventDate = new Date("2025-03-01T00:00:00").getTime();
    setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `Registration closes in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (timeLeft < 0) {
            document.getElementById("countdown").innerHTML = "Registration Closed";
        }
    }, 1000);
}
startCountdown();
