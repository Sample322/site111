// assets/js/main.js

// Пример: глобальный массив участников (для демонстрации; на практике данные можно загружать с сервера или из файлов)
const participants = [
    { id: 1, name: "Александр 'S1mple' Костылев", country: "Украина", status: "confirmed", info: "Описание участника 1", photo: "images/players/1.jpg", format: "Классический" },
    { id: 2, name: "Даниил 'Zeus' Тесленко", country: "Украина", status: "live", info: "Описание участника 2", photo: "images/players/2.jpg", format: "Быстрый" }
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
