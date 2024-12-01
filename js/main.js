function dom(query) {
    return document.querySelector(query);
}

function refreshOutput() {
    const followers = parseInt(dom('#audience-size').value) || 0;
    const engagementRate = parseFloat(dom('#engagement-rate').value) || 2;
    const conversionRate = parseFloat(dom('#conversion-rate').value) || 3;
    const highTicketOfferPrice = parseFloat(dom('#premium-price').value) || 500;

    const revenue = followers * (engagementRate / 100) * (conversionRate / 100) * highTicketOfferPrice;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${followers} Followers
    <br/> × ${engagementRate}% : taux d'engagement
    <br/> × ${conversionRate}% : taux de conversion
    <br/> × ${highTicketOfferPrice}€ : prix moyen de l'offre
    <br/> = <b>${revenue.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: revenue % 1 === 0 ? 0 : 2 })} € de revenus par campagne</b>`;

    // Afficher le résultat
    document.getElementById('result').style.display = 'block';
}

refreshOutput();

// Add event listeners to input fields to call refreshOutput on input change
dom('#audience-size').addEventListener('input', refreshOutput);
dom('#engagement-rate').addEventListener('input', refreshOutput);
dom('#conversion-rate').addEventListener('input', refreshOutput);
dom('#premium-price').addEventListener('input', refreshOutput);

document.getElementById('revenue-form').addEventListener('submit', function(event) {
    event.preventDefault();
});