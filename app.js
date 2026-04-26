let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function render() {
    const now = new Date();
    const todayName = days[now.getDay()];
    const todayDiv = document.getElementById("today");
    const scheduleDiv = document.getElementById("schedule");

    todayDiv.innerHTML = "";
    scheduleDiv.innerHTML = "";

    const todayLessons = schedule.filter(s => s.day === todayName);
    if (todayLessons.length === 0) {
        todayDiv.innerHTML = "<p style='opacity:0.5'>Пар нет 🥳</p>";
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

    schedule.forEach((lesson, index) => {
        scheduleDiv.innerHTML += `
            <div class="card">
                <b>${lesson.day} — ${lesson.subject}</b><br>
                ${lesson.time} | ауд. ${lesson.room}
                <button class="delete-btn" onclick="deleteLesson(${index})">✕</button>
            </div>`;
    });
}

function getTimerStatus(timeString) {
    try {
        const now = new Date();
        const [startStr, endStr] = timeString.split('-');
        const [sH, sM] = startStr.trim().split(':');
        const [eH, eM] = endStr.trim().split(':');

        const start = new Date(); start.setHours(sH, sM, 0);
        const end = new Date(); end.setHours(eH, eM, 0);

        if (now >= start && now <= end) {
            const left = Math.floor((end - now) / 1000 / 60);
            return { active: true, html: `<div style="margin-top:8px;color:#f9e2af;font-size:13px;">⏳ Осталось: ${left} мин.</div>` };
        }
    } catch(e) {}
    return { active: false, html: "" };
}

function addLesson() {
    const subject = document.getElementById("subject").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;
    if (!subject || !time) return;

    schedule.push({ day, subject, time, room });
    localStorage.setItem("schedule", JSON.stringify(schedule));
    toggleForm();
    render();
}

function deleteLesson(index) {
    if(confirm("Удалить?")) {
        schedule.splice(index, 1);
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

function toggleForm() {
    const form = document.getElementById("add-form");
    form.classList.toggle("hidden");
    if (!form.classList.contains("hidden")) {
        const dayIdx = new Date().getDay();
        document.getElementById("day").selectedIndex = dayIdx === 0 ? 0 : dayIdx - 1;
    }
}

// Регистрация SW
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(() => console.log("SW Registered"));
}

setInterval(render, 30000);
render();