// Полная база данных на основе твоих скриншотов
const calendarData = {
    // АПРЕЛЬ - МАЙ (Неделя с 27.04 по 03.05)
    "2026-04-27": [
        { name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" },
        { name: "Тестирование ПО", type: "Лаб", time: "10:05-11:30", room: "206" },
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "315" },
        { name: "Математика", type: "Прак", time: "13:30-14:55", room: "219" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-04-28": [
        { name: "Иностранный язык", type: "Прак", time: "08:30-11:30", room: "312" },
        { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" },
        { name: "История ГП", type: "Сем", time: "13:30-14:55", room: "312" }
    ],
    "2026-04-29": [
        { name: "Тестирование ПО", type: "Лек", time: "08:30-09:55", room: "315" },
        { name: "Математика", type: "Прак", time: "10:05-11:30", room: "218" },
        { name: "Физ. основы измерений", type: "Лек", time: "11:40-13:05", room: "305" },
        { name: "Тестирование ПО", type: "Прак", time: "13:30-14:55", room: "206" }
    ],
    "2026-04-30": [
        { name: "Физ. основы измерений", type: "Прак", time: "08:30-09:55", room: "305" },
        { name: "Физика", type: "Прак", time: "10:05-11:30", room: "218" },
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }
    ],
    // МАЙ (Неделя с 04.05 по 10.05)
    "2026-05-04": [
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "219" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-05-05": [
        { name: "Иностранный язык", type: "Прак", time: "08:30-11:30", room: "312" },
        { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" }
    ],
    "2026-05-06": [
        { name: "Химия", type: "Лек", time: "08:30-09:55", room: "315" },
        { name: "Химия", type: "Прак", time: "10:05-11:30", room: "315" },
        { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }
    ],
    "2026-05-07": [
        { name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" },
        { name: "Физ. основы измерений", type: "Лек", time: "10:05-11:30", room: "305" },
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }
    ],
    // МАЙ (Неделя с 11.05 по 17.05)
    "2026-05-11": [
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "217" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-05-12": [
        { name: "Иностранный язык", type: "Прак", time: "08:30-11:30", room: "312" },
        { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" }
    ],
    "2026-05-15": [
        { name: "Физика", type: "Лаб", time: "08:30-13:05", room: "132" },
        { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" }
    ],
    // МАЙ (Неделя с 25.05 по 31.05)
    "2026-05-25": [
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "217" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-05-27": [
        { name: "Химия", type: "Лек", time: "08:30-09:55", room: "315" },
        { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }
    ],
    // ИЮНЬ (Неделя с 01.06 по 07.06)
    "2026-06-03": [
        { name: "Химия", type: "Лек", time: "08:30-11:30", room: "315" },
        { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }
    ]
};

let currentView = 'today'; // 'today' или 'week'
let displayedDate = new Date(); // Текущая дата для навигации

function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function render() {
    const container = document.getElementById("scheduleDisplay");
    container.innerHTML = "";
    
    if (currentView === 'today') {
        renderToday(container);
    } else {
        renderWeek(container);
    }
}

function renderToday(container) {
    const key = formatDate(new Date());
    const lessons = calendarData[key] || [];
    
    document.getElementById("weekRange").innerText = "Сегодня";
    
    let section = document.createElement("div");
    section.className = "day-section";
    section.innerHTML = `<div class="day-title">Расписание на ${new Date().toLocaleDateString('ru', {day:'numeric', month:'long'})}</div>`;

    if (lessons.length === 0) {
        section.innerHTML += `<div class="lesson-card">Пар нет, можно отдыхать!</div>`;
    } else {
        lessons.forEach(l => {
            section.innerHTML += `
                <div class="lesson-card">
                    <div class="time">${l.time}</div>
                    <div class="subject">${l.name}</div>
                    <div class="details">${l.type} <span class="room">Каб. ${l.room}</span></div>
                </div>`;
        });
    }
    container.appendChild(section);
}

function renderWeek(container) {
    const startOfWeek = getMonday(displayedDate);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    document.getElementById("weekRange").innerText = 
        `${startOfWeek.getDate()} ${startOfWeek.toLocaleString('ru', {month:'short'})} — ${endOfWeek.getDate()} ${endOfWeek.toLocaleString('ru', {month:'short'})}`;

    for (let i = 0; i < 6; i++) {
        let d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        let key = formatDate(d);
        let lessons = calendarData[key] || [];

        if (lessons.length > 0) {
            let section = document.createElement("div");
            section.className = "day-section";
            section.innerHTML = `<div class="day-title">${d.toLocaleDateString('ru', {weekday: 'long', day: 'numeric', month: 'short'})}</div>`;

            lessons.forEach(l => {
                section.innerHTML += `
                    <div class="lesson-card">
                        <div class="time">${l.time}</div>
                        <div class="subject">${l.name}</div>
                        <div class="details">${l.type} <span class="room">Каб. ${l.room}</span></div>
                    </div>`;
            });
            container.appendChild(section);
        }
    }
}

// Навигация
document.getElementById("showWeekBtn").onclick = () => {
    currentView = 'week';
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById("showWeekBtn").classList.add('active');
    render();
};

document.getElementById("showTodayBtn").onclick = () => {
    currentView = 'today';
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById("showTodayBtn").classList.add('active');
    render();
};

document.getElementById("nextWeek").onclick = () => {
    displayedDate.setDate(displayedDate.getDate() + 7);
    currentView = 'week'; 
    render();
};

document.getElementById("prevWeek").onclick = () => {
    displayedDate.setDate(displayedDate.getDate() - 7);
    currentView = 'week';
    render();
};

window.onload = render;