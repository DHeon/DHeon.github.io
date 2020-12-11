

const calendar = document.getElementById("calendar");
const week = document.querySelector(".week");
const days = document.querySelector(".days");

let today = new Date();
let count = 0;

const firstDay = (count) =>
    new Date(today.getFullYear(), today.getMonth() + count, 1);
const lastDay = (count) =>
    new Date(today.getFullYear(), today.getMonth() + count + 1, 0);
const weekName = ['일','월','화','수','목','금','토'];

week.innerHTML = weekName
    .map((week) => `<div class="weekname"> ${week} </div>`)
    .join("");
1;

function calendarBuilding(firstDate, lastDate) {
    const calendarHeader = calendar.querySelector("h2");

    calendarHeader.innerHTML = `${lastDate.getFullYear()}년 <span class="thisMon">${
        lastDate.getMonth() + 1
    }</span>월`;

    days.innerHTML = "";
    for (let i = 0; i < firstDate; i++) {
        days.innerHTML += `<div class="daynum empty"></div>`;
    }

    for (let i = 1; i < lastDate.getDate() + 1; i++) {
        if (i == today.getDate() && count==0){
          days.innerHTML += `<div class="daynum today"> ${i} </div>`;
        } else{
          days.innerHTML += `<div class="daynum"> ${i} </div>`;
        }
    }

    if (count != 0){
      document.getElementById("go_today").style.display="block";
    } else{
       document.getElementById("go_today").style.display="none";
    }
}

function handleNextCalendar() {
    count += 1;
    const firstDate = firstDay(count).getDay();
    const lastDate = lastDay(count);
    calendarBuilding(firstDate, lastDate);
}

function handlePrevCalendar() {
    count -= 1;
    const firstDate = firstDay(count).getDay();
    const lastDate = lastDay(count);
    calendarBuilding(firstDate, lastDate);
}

function init() {
    const firstDate = firstDay(0).getDay();
    const lastDate = lastDay(0);
    calendarBuilding(firstDate, lastDate);
}
function goto_thisMonth() {
  count = 0;
  init();
}
init();
