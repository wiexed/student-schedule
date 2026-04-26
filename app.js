const calendarData = {
    // НЕДЕЛЯ 27.04 - 03.05
    "2026-04-27": [
        { name: "Тестирование ПО", type: "Лаб", time: "08:30-09:55", room: "206" },
        { name: "Тестирование ПО", type: "Лаб", time: "10:05-11:30", room: "206" },
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "315" },
        { name: "Математика", type: "Прак", time: "13:30-14:55", room: "219" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-04-28": [
        { name: "Английский язык", type: "Прак", time: "08:30-11:30", room: "312" },
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
    // НЕДЕЛЯ 04.05 - 10.05
    "2026-05-04": [
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "219" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ],
    "2026-05-05": [
        { name: "Английский язык", type: "Прак", time: "08:30-11:30", room: "312" },
        { name: "Математика", type: "Лек", time: "11:40-13:05", room: "221" }
    ],
    "2026-05-06": [
        { name: "Химия", type: "Лек", time: "08:30-09:55", room: "315" },
        { name: "Химия", type: "Прак", time: "10:05-11:30", room: "315" },
        { name: "Тестирование ПО", type: "Лек", time: "11:40-14:55", room: "315" }
    ],
    "2026-05-07": [
        { name: "Инженерная графика", type: "Прак", time: "08:30-09:55", room: "307" },
        { name: "Физ. основы измерений", type: "Прак", time: "10:05-11:30", room: "305" },
        { name: "Физика", type: "Лек", time: "11:40-13:05", room: "221" }
    ],
    "2026-05-08": [
        { name: "Физика", type: "Лаб", time: "08:30-11:30", room: "132" },
        { name: "Химия", type: "Лаб", time: "13:30-16:30", room: "601" },
        { name: "Физкультура", type: "Прак", time: "16:40-18:05", room: "Зал" }
    ]
};

// Логика переключения
let currentDate = new Date("2026-04-27"); 

function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff));
}

function render() {
    const startOfWeek = getMonday(currentDate);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    // Заголовок
    document.getElementById("weekRange").innerText = 
        `${startOfWeek.getDate()} ${startOfWeek.toLocaleString('ru', {month:'short'})} — ${endOfWeek.getDate()} ${endOfWeek.toLocaleString('ru', {month:'short'})}`;

    const container = document.getElementById("scheduleDisplay");
    container.innerHTML = "";

    for (let i = 0; i < 6; i++) {
        let d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        let key = d.toISOString().split('T')[0];
        let lessons = calendarData[key] || [];

        if (lessons.length > 0) {
            let section = document.createElement("div");
            section.className = "day-section";
            let title = d.toLocaleDateString('ru', {weekday: 'long', day: 'numeric', month: 'long'});
            section.innerHTML = `<div class="day-title">${title}</div>`;

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

document.getElementById("nextWeek").onclick = () => {
    currentDate.setDate(currentDate.getDate() + 7);
    render();
};

document.getElementById("prevWeek").onclick = () => {
    currentDate.setDate(currentDate.getDate() - 7);
    render();
};

// Запуск
window.onload = render;