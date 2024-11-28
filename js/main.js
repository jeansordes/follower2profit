document.getElementById('revenue-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const followers = parseInt(document.getElementById('followers').value) || 0;
    const engagementRate = parseFloat(document.getElementById('engagement-rate').value) || 0;
    const conversionRate = 0.03; // 3%
    const highTicketOfferPrice = 1500; // €1500

    const revenue = followers * (engagementRate / 100) * conversionRate * highTicketOfferPrice;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `With ${followers} followers and an engagement rate of ${engagementRate}%, you could generate €${revenue.toFixed(2)} in revenue with a high-ticket offer.`;
}); 