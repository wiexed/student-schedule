// Расписание, разбитое по конкретным датам (ГГГГ-ММ-ДД)
// Добавил всё, что было на твоих скринах
const calendarData = {
    // НЕДЕЛЯ 1 (Текущая)
    "2026-04-27": [
        { subject: "Инженерная графика", type: "Прак", time: "08:30 — 09:55", room: "307" },
        { subject: "Тестирование ПО", type: "Прак", time: "10:05 — 11:30", room: "206" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Математика", type: "Прак", time: "13:30 — 14:55", room: "219" },
        { subject: "Физическая культура", type: "Прак", time: "15:05 — 16:30", room: "с/з" }
    ],
    "2026-04-28": [
        { subject: "Иностранный язык", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Физика", type: "Прак", time: "10:05 — 11:30", room: "213" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "История бел. гос-ти", type: "Лек", time: "13:30 — 14:55", room: "312" }
    ],
    "2026-04-29": [
        { subject: "Тестирование ПО", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Математика", type: "Прак", time: "10:05 — 11:30", room: "218" },
        { subject: "Физ. основы измерений", type: "Прак", time: "11:40 — 13:05", room: "305" },
        { subject: "Физическая культура", type: "Прак", time: "13:30 — 14:55", room: "с/з" }
    ],
    "2026-04-30": [
        { subject: "Физ. основы измерений", type: "Прак", time: "08:30 — 09:55", room: "305" },
        { subject: "Физика", type: "Прак", time: "10:05 — 11:30", room: "218" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "Информ. час", type: "Обяз", time: "13:15 — 14:15", room: "307" }
    ],
    "2026-05-01": [
        { subject: "Основы права", type: "Лек", time: "08:30 — 09:55", room: "221" },
        { subject: "Физическая культура", type: "Прак", time: "10:05 — 11:30", room: "с/з" }
    ],

    // НЕДЕЛЯ 2 (Изменения: Основы права Прак вместо Лек и т.д.)
    "2026-05-04": [
        { subject: "Инженерная графика", type: "Прак", time: "08:30 — 09:55", room: "307" },
        { subject: "Тестирование ПО", type: "Прак", time: "10:05 — 11:30", room: "206" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Математика", type: "Прак", time: "13:30 — 14:55", room: "219" },
        { subject: "Физическая культура", type: "Прак", time: "15:05 — 16:30", room: "с/з" }
    ],
    "2026-05-08": [
        { subject: "Физическая культура", type: "Прак", time: "10:05 — 11:30", room: "с/з" },
        { subject: "Основы права", type: "Прак", time: "11:40 — 13:05", room: "312" }
    ]
};

let currentOffset = 0;

function getISODate(date) {
    let y = date.getFullYear();
    let m = String(date.getMonth() + 1).padStart(2, '0');
    let d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function renderCard(l) {
    let typeClass = "ind-prak"; // По умолчанию желтый
    if (l.type.includes("Лек")) typeClass = "ind-lek"; // Зеленый
    if (l.type.includes("Лаб")) typeClass = "ind-lab"; // Красный
    if (l.type.includes("Обяз")) typeClass = ""; // Без индикатора или серый

    return `
        <div class="lesson-card">
            <div class="indicator ${typeClass}"></div>
            <div class="card-content">
                <div class="card-top"><span>${l.time}</span><span class="room">${l.room}</span></div>
                <div class="subject">${l.subject}</div>
                <div class="type-tag">${l.type}</div>
            </div>
        </div>`;
}

function renderToday() {
    let now = new Date();
    // Если воскресенье — прыгаем на понедельник
    if (now.getDay() === 0) {
        now.setDate(now.getDate() + 1);
        document.getElementById('today-title').innerText = "Завтра (Пн)";
    } else {
        document.getElementById('today-title').innerText = "Сегодня";
    }
    
    const dateStr = getISODate(now);
    const list = document.getElementById('today-list');
    list.innerHTML = "";
    
    document.getElementById('today-date-info').innerText = now.toLocaleDateString('ru', {day:'numeric', month:'long'});

    const lessons = calendarData[dateStr] || [];
    if (lessons.length === 0) {
        list.innerHTML = "<p style='text-align:center; opacity:0.3; margin-top:50px;'>Пар нет или расписание не загружено</p>";
    } else {
        lessons.forEach(l => list.innerHTML += renderCard(l));
    }
}

function renderWeek() {
    let d = new Date();
    // Находим Пн выбранной недели
    d.setDate(d.getDate() - (d.getDay() === 0 ? 6 : d.getDay() - 1) + (currentOffset * 7));
    
    let start = new Date(d);
    let end = new Date(d); end.setDate(d.getDate() + 6);
    
    document.getElementById('week-range').innerText = `${start.getDate()} ${start.toLocaleString('ru', {month:'short'})} — ${end.getDate()} ${end.toLocaleString('ru', {month:'short'})}`;
    
    const list = document.getElementById('week-list');
    list.innerHTML = "";
    const daysNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    for (let i = 0; i < 6; i++) {
        let currentDay = new Date(start);
        currentDay.setDate(start.getDate() + i);
        const dateStr = getISODate(currentDay);
        const lessons = calendarData[dateStr] || [];

        if (lessons.length > 0) {
            list.innerHTML += `<div style="margin:15px 0 10px 5px; font-size:12px; opacity:0.5; font-weight:800; text-transform:uppercase;">${daysNames[i]} (${currentDay.getDate()} ${currentDay.toLocaleString('ru', {month:'short'})})</div>`;
            lessons.forEach(l => list.innerHTML += renderCard(l));
        }
    }
}

function switchTab(id, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
    if (id === 'tab-today') {
        currentOffset = 0; 
        renderToday();
    } else {
        renderWeek();
    }
}

function changeWeek(dir) {
    currentOffset += dir;
    renderWeek();
}

window.onload = () => { renderToday(); };