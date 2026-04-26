const defaultSchedule = [
    // ПОНЕДЕЛЬНИК
    { day: "Понедельник", week: "both", subject: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" },
    { day: "Понедельник", week: "both", subject: "Тестирование ПО", type: "Прак", time: "10:05-11:30", room: "206" },
    { day: "Понедельник", week: "both", subject: "Физика", type: "Лек", time: "11:40-13:05", room: "315" },
    { day: "Понедельник", week: "both", subject: "Математика", type: "Прак", time: "13:30-14:55", room: "219" },
    { day: "Понедельник", week: "both", subject: "Физра", type: "Прак", time: "15:05-16:30", room: "с/з" }, // Теперь последняя

    // ВТОРНИК
    { day: "Вторник", week: "both", subject: "Иностранный язык", type: "Прак", time: "08:30-09:55", room: "312" },
    { day: "Вторник", week: "num", subject: "Физика", type: "Прак", time: "10:05-11:30", room: "213" },
    { day: "Вторник", week: "both", subject: "Математика", type: "Лек", time: "11:40-13:05", room: "221" },
    { day: "Вторник", week: "both", subject: "История бел. гос-ти", type: "Лек", time: "13:30-14:55", room: "312" },

    // СРЕДА
    { day: "Среда", week: "both", subject: "Тестирование ПО", type: "Лек", time: "08:30-09:55", room: "315" },
    { day: "Среда", week: "both", subject: "Математика", type: "Прак", time: "10:05-11:30", room: "218" },
    { day: "Среда", week: "both", subject: "Физ. основы измерений", type: "Прак", time: "11:40-13:05", room: "305" },
    { day: "Среда", week: "both", subject: "Физра", type: "Прак", time: "13:30-14:55", room: "с/з" },

    // ЧЕТВЕРГ
    { day: "Четверг", week: "both", subject: "Физ. основы измерений", type: "Прак", time: "08:30-09:55", room: "305" },
    { day: "Четверг", week: "both", subject: "Физика", type: "Прак", time: "10:05-11:30", room: "218" },
    { day: "Четверг", week: "both", subject: "Физика", type: "Лек", time: "11:40-13:05", room: "221" },
    { day: "Четверг", week: "both", subject: "Информ. час", type: "Обяз", time: "13:15-14:15", room: "307" },

    // ПЯТНИЦА
    { day: "Пятница", week: "num", subject: "Основы права", type: "Лек", time: "08:30-09:55", room: "221" },
    { day: "Пятница", week: "both", subject: "Физра", type: "Прак", time: "10:05-11:30", room: "с/з" },
    { day: "Пятница", week: "den", subject: "Основы права", type: "Прак", time: "11:40-13:05", room: "312" }
];

let schedule = JSON.parse(localStorage.getItem("schedule")) || defaultSchedule;
let weekOffset = 0; 

function getWeekNum(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = Math.floor((date - start) / 86400000);
    return Math.ceil((diff + start.getDay() + 1) / 7);
}

function renderToday() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let now = new Date();
    let dayIdx = now.getDay();
    
    if (dayIdx === 0) {
        dayIdx = 1;
        document.getElementById('today-title').innerText = "Завтра (Пн)";
    } else {
        document.getElementById('today-title').innerText = "Сегодня (" + days[dayIdx] + ")";
    }

    const currentWeekType = (getWeekNum(now) % 2 === 0) ? "den" : "num";
    const list = document.getElementById('today-list');
    list.innerHTML = "";

    const lessons = schedule.filter(s => s.day === days[dayIdx] && (s.week === "both" || s.week === currentWeekType));
    
    lessons.forEach(l => {
        list.innerHTML += `
            <div class="card">
                <div class="lesson-time">🕒 ${l.time}</div>
                <div class="lesson-name">${l.subject}</div>
                <div style="font-size: 12px; color: var(--accent); margin-bottom: 5px;">${l.type}</div>
                <div class="lesson-room">📍 Кабинет ${l.room}</div>
            </div>`;
    });
}

function renderWeek() {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
    let now = new Date();
    let targetDate = new Date();
    targetDate.setDate(now.getDate() + (weekOffset * 7));
    
    const weekType = (getWeekNum(targetDate) % 2 === 0) ? "den" : "num";
    document.getElementById('week-display-title').innerText = weekOffset === 0 ? "Текущая неделя" : "Следующая неделя";
    
    const container = document.getElementById('week-schedule-container');
    container.innerHTML = "";

    days.forEach(d => {
        const dayLessons = schedule.filter(s => s.day === d && (s.week === "both" || s.week === weekType));
        if(dayLessons.length > 0) {
            container.innerHTML += `<h3 style="margin:20px 0 10px 5px; font-size:14px; opacity:0.6;">${d}</h3>`;
            dayLessons.forEach(l => {
                container.innerHTML += `
                    <div class="card">
                        <div style="display:flex; justify-content:space-between;">
                            <b>${l.subject}</b>
                            <span style="font-size:10px; color:var(--accent);">${l.type}</span>
                        </div>
                        <small>${l.time} | Каб. ${l.room}</small>
                    </div>`;
            });
        }
    });
}

function changeWeek(dir) {
    weekOffset += dir;
    if (weekOffset < 0) weekOffset = 0;
    if (weekOffset > 1) weekOffset = 1;
    renderWeek();
}

function switchTab(tabId, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    el.classList.add('active');
    if(tabId === 'tab-today') renderToday();
    if(tabId === 'tab-week') renderWeek();
}

function resetToDefault() {
    if(confirm("Сбросить расписание?")) {
        schedule = defaultSchedule;
        localStorage.setItem("schedule", JSON.stringify(schedule));
        location.reload();
    }
}

renderToday();