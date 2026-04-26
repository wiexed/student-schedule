const defaultSchedule = [
    { day: "Понедельник", week: "both", subject: "Инженерная графика", time: "08:30-09:55", room: "307" },
    { day: "Понедельник", week: "both", subject: "Тестирование ПО", time: "10:05-11:30", room: "206" },
    { day: "Понедельник", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "315" },
    { day: "Понедельник", week: "both", subject: "Математика", time: "13:30-14:55", room: "219" },
    { day: "Вторник", week: "both", subject: "Иностранный язык", time: "08:30-09:55", room: "312" },
    { day: "Вторник", week: "num", subject: "Физика", time: "10:05-11:30", room: "213" },
    { day: "Вторник", week: "both", subject: "Математика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Вторник", week: "both", subject: "История бел. гос-ти", time: "13:30-14:55", room: "312" },
    { day: "Среда", week: "both", subject: "Тестирование ПО (лек)", time: "08:30-09:55", room: "315" },
    { day: "Среда", week: "both", subject: "Математика", time: "10:05-11:30", room: "218" },
    { day: "Среда", week: "both", subject: "Физ. основы измерений", time: "11:40-13:05", room: "305" },
    { day: "Среда", week: "both", subject: "Физ. культура (Тыбулевич)", time: "13:30-14:55", room: "с/з" },
    { day: "Четверг", week: "both", subject: "Физ. основы измерений", time: "08:30-09:55", room: "305" },
    { day: "Четверг", week: "both", subject: "Физика", time: "10:05-11:30", room: "218" },
    { day: "Четверг", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Четверг", week: "both", subject: "Информ. час", time: "13:15-14:15", room: "307" },
    { day: "Пятница", week: "num", subject: "Основы права (лек)", time: "08:30-09:55", room: "221" },
    { day: "Пятница", week: "both", subject: "Физ. культура (Тыбулевич)", time: "10:05-11:30", room: "с/з" },
    { day: "Пятница", week: "den", subject: "Основы права", time: "11:40-13:05", room: "312" }
];

let schedule = JSON.parse(localStorage.getItem("schedule")) || defaultSchedule;

function getWeekType() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = Math.floor((now - start) / 86400000);
    const weekNum = Math.ceil((diff + start.getDay() + 1) / 7);
    return (weekNum % 2 === 0) ? "den" : "num";
}

let currentWeekView = getWeekType();

function switchTab(tabId, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    el.classList.add('active');
    render();
}

function render() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const now = new Date();
    let displayIdx = now.getDay();
    if (displayIdx === 0) displayIdx = 1;

    const todayName = days[displayIdx];
    
    // Переключатель недели
    const weekBtn = document.getElementById('week-selector');
    const weekText = document.getElementById('week-type-display');
    if(weekText) {
        weekText.innerText = currentWeekView === 'num' ? '👆 Числитель' : '👆 Знаменатель';
        weekBtn.onclick = () => { currentWeekView = (currentWeekView === 'num' ? 'den' : 'num'); render(); };
    }

    document.getElementById('current-day-name').innerText = (now.getDay() === 0) ? "Завтра: Понедельник" : todayName;

    // Вкладка СЕГОДНЯ
    const todayList = document.getElementById('today-list');
    todayList.innerHTML = "";
    const lessonsToday = schedule.filter(s => s.day === todayName && (s.week === "both" || s.week === currentWeekView));
    
    lessonsToday.forEach(l => {
        todayList.innerHTML += `<div class="card">
            <div style="color:var(--accent); font-weight:700; font-size:14px;">🕒 ${l.time}</div>
            <div style="font-size:18px; font-weight:600; margin:5px 0;">${l.subject}</div>
            <div style="opacity:0.6; font-size:14px;">📍 ${l.room}</div>
        </div>`;
    });

    // Вкладка НЕДЕЛЯ (Фильтруем, чтобы не было лишних пар)
    const weekList = document.getElementById('full-schedule');
    weekList.innerHTML = "";
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"].forEach(d => {
        const dayLessons = schedule.filter(s => s.day === d && (s.week === "both" || s.week === currentWeekView));
        if(dayLessons.length > 0) {
            weekList.innerHTML += `<h3 style="margin:20px 0 10px 5px; opacity:0.5; font-size:14px;">${d}</h3>`;
            dayLessons.forEach((l, idx) => {
                weekList.innerHTML += `<div class="card">
                    <div style="font-size:12px; color:var(--accent);">${l.time}</div>
                    <b>${l.subject}</b><br>
                    <small style="opacity:0.5">каб. ${l.room}</small>
                </div>`;
            });
        }
    });
}

function addLesson() {
    const l = {
        subject: document.getElementById('subject').value,
        day: document.getElementById('day').value,
        week: document.getElementById('week-type').value,
        time: document.getElementById('time').value,
        room: document.getElementById('room').value
    };
    if(!l.subject || !l.time) return alert("Заполни поля");
    schedule.push(l);
    localStorage.setItem("schedule", JSON.stringify(schedule));
    render();
}

function resetToDefault() {
    if(confirm("Сбросить расписание?")) {
        schedule = defaultSchedule;
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
render();