const defaultSchedule = [
    { day: "Понедельник", week: "both", subject: "Инженерная графика", time: "08:30-09:55", room: "307" },
    { day: "Понедельник", week: "both", subject: "Тестирование ПО", time: "10:05-11:30", room: "206" },
    { day: "Понедельник", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "315" },
    { day: "Понедельник", week: "both", subject: "Математика", time: "13:30-14:55", room: "219" },
    { day: "Вторник", week: "both", subject: "Иностранный язык", time: "08:30-09:55", room: "312" },
    { day: "Вторник", week: "num", subject: "Физика", time: "10:05-11:30", room: "213" },
    { day: "Вторник", week: "both", subject: "Математика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Вторник", week: "both", subject: "История бел. государственности", time: "13:30-14:55", room: "312" },
    { day: "Среда", week: "both", subject: "Тестирование ПО (лек)", time: "08:30-09:55", room: "315" },
    { day: "Среда", week: "both", subject: "Математика", time: "10:05-11:30", room: "218" },
    { day: "Среда", week: "both", subject: "Физ. основы измерений", time: "11:40-13:05", room: "305" },
    { day: "Среда", week: "den", subject: "Физ. воспитание", time: "13:30-14:55", room: "с/з" },
    { day: "Четверг", week: "both", subject: "Физ. основы измерений", time: "08:30-09:55", room: "305" },
    { day: "Четверг", week: "both", subject: "Физика", time: "10:05-11:30", room: "218" },
    { day: "Четверг", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Четверг", week: "both", subject: "Информ. час", time: "13:15-14:15", room: "307" },
    { day: "Пятница", week: "num", subject: "Основы права (лек)", time: "08:30-09:55", room: "221" },
    { day: "Пятница", week: "both", subject: "Физ. воспитание", time: "10:05-11:30", room: "с/з" },
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
    let displayDayIdx = now.getDay();

    // 1. Умный выходной (если воскресенье — показываем завтра)
    if (displayDayIdx === 0) displayDayIdx = 1;

    const todayName = days[displayDayIdx];
    const badge = document.getElementById('week-type-display');
    badge.innerText = currentWeekView === 'num' ? 'Числитель (нечетная)' : 'Знаменатель (четная)';
    badge.onclick = () => { currentWeekView = (currentWeekView === 'num' ? 'den' : 'num'); render(); };

    document.getElementById('current-day-name').innerText = (now.getDay() === 0) ? "Завтра: Пн" : todayName;

    // Вкладка СЕГОДНЯ
    const list = document.getElementById('today-list');
    list.innerHTML = "";
    const lessons = schedule.filter(s => s.day === todayName && (s.week === "both" || s.week === currentWeekView));

    lessons.forEach(l => {
        const timer = getTimerStatus(l.time);
        list.innerHTML += `<div class="card ${timer.active ? 'active-lesson' : ''}">
            <div class="lesson-time">🕒 ${l.time}</div>
            <div class="lesson-subject">${l.subject}</div>
            <div class="lesson-room">📍 ${l.room}</div>
            ${timer.html}
        </div>`;
    });

    // Вкладка НЕДЕЛЯ
    const weekList = document.getElementById('full-schedule');
    weekList.innerHTML = "";
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"].forEach(d => {
        const dayLessons = schedule.filter(s => s.day === d);
        if(dayLessons.length > 0) {
            weekList.innerHTML += `<h3 style="margin:20px 0 10px 5px; opacity:0.5; font-size:14px;">${d}</h3>`;
            dayLessons.forEach((l, idx) => {
                const isCorrectWeek = (l.week === "both" || l.week === currentWeekView);
                weekList.innerHTML += `<div class="card" style="opacity: ${isCorrectWeek ? 1 : 0.4}">
                    <div style="font-size:12px; margin-bottom:4px;">${l.week==='num'?'[Чис]':l.week==='den'?'[Знам]':''} ${l.time}</div>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <b>${l.subject}</b>
                        <span onclick="deleteLesson(${idx})" style="color:#f38ba8; font-size:20px;">×</span>
                    </div>
                </div>`;
            });
        }
    });
}

function getTimerStatus(timeString) {
    try {
        const now = new Date();
        const [startStr, endStr] = timeString.split('-');
        const [sH, sM] = startStr.trim().split(':');
        const [eH, eM] = endStr.trim().split(':');
        const s = new Date(); s.setHours(sH, sM, 0);
        const e = new Date(); e.setHours(eH, eM, 0);
        if (now >= s && now <= e) {
            const m = Math.floor((e - now) / 60000);
            return { active: true, html: `<div style="margin-top:10px; color:#f9e2af; font-size:12px; font-weight:bold;">⏳ Осталось ${m} мин.</div>` };
        }
    } catch(e) {}
    return { active: false, html: "" };
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

function deleteLesson(i) {
    if(confirm("Удалить пару?")) {
        schedule.splice(i, 1);
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

function resetToDefault() {
    if(confirm("Вернуть расписание со скриншотов?")) {
        schedule = defaultSchedule;
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
setInterval(render, 60000);
render();