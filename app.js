const calendarData = {
    // НЕДЕЛЯ С 27.04 ПО 03.05 (Знаменатель)
    "2026-04-27": [
        { subject: "Тестирование ПО (3.1)", type: "Лаб", time: "08:30 — 11:30", room: "206" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "315" },
        { subject: "Математика", type: "Прак", time: "13:30 — 14:55", room: "219" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],
    "2026-04-28": [
        { subject: "Английский язык", type: "Прак", time: "08:30 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "История ГП", type: "Сем", time: "13:30 — 14:55", room: "312" }
    ],
    "2026-04-29": [
        { subject: "Тестирование ПО", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Математика", type: "Прак", time: "10:05 — 11:30", room: "218" },
        { subject: "Физ. основы измерений", type: "Лек", time: "11:40 — 13:05", room: "305" },
        { subject: "Тестирование ПО", type: "Прак", time: "13:30 — 14:55", room: "206" }
    ],
    "2026-04-30": [
        { subject: "Физ. основы измерений", type: "Прак", time: "08:30 — 09:55", room: "305" },
        { subject: "Физика", type: "Прак", time: "10:05 — 11:30", room: "218" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],

    // НЕДЕЛЯ С 04.05 ПО 10.05 (Числитель)
    "2026-05-04": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "219" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],
    "2026-05-05": [
        { subject: "Английский язык", type: "Прак", time: "08:30 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-06": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 14:55", room: "315" }
    ],
    "2026-05-07": [
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-08": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Физика (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 11.05 ПО 17.05 (Числитель)
    "2026-05-11": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "217" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],
    "2026-05-12": [
        { subject: "Английский язык", type: "Прак", time: "08:30 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-13": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 14:55", room: "315" }
    ],
    "2026-05-14": [
        { subject: "Инженерная графика (3.2)", type: "Прак", time: "08:30 — 09:55", room: "307" },
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-15": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 18.05 ПО 24.05 (Знаменатель)
    "2026-05-18": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],
    "2026-05-19": [
        { subject: "Английский язык", type: "Прак", time: "08:30 — 11:30", room: "312" }
    ],
    "2026-05-20": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 14:55", room: "315" }
    ],
    "2026-05-21": [
        { subject: "Инженерная графика (3.2)", type: "Прак", time: "08:30 — 09:55", room: "307" },
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" },
        { subject: "Математика", type: "Лек", time: "13:30 — 14:55", room: "221" }
    ],
    "2026-05-22": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Физика (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" }
    ],

    // НЕДЕЛЯ С 25.05 ПО 31.05 (Числитель)
    "2026-05-25": [
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "217" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],
    "2026-05-26": [
        { subject: "Английский язык", type: "Прак", time: "08:30 — 11:30", room: "312" },
        { subject: "Математика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-27": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 14:55", room: "315" }
    ],
    "2026-05-28": [
        { subject: "Инженерная графика (3.2)", type: "Прак", time: "08:30 — 09:55", room: "307" },
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-05-29": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "601" },
        { subject: "Физика (3.1)", type: "Лаб", time: "13:30 — 14:55", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "15:05 — 16:30", room: "601" },
        { subject: "Физкультура", type: "Прак", time: "16:40 — 18:05", room: "Зал" }
    ],

    // НЕДЕЛЯ С 01.06 ПО 07.06 (Числитель)
    "2026-06-02": [
        { subject: "Английский язык", type: "Прак", time: "08:30 — 11:30", room: "312" }
    ],
    "2026-06-03": [
        { subject: "Химия", type: "Лек", time: "08:30 — 09:55", room: "315" },
        { subject: "Химия", type: "Прак", time: "10:05 — 11:30", room: "315" },
        { subject: "Тестирование ПО", type: "Лек", time: "11:40 — 14:55", room: "315" }
    ],
    "2026-06-04": [
        { subject: "Инженерная графика (3.2)", type: "Прак", time: "08:30 — 09:55", room: "307" },
        { subject: "Физ. основы измерений", type: "Лек", time: "10:05 — 11:30", room: "305" },
        { subject: "Физика", type: "Лек", time: "11:40 — 13:05", room: "221" }
    ],
    "2026-06-05": [
        { subject: "Физика (3.1)", type: "Лаб", time: "08:30 — 11:30", room: "132" },
        { subject: "Химия (3.1)", type: "Лаб", time: "13:30 — 16:30", room: "601" }
    ],

    // НЕДЕЛЯ С 08.06 ПО 14.06 (Пустая)
    "2026-06-08": [], "2026-06-09": [], "2026-06-10": [],
    "2026-06-11": [], "2026-06-12": [], "2026-06-13": []
};

let currentWeekStart = new Date("2026-04-27");

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function getWeekRangeText(startDate) {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    const options = { day: 'numeric', month: 'short' };
    return `${startDate.toLocaleDateString('ru', options)} — ${endDate.toLocaleDateString('ru', options)}`;
}

function renderSchedule() {
    const display = document.getElementById("scheduleDisplay");
    const rangeLabel = document.getElementById("weekRange");
    display.innerHTML = "";
    rangeLabel.innerText = getWeekRangeText(currentWeekStart);

    let hasData = false;

    for (let i = 0; i < 7; i++) {
        const dayDate = new Date(currentWeekStart);
        dayDate.setDate(currentWeekStart.getDate() + i);
        const dateKey = formatDate(dayDate);
        const lessons = calendarData[dateKey] || [];

        if (lessons.length > 0) {
            hasData = true;
            const dayTitle = dayDate.toLocaleDateString('ru', { weekday: 'long', day: 'numeric', month: 'long' });
            
            let html = `<section class="day-section">
                            <div class="day-title">${dayTitle}</div>`;
            
            lessons.forEach(lesson => {
                html += `
                    <div class="lesson-card">
                        <div class="lesson-header">
                            <span class="lesson-name">${lesson.subject}</span>
                            <span class="lesson-type">${lesson.type}</span>
                        </div>
                        <div class="lesson-info">
                            🕒 ${lesson.time} | 📍 Каб. ${lesson.room}
                        </div>
                    </div>`;
            });
            html += `</section>`;
            display.innerHTML += html;
        }
    }

    if (!hasData) {
        display.innerHTML = `<div class="no-lessons">На этой неделе занятий нет</div>`;
    }
}

document.getElementById("prevWeek").onclick = () => {
    currentWeekStart.setDate(currentWeekStart.getDate() - 7);
    renderSchedule();
};

document.getElementById("nextWeek").onclick = () => {
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    renderSchedule();
};

// Первый запуск
renderSchedule();