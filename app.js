// База данных со всех твоих скриншотов
const defaultSchedule = [
    // ПОНЕДЕЛЬНИК
    { day: "Понедельник", week: "both", subject: "Инженерная графика", time: "08:30-09:55", room: "307" },
    { day: "Понедельник", week: "both", subject: "Тестирование ПО", time: "10:05-11:30", room: "206" },
    { day: "Понедельник", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "315" },
    { day: "Понедельник", week: "both", subject: "Математика", time: "13:30-14:55", room: "219" },
    
    // ВТОРНИК
    { day: "Вторник", week: "both", subject: "Иностранный язык", time: "08:30-09:55", room: "312" },
    { day: "Вторник", week: "num", subject: "Физика", time: "10:05-11:30", room: "213" }, // числитель
    { day: "Вторник", week: "both", subject: "Математика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Вторник", week: "both", subject: "История бел. государственности", time: "13:30-14:55", room: "312" },
    
    // СРЕДА
    { day: "Среда", week: "both", subject: "Тестирование ПО (лек)", time: "08:30-09:55", room: "315" },
    { day: "Среда", week: "both", subject: "Математика", time: "10:05-11:30", room: "218" },
    { day: "Среда", week: "both", subject: "Физ. основы измерений", time: "11:40-13:05", room: "305" },
    { day: "Среда", week: "den", subject: "Физ. воспитание", time: "13:30-14:55", room: "с/з" }, // знаменатель
    
    // ЧЕТВЕРГ
    { day: "Четверг", week: "both", subject: "Физ. основы измерений", time: "08:30-09:55", room: "305" },
    { day: "Четверг", week: "both", subject: "Физика", time: "10:05-11:30", room: "218" },
    { day: "Четверг", week: "both", subject: "Физика (лек)", time: "11:40-13:05", room: "221" },
    { day: "Четверг", week: "both", subject: "Информ. час", time: "13:15-14:15", room: "307" },
    
    // ПЯТНИЦА
    { day: "Пятница", week: "num", subject: "Основы права (лек)", time: "08:30-09:55", room: "221" },
    { day: "Пятница", week: "both", subject: "Физ. воспитание", time: "10:05-11:30", room: "с/з" },
    { day: "Пятница", week: "den", subject: "Основы права", time: "11:40-13:05", room: "312" }
];

let schedule = JSON.parse(localStorage.getItem("schedule")) || defaultSchedule;
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// Функция определения типа недели (Числитель/Знаменатель)
function getWeekType() {
    const now = new Date();
    const oneJan = new Date(now.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((now - oneJan) / (24 * 60 * 60 * 1000));
    const weekNum = Math.ceil((numberOfDays + oneJan.getDay() + 1) / 7);
    return (weekNum % 2 === 0) ? "den" : "num"; // Четная - знаменатель, нечетная - числитель
}

let currentWeekView = getWeekType();

function render() {
    const now = new Date();
    const todayName = days[now.getDay()];
    const todayDiv = document.getElementById("today");
    const scheduleDiv = document.getElementById("schedule");

    // Выводим заголовок текущей недели
    const weekText = currentWeekView === "num" ? "Числитель (нечет)" : "Знаменатель (чет)";
    todayDiv.innerHTML = `<p style="color:#74c7ec; font-size:14px; margin-bottom:10px;">Сейчас: ${weekText}</p>`;

    // Фильтруем пары для "Сегодня" с учетом недели
    const todayLessons = schedule.filter(s => s.day === todayName && (s.week === "both" || s.week === currentWeekView));
    
    if (todayLessons.length === 0) {
        todayDiv.innerHTML += "<p style='opacity:0.5'>Пар нет 🥳</p>";
    } else {
        todayLessons.forEach((lesson) => {
            const timer = getTimerStatus(lesson.time);
            todayDiv.innerHTML += `
                <div class="card ${timer.active ? 'active-lesson' : ''}">
                    <b>${lesson.subject}</b><br>
                    ${lesson.time} | ауд. ${lesson.room}
                    ${timer.html}
                </div>`;
        });
    }

    // Вся неделя
    scheduleDiv.innerHTML = "";
    schedule.forEach((lesson, index) => {
        const typeLabel = lesson.week === "num" ? " (Чис.)" : (lesson.week === "den" ? " (Знам.)" : "");
        scheduleDiv.innerHTML += `
            <div class="card">
                <b>${lesson.day}${typeLabel} — ${lesson.subject}</b><br>
                ${lesson.time} | ауд. ${lesson.room}
                <button class="delete-btn" onclick="deleteLesson(${index})">✕</button>
            </div>`;
    });
}

// ... (функции addLesson, deleteLesson, toggleForm, getTimerStatus оставляем такими же) ...

// Добавляем в конец app.js возможность переключения недели кликом на заголовок "Сегодня"
document.getElementById("today-section").onclick = () => {
    currentWeekView = (currentWeekView === "num" ? "den" : "num");
    render();
};

if ('serviceWorker' in navigator) { navigator.serviceWorker.register('./sw.js'); }
render();