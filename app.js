const defaultSchedule = [
    // ПОНЕДЕЛЬНИК (Исправлен: Графика 1-я, Физра 5-я)
    { day: "Понедельник", week: "both", subject: "Инженерная графика", type: "Прак", time: "08:30 — 09:55", room: "307" },
    { day: "Понедельник", week: "both", subject: "Тестирование ПО", type: "Прак", time: "10:05 — 11:30", room: "206" },
    { day: "Понедельник", week: "both", subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "315" },
    { day: "Понедельник", week: "both", subject: "Математика", type: "Прак", time: "13:30 — 14:55", room: "219" },
    { day: "Понедельник", week: "both", subject: "Физра", type: "Прак", time: "15:05 — 16:30", room: "с/з" },

    // ВТОРНИК
    { day: "Вторник", week: "both", subject: "Иностранный язык", type: "Прак", time: "08:30 — 09:55", room: "312" },
    { day: "Вторник", week: "num", subject: "Физика", type: "Прак", time: "10:05 — 11:30", room: "213" },
    { day: "Вторник", week: "both", subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" },
    { day: "Вторник", week: "both", subject: "История бел. гос-ти", type: "Лек", time: "13:30 — 14:55", room: "312" },

    // СРЕДА
    { day: "Среда", week: "both", subject: "Тестирование ПО", type: "Лек", time: "08:30 — 09:55", room: "315" },
    { day: "Среда", week: "both", subject: "Математика", type: "Прак", time: "10:05 — 11:30", room: "218" },
    { day: "Среда", week: "both", subject: "Физ. основы измерений", type: "Прак", time: "11:40 — 13:05", room: "305" },
    { day: "Среда", week: "both", subject: "Физра", type: "Прак", time: "13:30 — 14:55", room: "с/з" }
];

let weekOffset = 0;

function getWeekData(offset) {
    const d = new Date();
    d.setDate(d.getDate() - (d.getDay() - 1) + (offset * 7)); // Начало недели (Пн)
    const end = new Date(d);
    end.setDate(d.getDate() + 6); // Конец недели (Вс)
    
    const options = { day: 'numeric', month: 'short' };
    const range = `${d.toLocaleDateString('ru', options)} — ${end.toLocaleDateString('ru', options)}`;
    
    // Тип недели
    const startOfYear = new Date(d.getFullYear(), 0, 1);
    const weekNum = Math.ceil((((d - startOfYear) / 86400000) + startOfYear.getDay() + 1) / 7);
    const type = (weekNum % 2 === 0) ? "Знаменатель (четная)" : "Числитель (нечетная)";
    
    return { range, type, weekType: (weekNum % 2 === 0 ? "den" : "num") };
}

function renderLessonCard(l) {
    let typeClass = "type-other";
    if (l.type.includes("Лек")) typeClass = "type-lek";
    if (l.type.includes("Прак")) typeClass = "type-prak";
    if (l.type.includes("Лаб")) typeClass = "type-lab";

    return `
        <div class="card">
            <div class="type-indicator ${typeClass}"></div>
            <div class="card-content">
                <div class="lesson-top">
                    <span class="time-text">${l.time}</span>
                    <span class="room-text">${l.room}</span>
                </div>
                <div class="subject-text">${l.subject}</div>
                <div class="type-label">${l.type}</div>
            </div>
        </div>`;
}

function renderWeek() {
    const data = getWeekData(weekOffset);
    document.getElementById('week-range').innerText = data.range;
    document.getElementById('week-type-name').innerText = data.type;

    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
    const container = document.getElementById('week-schedule-container');
    container.innerHTML = "";

    days.forEach(d => {
        const lessons = defaultSchedule.filter(s => s.day === d && (s.week === "both" || s.week === data.weekType));
        if (lessons.length > 0) {
            container.innerHTML += `<div style="margin: 15px 5px 10px; font-size: 13px; color: #8e8e93; font-weight: 600;">${d.toUpperCase()}</div>`;
            lessons.forEach(l => container.innerHTML += renderLessonCard(l));
        }
    });
}

function changeWeek(dir) {
    weekOffset += dir;
    renderWeek();
}

// При старте
window.onload = () => { renderWeek(); };