document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cotação enviada com sucesso!');
});

document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let trackingNumber = document.getElementById('trackingNumber').value;
    document.getElementById('trackingResult').innerText = `Status da carga para o número de rastreamento ${trackingNumber}: Em trânsito.`;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
