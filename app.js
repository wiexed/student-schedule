// Базовое расписание, чтобы не было пусто при первом запуске
const initialData = {
    // Формат: "ГГГГ-ММ-ДД": [массив пар]
};

let schedule = JSON.parse(localStorage.getItem('my_calendar_db')) || initialData;
let selectedDate = new Date().toISOString().split('T')[0];

function switchTab(id, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    el.classList.add('active');
}

function renderCalendar() {
    const strip = document.getElementById('calendar-strip');
    strip.innerHTML = '';
    const daysArr = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    
    for (let i = -7; i < 21; i++) {
        let d = new Date();
        d.setDate(d.getDate() + i);
        let dateStr = d.toISOString().split('T')[0];
        let isActive = dateStr === selectedDate;
        
        strip.innerHTML += `
            <div class="day-box ${isActive ? 'active' : ''}" onclick="selectDate('${dateStr}')">
                <span>${daysArr[d.getDay()]}</span>
                <span>${d.getDate()}</span>
            </div>
        `;
    }
    document.getElementById('selected-date-str').innerText = new Date(selectedDate).toLocaleDateString('ru', {day:'numeric', month:'long'});
}

function selectDate(date) {
    selectedDate = date;
    renderCalendar();
    renderLessons();
}

function renderLessons() {
    const list = document.getElementById('lessons-list');
    list.innerHTML = '';
    const lessons = schedule[selectedDate] || [];
    
    if (lessons.length === 0) {
        list.innerHTML = `<p style="text-align:center; opacity:0.3; margin-top:50px;">На этот день ничего не записано</p>`;
        return;
    }

    lessons.sort((a,b) => a.time.localeCompare(b.time)).forEach((l, index) => {
        list.innerHTML += `
            <div class="lesson-card">
                <div class="indicator type-${l.type}"></div>
                <div class="card-body">
                    <div class="top-row">
                        <span>${l.time}</span>
                        <span class="room">${l.room}</span>
                    </div>
                    <div class="subject">${l.subject}</div>
                    <div style="font-size:11px; opacity:0.5">${l.type}</div>
                </div>
            </div>
        `;
    });
}

function addNewLesson() {
    const name = document.getElementById('edit-name').value;
    const time = document.getElementById('edit-time').value;
    const room = document.getElementById('edit-room').value;
    const type = document.getElementById('edit-type').value;

    if (!name || !time) return alert('Введи название и время');

    if (!schedule[selectedDate]) schedule[selectedDate] = [];
    schedule[selectedDate].push({ subject: name, time, room, type });
    
    save();
    document.getElementById('edit-name').value = '';
    switchTab('tab-main', document.querySelectorAll('.tab-item')[0]);
}

function clearDay() {
    if (confirm('Очистить расписание на этот день?')) {
        delete schedule[selectedDate];
        save();
    }
}

function save() {
    localStorage.setItem('my_calendar_db', JSON.stringify(schedule));
    renderLessons();
}

// Инициализация
renderCalendar();
renderLessons();