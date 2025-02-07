document.getElementById('prayerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const incense = document.getElementById('incense').value;
    const prayer = document.getElementById('prayer').value;
    const message = `You have burned ${incense} incense and made a prayer: "${prayer}"`;
    document.getElementById('message').textContent = message;
});
