let schedule = JSON.parse(localStorage.getItem("schedule")) || []; // Твоя база данных останется здесь

function switchTab(tabId, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    el.classList.add('active');
    render();
}

function getWeekType() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = Math.floor((now - start) / 86400000);
    const weekNum = Math.ceil((diff + start.getDay() + 1) / 7);
    return (weekNum % 2 === 0) ? "den" : "num";
}

function render() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const now = new Date();
    const todayName = days[now.getDay()];
    const weekType = getWeekType();

    document.getElementById('week-type-display').innerText = weekType === 'num' ? 'Числитель (нечет)' : 'Знаменатель (чет)';
    document.getElementById('current-day-name').innerText = todayName;

    // Рендер вкладки СЕГОДНЯ
    const todayList = document.getElementById('today-list');
    todayList.innerHTML = "";
    const todayLessons = schedule.filter(s => s.day === todayName && (s.week === "both" || s.week === weekType));

    if (todayLessons.length === 0) {
        todayList.innerHTML = "<p style='text-align:center; opacity:0.5; margin-top:50px;'>Сегодня пар нет 🙌</p>";
    } else {
        todayLessons.forEach(l => {
            todayList.innerHTML += `
                <div class="card">
                    <div class="lesson-time">🕒 ${l.time}</div>
                    <div class="lesson-subject">${l.subject}</div>
                    <div class="lesson-room">📍 Аудитория: ${l.room}</div>
                </div>`;
        });
    }

    // Рендер вкладки НЕДЕЛЯ
    const fullList = document.getElementById('full-schedule');
    fullList.innerHTML = "";
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"].forEach(d => {
        const dayLessons = schedule.filter(s => s.day === d);
        if (dayLessons.length > 0) {
            fullList.innerHTML += `<h2 style="font-size:16px; margin:20px 0 10px 5px; opacity:0.6">${d}</h2>`;
            dayLessons.forEach((l, idx) => {
                fullList.innerHTML += `
                    <div class="card" style="padding: 12px;">
                        <span style="font-size:12px; color:var(--accent)">${l.week === 'num' ? '[Чис]' : l.week === 'den' ? '[Знам]' : ''}</span>
                        <div style="display:flex; justify-content:space-between;">
                            <b>${l.subject}</b>
                            <span onclick="deleteLesson(${idx})" style="color:red; font-size:12px;">Удалить</span>
                        </div>
                        <div style="font-size:13px; opacity:0.7">${l.time} | каб. ${l.room}</div>
                    </div>`;
            });
        }
    });
}

// Функции addLesson и deleteLesson остаются как были, но добавь в addLesson поле weekType
function addLesson() {
    const lesson = {
        subject: document.getElementById('subject').value,
        day: document.getElementById('day').value,
        week: document.getElementById('week-type').value,
        time: document.getElementById('time').value,
        room: document.getElementById('room').value
    };
    schedule.push(lesson);
    localStorage.setItem("schedule", JSON.stringify(schedule));
    render();
    alert("Добавлено!");
}

function deleteLesson(index) {
    schedule.splice(index, 1);
    localStorage.setItem("schedule", JSON.stringify(schedule));
    render();
}

render();