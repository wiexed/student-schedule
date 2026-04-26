const defaultSchedule = [
    { day: "Понедельник", week: "both", subject: "Физра", time: "08:30-09:55", room: "с/з" }, // Добавил Пн
    { day: "Понедельник", week: "both", subject: "Инженерная графика", time: "10:05-11:30", room: "307" },
    { day: "Понедельник", week: "both", subject: "Тестирование ПО", time: "11:40-13:05", room: "206" },
    { day: "Понедельник", week: "both", subject: "Физика (лек)", time: "13:30-14:55", room: "315" },
    
    { day: "Вторник", week: "both", subject: "Иностранный язык", time: "08:30-09:55", room: "312" },
    { day: "Вторник", week: "num", subject: "Физика", time: "10:05-11:30", room: "213" },
    { day: "Вторник", week: "both", subject: "Математика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Вторник", week: "both", subject: "История бел. гос-ти", time: "13:30-14:55", room: "312" },
    
    { day: "Среда", week: "both", subject: "Тестирование ПО (лек)", time: "08:30-09:55", room: "315" },
    { day: "Среда", week: "both", subject: "Математика", time: "10:05-11:30", room: "218" },
    { day: "Среда", week: "both", subject: "Физ. основы измерений", time: "11:40-13:05", room: "305" },
    { day: "Среда", week: "both", subject: "Физра", time: "13:30-14:55", room: "с/з" },
    
    { day: "Четверг", week: "both", subject: "Физ. основы измерений", time: "08:30-09:55", room: "305" },
    { day: "Четверг", week: "both", subject: "Физика", time: "10:05-11:30", room: "218" },
    { day: "Четверг", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Четверг", week: "both", subject: "Информ. час", time: "13:15-14:15", room: "307" },
    
    { day: "Пятница", week: "num", subject: "Основы права (лек)", time: "08:30-09:55", room: "221" },
    { day: "Пятница", week: "both", subject: "Физра", time: "10:05-11:30", room: "с/з" },
    { day: "Пятница", week: "den", subject: "Основы права", time: "11:40-13:05", room: "312" }
];

let schedule = JSON.parse(localStorage.getItem("schedule")) || defaultSchedule;
let selectedDate = new Date();

// Определение недели по любой дате
function getWeekType(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = Math.floor((date - start) / 86400000);
    const weekNum = Math.ceil((diff + start.getDay() + 1) / 7);
    return (weekNum % 2 === 0) ? "den" : "num";
}

function renderDatePicker() {
    const picker = document.getElementById('date-picker');
    picker.innerHTML = "";
    const daysArr = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    
    // Создаем ленту на 14 дней (неделя назад, неделя вперед)
    for (let i = -7; i < 21; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        const active = d.toDateString() === selectedDate.toDateString();
        
        const item = document.createElement('div');
        item.className = `date-item ${active ? 'active' : ''}`;
        item.innerHTML = `<span>${daysArr[d.getDay()]}</span><span>${d.getDate()}</span>`;
        item.onclick = () => { selectedDate = d; render(); };
        picker.appendChild(item);
        if(active) item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
    
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    document.getElementById('month-name').innerText = months[selectedDate.getMonth()];
}

function render() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const weekType = getWeekType(selectedDate);
    const dayName = days[selectedDate.getDay()];

    renderDatePicker();

    const list = document.getElementById('today-list');
    list.innerHTML = "";
    
    const lessons = schedule.filter(s => s.day === dayName && (s.week === "both" || s.week === weekType));

    if (lessons.length === 0) {
        list.innerHTML = "<p style='text-align:center; opacity:0.4; margin-top:40px;'>Пар нет 🙌</p>";
    } else {
        lessons.forEach(l => {
            list.innerHTML += `<div class="card">
                <div style="color:var(--accent); font-weight:700; font-size:13px;">🕒 ${l.time}</div>
                <div style="font-size:18px; font-weight:600; margin:4px 0;">${l.subject}</div>
                <div style="opacity:0.6; font-size:13px;">📍 Кабинет ${l.room}</div>
            </div>`;
        });
    }

    // Вкладка неделя (только текущий тип недели)
    const weekList = document.getElementById('full-schedule');
    weekList.innerHTML = "";
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"].forEach(d => {
        const dayLessons = schedule.filter(s => s.day === d && (s.week === "both" || s.week === weekType));
        if(dayLessons.length > 0) {
            weekList.innerHTML += `<h3 style="margin:20px 0 10px 20px; opacity:0.5; font-size:14px;">${d}</h3>`;
            dayLessons.forEach(l => {
                weekList.innerHTML += `<div class="card" style="margin: 0 20px 10px 20px;">
                    <b>${l.subject}</b><br><small>${l.time} | ${l.room}</small>
                </div>`;
            });
        }
    });
}

function switchTab(tabId, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    el.classList.add('active');
}

function addLesson() {
    const l = {
        subject: document.getElementById('subject').value,
        day: document.getElementById('day').value,
        week: document.getElementById('week-type').value,
        time: document.getElementById('time').value,
        room: document.getElementById('room').value
    };
    schedule.push(l);
    localStorage.setItem("schedule", JSON.stringify(schedule));
    render();
}

function resetToDefault() {
    if(confirm("Вернуть стандартное расписание?")) {
        schedule = defaultSchedule;
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

render();