// assets/js/main.js

// Глобальный массив участников. Для добавления нового участника просто добавьте новый объект в массив.
const participants = [
    { id: 1, name: "Александр 'S1mple' Костылев", country: "Украина", status: "confirmed", info: "Описание участника 1", photo: "images/players/1.jpg" },
    { id: 2, name: "Даниил 'Zeus' Тесленко", country: "Украина", status: "live", info: "Описание участника 2", photo: "images/players/2.jpg" }
];

// Функция для рендеринга карточек участников
function renderParticipants() {
    const participantList = document.getElementById('participants');
    participantList.innerHTML = '';
    participants.forEach(participant => {
        const card = document.createElement('div');
        card.className = 'participant';
        card.dataset.id = participant.id;
        card.innerHTML = `
            <div class="participant-name">
              <span class="status ${participant.status === 'confirmed' ? 'confirmed' : 'live'}"></span>
              ${participant.name}
            </div>
            <div class="participant-country">${participant.country}</div>
        `;
        participantList.appendChild(card);
    });
    updateParticipantCards();
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    renderParticipants();
});
