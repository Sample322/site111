// assets/js/modal.js

// Функция открытия модального окна участника
function openParticipantModal(id) {
    // Предполагается, что глобальный массив participants уже загружен
    const participant = participants.find(p => p.id === id);
    if (!participant) {
        console.error('Участник с ID', id, 'не найден');
        return;
    }

    // Заполнение данных модального окна
    document.getElementById('modalParticipantName').textContent = participant.name;
    document.getElementById('modalParticipantCountry').textContent = participant.country;

    const statusBadge = document.getElementById('modalParticipantStatusBadge');
    const statusText = document.getElementById('modalParticipantStatus');
    if (participant.status === 'confirmed') {
        statusBadge.className = 'status-badge confirmed';
        statusText.textContent = 'Гарантированно участвует';
    } else {
        statusBadge.className = 'status-badge live';
        statusText.textContent = 'Проходит в лайв-формате';
    }

    // Устанавливаем tooltip для статуса
    const statusTooltip = document.getElementById('modalParticipantStatusTooltip');
    if (participant.status === 'confirmed') {
        // Здесь можно редактировать текст подсказки для подтверждённого статуса
        statusTooltip.setAttribute('data-tooltip', 'Участник гарантированно участвует в турнире');
    } else {
        // Здесь редактируйте текст подсказки для лайв-формата
        statusTooltip.setAttribute('data-tooltip', 'Участник проходит в лайв-формате турнира');
    }

    // Заполнение информации об участнике
    document.getElementById('modalParticipantInfo').textContent = participant.info;

    const photoElement = document.getElementById('modalParticipantPhoto');
    try {
        photoElement.src = participant.photo; // Используется путь из объекта участника
        photoElement.onerror = function() {
            this.src = 'images/default-avatar.png';
        };
    } catch (e) {
        photoElement.src = 'images/default-avatar.png';
        console.error('Ошибка при установке фото:', e);
    }

    // Отображаем модальное окно и overlay
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('participantModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна
function closeParticipantModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('participantModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обработчики событий для закрытия модального окна
document.getElementById('modalOverlay').addEventListener('click', closeParticipantModal);
document.querySelector('.close-button').addEventListener('click', closeParticipantModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeParticipantModal();
    }
});

// Функция для установки обработчиков кликов по карточкам участников (вызывается после генерации карточек)
function updateParticipantCards() {
    const cards = document.querySelectorAll('.participant');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Не реагировать на клики по кнопкам редактирования/удаления (если такие появятся)
            if (e.target.classList.contains('edit-btn') || e.target.classList.contains('delete-btn')) {
                return;
            }
            const id = parseInt(this.dataset.id);
            openParticipantModal(id);
        });
    });
}
