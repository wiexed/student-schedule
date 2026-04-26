let schedule = JSON.parse(localStorage.getItem("schedule")) || [];
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function render() {
    const todayName = days[new Date().getDay()];
    const todayDiv = document.getElementById("today");
    const scheduleDiv = document.getElementById("schedule");

    todayDiv.innerHTML = "";
    scheduleDiv.innerHTML = "";

    // Пары на сегодня
    const todayLessons = schedule.filter(s => s.day === todayName);
    if (todayLessons.length === 0) {
        todayDiv.innerHTML = "<p style='opacity:0.5'>Сегодня пар нет 🥳</p>";
    } else {
        todayLessons.forEach((lesson) => {
            todayDiv.innerHTML += `
                <div class="card">
                    <b>${lesson.subject}</b><br>
                    ${lesson.time} | ауд. ${lesson.room}
                </div>`;
        });
    }

    // Вся неделя
    schedule.forEach((lesson, index) => {
        scheduleDiv.innerHTML += `
            <div class="card">
                <b>${lesson.day} — ${lesson.subject}</b><br>
                ${lesson.time} | ауд. ${lesson.room}
                <button class="delete-btn" onclick="deleteLesson(${index})">✕</button>
            </div>`;
    });
}

function addLesson() {
    const subject = document.getElementById("subject").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const room = document.getElementById("room").value;

    if (!subject || !time) return alert("Введите название и время!");

    schedule.push({ day, subject, time, room });
    localStorage.setItem("schedule", JSON.stringify(schedule));
    
    document.getElementById("subject").value = "";
    toggleForm();
    render();
}

function deleteLesson(index) {
    if(confirm("Удалить запись?")) {
        schedule.splice(index, 1);
        localStorage.setItem("schedule", JSON.stringify(schedule));
        render();
    }
}

function toggleForm() {
    document.getElementById("add-form").classList.toggle("hidden");
}

// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

render();