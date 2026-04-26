let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function render() {
    const now = new Date();
    const todayName = days[now.getDay()];
    const todayDiv = document.getElementById("today");
    const scheduleDiv = document.getElementById("schedule");

    todayDiv.innerHTML = "";
    scheduleDiv.innerHTML = "";

    // 1. Отображаем пары на сегодня + Таймер
    const todayLessons = schedule.filter(s => s.day === todayName);
    
    if (todayLessons.length === 0) {
        todayDiv.innerHTML = "<p style='opacity:0.5'>Сегодня пар нет 🥳</p>";
    } else {
        todayLessons.forEach((lesson) => {
            const timerInfo = getTimerStatus(lesson.time);
            
            todayDiv.innerHTML += `
                <div class="card ${timerInfo.active ? 'active-lesson' : ''}">
                    <b>${lesson.subject}</b><br>
                    ${lesson.time} | ауд. ${lesson.room}
                    ${timerInfo.html}
                </div>`;
        });
    }

    // 2. Отображаем всю неделю
    schedule.forEach((lesson, index) => {
        scheduleDiv.innerHTML += `
            <div class="card">
                <b>${lesson.day} — ${lesson.subject}</b><br>
                ${lesson.time} | ауд. ${lesson.room}
                <button class="delete-btn" onclick="deleteLesson(${index})">✕</button>
            </div>`;
    });
}

// Логика таймера
function getTimerStatus(timeString) {
    try {
        const now = new Date();
        const [startStr, endStr] = timeString.split('-');
        
        const startTime = new Date();
        const [sH, sM] = startStr.split(':');
        startTime.setHours(sH, sM, 0);

        const endTime = new Date();
        const [eH, eM] = endStr.split(':');
        endTime.setHours(eH, eM, 0);

        if (now >= startTime && now <= endTime) {
            const diff = Math.floor((endTime - now) / 1000 / 60); // минуты
            return {
                active: true,
                html: `<div style="margin-top:10px; color:#f9e2af; font-size:13px;">
                        ⏳ Осталось: ${diff} мин.
                       </div>`
            };
        }
    } catch (e) { return { active: false, html: '' }; }
    return { active: false, html: '' };
}

function addLesson() {
    const subject = document.getElementById("subject").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;

    if (!subject || !time) return alert("Введите данные!");

    schedule.push({ day, subject, time, room });
    localStorage.setItem("schedule", JSON.stringify(schedule));
    
    document.getElementById("subject").value = "";
    toggleForm();
    render();
}

function deleteLesson(index) {
    if(confirm("Удалить?")) {
        schedule.splice(index, 1);
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

function toggleForm() {
    const form = document.getElementById("add-form");
    form.classList.toggle("hidden");
    
    // ФИШКА: Автоматический выбор текущего дня в списке
    if (!form.classList.contains("hidden")) {
        const todayIndex = new Date().getDay();
        const daySelect = document.getElementById("day");
        // Если сегодня воскресенье (0), ставим понедельник (1)
        daySelect.selectedIndex = todayIndex === 0 ? 0 : todayIndex - 1;
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

// Обновляем таймер каждую минуту
setInterval(render, 60000);

render();