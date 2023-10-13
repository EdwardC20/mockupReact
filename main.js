document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('filterInput');
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.querySelectorAll('.col');


    function filterCards() {
        const filterText = filterInput.value.toLowerCase();

        cards.forEach((card) => {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();

            if (cardTitle.includes(filterText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    filterInput.addEventListener('input', filterCards);
    filterCards();
});

function filterIcon(name) {
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.querySelectorAll('.col');

    cards.forEach((card) => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();

        if (!name || cardTitle.includes(name)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}