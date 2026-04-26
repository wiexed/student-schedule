const schedule = [
    // ПОНЕДЕЛЬНИК
    { day: 1, week: "both", subject: "Инженерная графика", type: "Прак", time: "08:30 — 09:55", room: "307" },
    { day: 1, week: "both", subject: "Тестирование ПО", type: "Прак", time: "10:05 — 11:30", room: "206" },
    { day: 1, week: "both", subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "315" },
    { day: 1, week: "both", subject: "Математика", type: "Прак", time: "13:30 — 14:55", room: "219" },
    { day: 1, week: "both", subject: "Физра", type: "Прак", time: "15:05 — 16:30", room: "с/з" },
    
    // ВТОРНИК
    { day: 2, week: "both", subject: "Иностранный язык", type: "Прак", time: "08:30 — 09:55", room: "312" },
    { day: 2, week: "num", subject: "Физика", type: "Прак", time: "10:05 — 11:30", room: "213" },
    { day: 2, week: "both", subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" },
    { day: 2, week: "both", subject: "История бел. гос-ти", type: "Лек", time: "13:30 — 14:55", room: "312" },

    // СРЕДА
    { day: 3, week: "both", subject: "Тестирование ПО", type: "Лек", time: "08:30 — 09:55", room: "315" },
    { day: 3, week: "both", subject: "Математика", type: "Прак", time: "10:05 — 11:30", room: "218" },
    { day: 3, week: "both", subject: "Физ. основы измерений", type: "Прак", time: "11:40 — 13:05", room: "305" },
    { day: 3, week: "both", subject: "Физра", type: "Прак", time: "13:30 — 14:55", room: "с/з" }
];

let weekOffset = 0;

function getWeekInfo(offset) {
    let d = new Date();
    d.setDate(d.getDate() - (d.getDay() === 0 ? 6 : d.getDay() - 1) + (offset * 7));
    let start = new Date(d);
    let end = new Date(d); end.setDate(d.getDate() + 6);
    
    const weekNum = Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 86400000) + 1) / 7);
    return {
        range: `${start.getDate()} ${start.toLocaleString('ru', {month:'short'})} — ${end.getDate()} ${end.toLocaleString('ru', {month:'short'})}`,
        type: weekNum % 2 === 0 ? "den" : "num",
        label: weekNum % 2 === 0 ? "Знаменатель" : "Числитель"
    };
}

function renderCard(l) {
    const typeClass = l.type === "Лек" ? "ind-lek" : (l.type === "Лаб" ? "ind-lab" : "ind-prak");
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
    let day = now.getDay();
    if (day === 0) { day = 1; weekOffset = 1; document.getElementById('today-title').innerText = "Завтра (Пн)"; }
    else { document.getElementById('today-title').innerText = "Сегодня"; }
    
    const info = getWeekInfo(weekOffset);
    const list = document.getElementById('today-list');
    list.innerHTML = "";
    
    const todayLessons = schedule.filter(s => s.day === day && (s.week === "both" || s.week === info.type));
    todayLessons.forEach(l => list.innerHTML += renderCard(l));
    document.getElementById('today-date-info').innerText = `${info.label}, ${now.toLocaleDateString('ru', {day:'numeric', month:'long'})}`;
}

function renderWeek() {
    const info = getWeekInfo(weekOffset);
    document.getElementById('week-range').innerText = info.range;
    document.getElementById('week-type-label').innerText = info.label;
    
    const list = document.getElementById('week-list');
    list.innerHTML = "";
    const days = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
    
    for (let i = 1; i <= 5; i++) {
        const dayLessons = schedule.filter(s => s.day === i && (s.week === "both" || s.week === info.type));
        if (dayLessons.length > 0) {
            list.innerHTML += `<div style="margin:15px 0 10px 5px; font-size:12px; opacity:0.5; font-weight:600;">${days[i].toUpperCase()}</div>`;
            dayLessons.forEach(l => list.innerHTML += renderCard(l));
        }
    }
}

function switchTab(id, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
    if (id === 'tab-today') renderToday(); else renderWeek();
}

function changeWeek(dir) { weekOffset += dir; renderWeek(); }

window.onload = () => { renderToday(); };