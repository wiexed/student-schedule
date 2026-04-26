const calendarData = {
    // НЕДЕЛЯ С 27.04 (Знаменатель)
    "2026-04-27": [
        { subject: "Тестирование ПО (3.1)", type: "Лаб", time: "08:30 — 09:55", room: "206" },
        { subject: "Тестирование ПО (3.1)", type: "Лаб", time: "10:05 — 11:30", room: "206" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Математика", type: "Прак", time: "13:30 — 14:55", room: "219" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "СК/Зал" }
    ],
    "2026-04-28": [
        { subject: "Иностранный язык (англ)", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Иностранный язык (англ)", type: "Прак", time: "10:05 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "История ГП", type: "Сем", time: "13:30 — 14:55", room: "312" }
    ],
    "2026-04-29": [
        { subject: "Тестирование ПО", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Математика", type: "Прак", time: "10:05 — 11:30", room: "218" },
        { subject: "Физ. основы измерений", type: "Лек", time: "11:40 — 13:05", room: "305" },
        { subject: "Тестирование ПО", type: "Прак", time: "13:30 — 14:55", room: "206" }
        // Физкультура удалена по просьбе пользователя
    ],
    "2026-04-30": [
        { subject: "Физ. основы измерений", type: "Прак", time: "08:30 — 09:55", room: "305" },
        { subject: "Физика", type: "Прак", time: "10:05 — 11:30", room: "218" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],

    // НЕДЕЛЯ С 04.05 (Числитель)
    "2026-05-04": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "219" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "СК/Зал" }
    ],
    "2026-05-05": [
        { subject: "Иностранный язык (англ)", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Иностранный язык (англ)", type: "Прак", time: "10:05 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-06": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "13:30 — 14:55", room: "315" }
        // Физкультура удалена
    ],
    "2026-05-07": [
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-08": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 09:55", room: "132" },
        { subject: "Физика (3.1)", type: "Лаб", time: "10:05 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 11.05 (Числитель)
    "2026-05-11": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "217" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "СК/Зал" }
    ],
    "2026-05-12": [
        { subject: "Иностранный язык (англ)", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Иностранный язык (англ)", type: "Прак", time: "10:05 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-13": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "13:30 — 14:55", room: "315" }
        // Физкультура удалена
    ],
    "2026-05-14": [
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-15": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 09:55", room: "132" },
        { subject: "Физика (3.1)", type: "Лаб", time: "10:05 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 18.05 (Знаменатель)
    "2026-05-18": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "СК/Зал" }
    ],
    "2026-05-19": [
        { subject: "Иностранный язык (англ)", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Иностранный язык (англ)", type: "Прак", time: "10:05 — 11:30", room: "312" }
    ],
    "2026-05-20": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "13:30 — 14:55", room: "315" }
        // Физкультура удалена
    ],
    "2026-05-21": [
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "Математика", type: "Лек", time: "13:30 — 14:55", room: "221" }
    ],
    "2026-05-22": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 09:55", room: "132" },
        { subject: "Физика (3.1)", type: "Лаб", time: "10:05 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 25.05 (Числитель)
    "2026-05-25": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "217" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "СК/Зал" }
    ],
    "2026-05-26": [
        { subject: "Иностранный язык (англ)", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Иностранный язык (англ)", type: "Прак", time: "10:05 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-27": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "13:30 — 14:55", room: "315" }
        // Физкультура удалена
    ],
    "2026-05-28": [
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-29": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 09:55", room: "132" },
        { subject: "Физика (3.1)", type: "Лаб", time: "10:05 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физическая культура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 01.06 (Числитель)
    "2026-06-02": [
        { subject: "Иностранный язык (англ)", type: "Прак", time: "08:30 — 09:55", room: "312" },
        { subject: "Иностранный язык (англ)", type: "Прак", time: "10:05 — 11:30", room: "312" }
    ],
    "2026-06-03": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "13:30 — 14:55", room: "315" }
        // Физкультура отсутствует в исходном расписании
    ],
    "2026-06-04": [
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-06-05": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 09:55", room: "132" },
        { subject: "Физика (3.1)", type: "Лаб", time: "10:05 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" }
    ],

    // НЕДЕЛЯ С 08.06 (Пустая)
    "2026-06-08": [], "2026-06-09": [], "2026-06-10": [],
    "2026-06-11": [], "2026-06-12": [], "2026-06-13": []
};

let currentOffset = 0;

function getISODate(date) {
    let y = date.getFullYear();
    let m = String(date.getMonth() + 1).padStart(2, '0');
    let d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function renderCard(l) {
    let typeClass = "ind-prak"; 
    if (l.type.includes("Лек")) typeClass = "ind-lek"; 
    if (l.type.includes("Лаб")) typeClass = "ind-lab"; 
    if (l.type.includes("Обяз")) typeClass = ""; 

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
        list.innerHTML = "<p style='text-align:center; opacity:0.3; margin-top:50px;'>Пар нет</p>";
    } else {
        lessons.forEach(l => list.innerHTML += renderCard(l));
    }
}

function renderWeek() {
    let d = new Date();
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
    if (id === 'tab-today') { currentOffset = 0; renderToday(); } else { renderWeek(); }
}

function changeWeek(dir) { currentOffset += dir; renderWeek(); }

window.onload = () => { renderToday(); };