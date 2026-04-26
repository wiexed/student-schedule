// Полная база данных со всех скриншотов
const calendarData = {
    // 27 апреля — 3 мая
    "2026-04-27": [
        { name: "Инженерная графика", type: "Прак", time: "08:30-11:30", room: "307" },
        { name: "Тестирование ПО", type: "Лаб", time: "08:30-11:30", room: "206" },
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "315" },
        { name: "Математика", type: "Прак", time: "13:30-14:55", room: "219" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-04-28": [
        { name: "Английский язык", type: "Прак", time: "08:30-11:30", room: "312" },
        { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" },
        { name: "История Беларуси", type: "Сем", time: "13:30-14:55", room: "312" }
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

    // 4 мая — 10 мая
    "2026-05-04": [{ name: "Физика", type: "Лек", time: "11:40-13:05", room: "219" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],
    "2026-05-05": [{ name: "Английский язык", type: "Прак", time: "08:30-11:30", room: "312" }, { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" }],
    "2026-05-06": [
        { name: "Химия", type: "Лек", time: "08:30-09:55", room: "315" },
        { name: "Химия", type: "Прак", time: "10:05-11:30", room: "315" },
        { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }
    ],
    "2026-05-07": [{ name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" }, { name: "Физ. основы измерений", type: "Лек", time: "10:05-11:30", room: "305" }, { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }],
    "2026-05-08": [{ name: "Физика", type: "Лаб", time: "08:30-13:05", room: "132" }, { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],

    // 11 мая — 17 мая
    "2026-05-11": [{ name: "Физика", type: "Лек", time: "11:40-13:05", room: "217" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],
    "2026-05-12": [{ name: "Английский язык", type: "Прак", time: "08:30-11:30", room: "312" }, { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" }],
    "2026-05-13": [{ name: "Химия", type: "Лек", time: "08:30-11:30", room: "315" }, { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }],
    "2026-05-14": [{ name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" }, { name: "Физ. основы измерений", type: "Лек", time: "10:05-11:30", room: "305" }, { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }],
    "2026-05-15": [{ name: "Физика", type: "Лаб", time: "08:30-13:05", room: "132" }, { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],

    // 18 мая — 24 мая
    "2026-05-18": [{ name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],
    "2026-05-20": [{ name: "Химия", type: "Лек", time: "08:30-11:30", room: "315" }, { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }],
    "2026-05-21": [{ name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" }, { name: "Физ. основы измерений", type: "Лек", time: "10:05-11:30", room: "305" }, { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }, { name: "Математика", type: "Лек", time: "13:30-14:55", room: "221" }],
    "2026-05-22": [{ name: "Физика", type: "Лаб", time: "08:30-13:05", room: "132" }, { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" }],

    // 25 мая — 31 мая
    "2026-05-25": [{ name: "Физика", type: "Лек", time: "11:40-13:05", room: "217" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],
    "2026-05-27": [{ name: "Химия", type: "Лек", time: "08:30-11:30", room: "315" }, { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }],
    "2026-05-28": [{ name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" }, { name: "Физ. основы измерений", type: "Лек", time: "10:05-11:30", room: "305" }, { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }],
    "2026-05-29": [{ name: "Физика", type: "Лаб", time: "08:30-13:05", room: "132" }, { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" }, { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }],

    // 1 июня — 7 июня
    "2026-06-03": [{ name: "Химия", type: "Лек", time: "08:30-11:30", room: "315" }, { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }],
    "2026-06-04": [{ name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" }, { name: "Физ. основы измерений", type: "Лек", time: "10:05-11:30", room: "305" }, { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }],
    "2026-06-05": [{ name: "Физика", type: "Лаб", time: "08:30-13:05", room: "132" }, { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" }],

    // 8 июня — 14 июня (пустая неделя)
    "2026-06-08": []
};

let currentView = 'today'; 
let navDate = new Date("2026-04-27"); // Дата для навигации по неделям

function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
}

function render() {
    const container = document.getElementById("scheduleDisplay");
    const rangeLabel = document.getElementById("weekRange");
    container.innerHTML = "";

    if (currentView === 'today') {
        rangeLabel.innerText = "Сегодня";
        const todayKey = new Date().toISOString().split('T')[0];
        renderDays(container, [todayKey]);
    } else {
        const monday = getMonday(navDate);
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        rangeLabel.innerText = `${monday.getDate()} ${monday.toLocaleString('ru',{month:'short'})} — ${sunday.getDate()} ${sunday.toLocaleString('ru',{month:'short'})}`;
        
        const weekDates = [];
        for(let i=0; i<7; i++) {
            let d = new Date(monday);
            d.setDate(monday.getDate() + i);
            weekDates.push(d.toISOString().split('T')[0]);
        }
        renderDays(container, weekDates);
    }
}

function renderDays(container, dates) {
    let hasLessons = false;
    dates.forEach(dateKey => {
        const lessons = calendarData[dateKey] || [];
        if (lessons.length > 0) {
            hasLessons = true;
            const d = new Date(dateKey);
            let html = `<div class="day-section">
                <div class="day-title">${d.toLocaleDateString('ru', {weekday:'long', day:'numeric', month:'long'})}</div>`;
            lessons.forEach(l => {
                html += `<div class="lesson-card">
                    <div class="time">${l.time}</div>
                    <div class="subject">${l.name}</div>
                    <div class="details">${l.type} <span class="room">Каб. ${l.room}</span></div>
                </div>`;
            });
            html += `</div>`;
            container.innerHTML += html;
        }
    });

    if (!hasLessons) {
        container.innerHTML = `<div class="no-lessons">Занятий не найдено</div>`;
    }
}

// Кнопки навигации
document.getElementById("showTodayBtn").onclick = () => {
    currentView = 'today';
    document.getElementById("showTodayBtn").classList.add('active');
    document.getElementById("showWeekBtn").classList.remove('active');
    render();
};

document.getElementById("showWeekBtn").onclick = () => {
    currentView = 'week';
    document.getElementById("showWeekBtn").classList.add('active');
    document.getElementById("showTodayBtn").classList.remove('active');
    render();
};

document.getElementById("nextWeek").onclick = () => {
    navDate.setDate(navDate.getDate() + 7);
    currentView = 'week';
    render();
};

document.getElementById("prevWeek").onclick = () => {
    navDate.setDate(navDate.getDate() - 7);
    currentView = 'week';
    render();
};

window.onload = render;