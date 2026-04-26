const calendarData = {
    // Неделя 27.04 - 03.05
    "2026-04-27": [{name:"Инж. графика", type:"Прак", time:"08:30-11:30", room:"307"}, {name:"Тестирование ПО", type:"Лаб", time:"08:30-11:30", room:"206"}, {name:"Физика", type:"Лек", time:"11:40-13:05", room:"315"}, {name:"Математика", type:"Прак", time:"13:30-14:55", room:"219"}, {name:"Физкультура", type:"Прак", time:"16:40-18:05", room:"Зал"}],
    "2026-04-28": [{name:"Иностр. язык", type:"Прак", time:"08:30-11:30", room:"312"}, {name:"Математика", type:"Лек", time:"11:40-13:05", room:"221"}, {name:"История Бел.", type:"Сем", time:"13:30-14:55", room:"312"}],
    "2026-04-29": [{name:"Тестирование ПО", type:"Лек", time:"08:30-09:55", room:"315"}, {name:"Математика", type:"Прак", time:"10:05-11:30", room:"218"}, {name:"Физ. основы изм.", type:"Лек", time:"11:40-13:05", room:"305"}, {name:"Тестирование ПО", type:"Прак", time:"13:30-14:55", room:"206"}],
    "2026-04-30": [{name:"Физ. основы изм.", type:"Прак", time:"08:30-09:55", room:"305"}, {name:"Физика", type:"Прак", time:"10:05-11:30", room:"218"}, {name:"Физика", type:"Лек", time:"11:40-13:05", room:"221"}],
    // Неделя 04.05 - 10.05
    "2026-05-04": [{name:"Физика", type:"Лек", time:"11:40-13:05", room:"219"}, {name:"Физкультура", type:"Прак", time:"16:40-18:05", room:"Зал"}],
    "2026-05-06": [{name:"Химия", type:"Лек", time:"08:30-09:55", room:"315"}, {name:"Химия", type:"Прак", time:"10:05-11:30", room:"315"}, {name:"Тестирование ПО", type:"Лек", time:"11:40-14:55", room:"315"}],
    "2026-05-07": [{name:"Инж. графика", type:"Прак", time:"08:30-09:55", room:"307"}, {name:"Физ. основы изм.", type:"Лек", time:"10:05-11:30", room:"305"}, {name:"Физика", type:"Лек", time:"11:40-13:05", room:"221"}],
    "2026-05-08": [{name:"Физика", type:"Лаб", time:"08:30-13:05", room:"132"}, {name:"Химия", type:"Лаб", time:"13:30-16:30", room:"601"}],
    // Неделя 11.05 - 17.05
    "2026-05-11": [{name:"Физика", type:"Лек", time:"11:40-13:05", room:"217"}],
    "2026-05-13": [{name:"Химия", type:"Лек", time:"08:30-11:30", room:"315"}, {name:"Тестирование ПО", type:"Лек", time:"11:40-14:55", room:"315"}],
    "2026-05-15": [{name:"Физика", type:"Лаб", time:"08:30-13:05", room:"132"}, {name:"Химия", type:"Лаб", time:"13:30-16:30", room:"601"}],
    // Неделя 18.05 - 24.05
    "2026-05-20": [{name:"Химия", type:"Лек", time:"08:30-11:30", room:"315"}, {name:"Тестирование ПО", type:"Лек", time:"11:40-14:55", room:"315"}],
    "2026-05-21": [{name:"Математика", type:"Лек", time:"13:30-14:55", room:"221"}],
    // Неделя 25.05 - 31.05
    "2026-05-27": [{name:"Химия", type:"Лек", time:"08:30-11:30", room:"315"}],
    // Июнь
    "2026-06-03": [{name:"Химия", type:"Лек", time:"08:30-11:30", room:"315"}],
    "2026-06-05": [{name:"Физика", type:"Лаб", time:"08:30-13:05", room:"132"}]
};

let currentView = 'today'; 
let navDate = new Date(); 

function render() {
    const container = document.getElementById("scheduleDisplay");
    if (!container) return;
    container.innerHTML = "";

    if (currentView === 'today') {
        document.getElementById("weekRange").innerText = "Сегодня";
        const todayStr = new Date().toISOString().split('T')[0];
        renderDayList(container, [todayStr]);
    } else {
        const start = new Date(navDate);
        start.setDate(navDate.getDate() - (navDate.getDay() === 0 ? 6 : navDate.getDay() - 1));
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        
        document.getElementById("weekRange").innerText = `${start.getDate()} ${start.toLocaleString('ru',{month:'short'})} — ${end.getDate()} ${end.toLocaleString('ru',{month:'short'})}`;
        
        const weekDays = [];
        for(let i=0; i<7; i++) {
            let d = new Date(start);
            d.setDate(start.getDate() + i);
            weekDays.push(d.toISOString().split('T')[0]);
        }
        renderDayList(container, weekDays);
    }
}

function renderDayList(container, dates) {
    let found = false;
    dates.forEach(dateStr => {
        const lessons = calendarData[dateStr] || [];
        if (lessons.length > 0) {
            found = true;
            const d = new Date(dateStr);
            let dayHtml = `<div class="day-section"><div class="day-title">${d.toLocaleDateString('ru',{weekday:'long', day:'numeric', month:'short'})}</div>`;
            lessons.forEach(l => {
                dayHtml += `<div class="lesson-card"><div class="time">${l.time}</div><div class="subject">${l.name}</div><div class="details">${l.type} <span class="room">Каб. ${l.room}</span></div></div>`;
            });
            container.innerHTML += dayHtml + `</div>`;
        }
    });
    if (!found) container.innerHTML = '<div class="no-lessons">Пар нет</div>';
}

document.addEventListener("DOMContentLoaded", () => {
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
    document.getElementById("nextWeek").onclick = () => { navDate.setDate(navDate.getDate() + 7); currentView = 'week'; render(); };
    document.getElementById("prevWeek").onclick = () => { navDate.setDate(navDate.getDate() - 7); currentView = 'week'; render(); };
    render();
});