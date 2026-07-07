const dashboard =  document.querySelector("#dashboard")
let toodoo = document.querySelector("#toodoo")
let todo = document.querySelector("#todo")

let plan = document.querySelector("#plan")
let planner = document.querySelector("#planner")

let goall= document.querySelector("#goall")
let goals = document.querySelector("#goals")

let pomodoro = document.querySelector("#pomodoro")
let pomo = document.querySelector("#pomo")

let motivation = document.querySelector("#motivation")
let moto= document.querySelector("#moto")

let weather = document.querySelector("#weather")
let weadu = document.querySelector("#weadu")

const container = document.querySelector("#container");

const taskInput = document.querySelector("#taskInput");
    const add = document.querySelector("#addTaskBtn");
    const tasklist = document.querySelector("#taskList")
    const del = document.querySelector("#delete-btn")
    const btn = document.querySelector(".important-btn")
const total = document.querySelector("#total");
const completed1 = document.querySelector("#completed");
const backButtons = document.querySelectorAll(".back-btn");

let tasks =  JSON.parse(localStorage.getItem("task"))|| [];
renderTasks()
 update()
toodoo.addEventListener("click",()=>{
      setPage("todo");
       openPage("todo");
    container.style.display = "block";
    dashboard.style.display = "none";
    todo.style.display = "flex";
 
    
})

backButtons.forEach((button) => {

    button.addEventListener("click", () => {
         setPage("dashboard");
        showDashboard();
    });

});
//===================================== add task ============================================
add.addEventListener("click",addo) 
  //------------------------------------delete--------------------------------
 tasklist.addEventListener("click",(e)=>{
     if(e.target.classList.contains("delete-btn")){
       const card = e.target.closest(".task-card");
     const index = card.dataset.index;
tasks.splice(index,1);
localStorage.setItem("task",JSON.stringify(tasks));

renderTasks();
update();
     
    }

     })
//---------------------------------------------------------------------------

//................................completed ....................................
tasklist.addEventListener("click",(e)=>{
    if (e.target.classList.contains("complete-task")) {
    const card = e.target.closest(".task-card");
    const index = card.dataset.index;
     tasks[index].completed = e.target.checked;

        localStorage.setItem("task", JSON.stringify(tasks));

        renderTasks();
        update();
 }
     
})
//........................................................................................

//=-=-=-=-=-=-=-=-=-=-=----=-=-=-=-=-=-=-=-=--=-=-==-=---=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


   function update() {
   
    const totalCount = document.querySelectorAll(".task-card").length;
    const completedCount = document.querySelectorAll(".complete-task:checked").length;
        total.innerHTML = ` <b>${tasks.length}</b>`;
    // total.textContent = `Total: ${tasks.length}`;
    completed1.textContent = ` ${completedCount}`;
}
tasklist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("important-btn")){

        const card = e.target.closest(".task-card");
        const index = card.dataset.index;

        tasks[index].important = !tasks[index].important;

        localStorage.setItem("task", JSON.stringify(tasks));

        renderTasks();
        update();
    }
});




function addo(){

        const task = taskInput.value.trim();
        if(task === ""){
            alert("Enter a task");
            return
        }

            
           let object = {
            task,
            important:false,
            completed:false
           }
      tasks.push(object)          
      localStorage.setItem("task",JSON.stringify(tasks));
    renderTasks()
        taskInput.value="";
             update() 
    }

  
    function renderTasks(){
        tasklist.innerHTML = "";
         tasks.forEach((item,index)=>{
              
              
        const taskCard = document.createElement("div");
  taskCard.classList.add("task-card")
  if(item.completed){
    taskCard.classList.add("completed");
}
  taskCard.dataset.index = index;
        taskCard.innerHTML = `  

            <div class="task-left">
                   
              <input  type="checkbox" class="complete-task"  ${item.completed ? "checked" : ""}>
              <p class="task-text">${item.task}</p>

                </div>
                    <div class="task-right">
              <button class="important-btn ${item.important ? "active" : ""}">☆</button>
                    <button class="delete-btn">🗑</button>
                `;

               

   tasklist.appendChild(taskCard);
                })

    }
    window.addEventListener("load", () => {
    // always reset UI to dashboard
    dashboard.style.display = "flex";
    container.style.display = "none";
});
//=================================================================================================================================
//================================================================================================================================

//=========================================================Planner===========================================
let savebtn= document.querySelectorAll(".save")
let slot = document.querySelectorAll(".slot")
let Time = document.querySelector(".time")
let input = document.querySelectorAll(".inp")
let clearBtns = document.querySelectorAll(".delete"); 
clearBtns.forEach((button) => {
   button.addEventListener("click",()=>{
     let currentSlot = button.parentElement;
    let input = currentSlot.querySelector(".inp");
let time = currentSlot.querySelector(".time").innerText;
input.value = "";
let plannerData = JSON.parse(localStorage.getItem("planner")) || {};
delete plannerData[time];
 localStorage.setItem("planner", JSON.stringify(plannerData));
// console.log("hello")
   })

});

let plannerData = JSON.parse(localStorage.getItem("planner")) || {};
slot.forEach((currentSlot) => {
    let time = currentSlot.querySelector(".time").innerText;
    let input = currentSlot.querySelector(".inp");

    if (plannerData[time]) {
        input.value = plannerData[time];
    }
});


savebtn.forEach((button) => {
button.addEventListener("click", () => {
let currentSlot = button.parentElement;
let input = currentSlot.querySelector(".inp");
let time = currentSlot.querySelector(".time").innerText;
let task = input.value.trim();
    if(task === ""){
        alert("Enter a Task ")
    }
    else{
         let plannerData = JSON.parse(localStorage.getItem("planner")) || {};
         plannerData[time] = task;
        localStorage.setItem("planner", JSON.stringify(plannerData));
  console.log(JSON.parse(localStorage.getItem("planner")));
        
    }
    });
});
let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
 let confirmReset = confirm("Are you sure you want to reset the planner?");
 if (confirmReset) {
 input.forEach((input1) => {
     input1.value = "";
        });
console.log(resetBtn)
localStorage.removeItem("planner");
alert("Planner has been reset!");
    }
});
plan.addEventListener("click",()=>{
    setPage("planner")
     openPage("planner");
    container.style.display = "block";
      dashboard.style.display = "none";
    planner.style.display = "flex";

})
//==========================================================================================================================================
                                     //#######goal##################
//=========================================================================================================================================
const goalInput = document.querySelector("#goalInput");
const goa = document.querySelector("#goalBtn");
const goallist = document.querySelector("#goalList")
 const goalTotal = document.querySelector("#goalTotal");
const goalCompleted = document.querySelector("#goalCompleted");

let tasks2 =  JSON.parse(localStorage.getItem("task2"))|| [];
renderTask2()
 update2()
console.log(goalTotal);
console.log(goalCompleted);
//===================================== add task ============================================
goa.addEventListener("click",addo2) 
  //------------------------------------delete--------------------------------
 goallist.addEventListener("click",(e)=>{
     if(e.target.classList.contains("delete-btn")){
       const card = e.target.closest(".goal-card");
     const index = card.dataset.index;
tasks2.splice(index,1);
localStorage.setItem("task2",JSON.stringify(tasks2));

renderTask2();
update2();
     
    }

     })
//---------------------------------------------------------------------------

//................................completed ....................................
goallist.addEventListener("click",(e)=>{
    if (e.target.classList.contains("complete-task")) {
    const card1 = e.target.closest(".goal-card");
    const index = card1.dataset.index;
     tasks2[index].completed = e.target.checked;

        localStorage.setItem("task2", JSON.stringify(tasks2));

        renderTask2();
        update2();
 }
     
})
//........................................................................................

//=-=-=-=-=-=-=-=-=-=-=----=-=-=-=-=-=-=-=-=--=-=-==-=---=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


function update2() {

    const completedCount2 = goallist.querySelectorAll(".complete-task:checked").length;

    goalTotal.textContent = tasks2.length;
    goalCompleted.textContent = completedCount2;
}

function addo2(){

        const task2 = goalInput.value.trim();
        if(task2 === ""){
            alert("Enter a task");
            return
        }

            
           let object1 = {
            task2,
            // important:false,
            completed:false
           }
      tasks2.push(object1)          
      localStorage.setItem("task2",JSON.stringify(tasks2));
    renderTask2()
        goalInput.value="";
             update2() 
    }

  
    function renderTask2(){
        goallist.innerHTML = "";
         tasks2.forEach((item,index)=>{
              
              
        const goalCard = document.createElement("div");
  goalCard.classList.add("goal-card")
  if(item.completed){
    goalCard.classList.add("completed");
}
  goalCard.dataset.index = index;
        goalCard.innerHTML = `  

                <div class="goal-left">
                   
                    <input  type="checkbox" class="complete-task"  ${item.completed ? "checked" : ""}>
                        <p class="goal-text">${item.task2}</p>

                </div>
                    <div class="goal-right">
          
                    <button class="delete-btn">🗑</button>
                `;

               

   goallist.appendChild(goalCard);
                })

    }
goall.addEventListener("click",()=>{
    setPage("goals")
    openPage("goals")
    container.style.display = "block";
      dashboard.style.display = "none";
    goals.style.display = "flex";

})
//===============================================================================================================================================
let timer = document.querySelector("#timer");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")
let totalSeconds = 25*60;
let interval = null; 
//------------------------------------start--------------------------------------------
start.addEventListener("click",()=>{
    if(interval !== null){
        return; 
    }
    interval =setInterval(()=>{
        totalSeconds--;
          updateee();
        if(totalSeconds <= 0){
            clearInterval(interval)
            interval = null;
            alert("Time's up")
           

        }
    },1000)
})
//------------------------------------------- pause-----------------------------------------
pause.addEventListener("click",()=>{
    if(interval!== null){
        clearInterval(interval);
      interval = null;

    }
   

})
//-------------------------------------------reset--------------------------------------------------
reset.addEventListener("click",()=>{
    clearInterval(interval)
    interval = null;
    totalSeconds = 25*60;
      updateee();
})




function updateee(){
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;
     minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    timer.innerText = `${minutes}:${seconds}`;
}



pomo.addEventListener("click",()=>{
     setPage("pomodoro")
     openPage("pomodoro")
    container.style.display = "block";
      dashboard.style.display = "none";
    pomodoro.style.display = "flex";
})
//==================================================Motivation============================================================================
let quoteText = document.querySelector("#quoteText");
let author = document.querySelector("#quoteAuthor");
let newquote = document.querySelector("#newQuote");

async function getQuote(){
    try{
quoteText.innerText = "Loading...";
quoteAuthor.innerText = "";
let response = await fetch("https://dummyjson.com/quotes/random")
let data = await response.json();
quoteText.innerText = data.quote;
quoteAuthor.innerText = "- " + data.author;
    }
catch(error){
      console.error(error);
    quoteText.innerText = "Unable to load quote. Please try again.";
   quoteAuthor.innerText = "";
}

}
 newquote.addEventListener("click",()=>{
         getQuote()
    })

moto.addEventListener("click",()=>{
    setPage("motivation")
    openPage("motivation")
    container.style.display = "block";
      dashboard.style.display = "none";
    motivation.style.display = "flex";
})
weadu.addEventListener("click",()=>{
     setPage("weather")
     openPage("weather")
    container.style.display = "block";
      dashboard.style.display = "none";
    weather.style.display = "flex";
})
//===================================referesh===============================================
function setPage(page){
    localStorage.setItem("currentPage", page);
}
window.addEventListener("load", () => {
    const page = localStorage.getItem("currentPage");

    if (!page || page === "dashboard") {
        showDashboard();
        return;
    }

    openPage(page);
});
function showDashboard() {
    dashboard.style.display = "flex";
    container.style.display = "none";

    todo.style.display = "none";
    planner.style.display = "none";
    goals.style.display = "none";
    pomodoro.style.display = "none";
    motivation.style.display = "none";
    weather.style.display = "none";
}
function openPage(page) {

    showDashboard();

    dashboard.style.display = "none";
    container.style.display = "block";

    todo.style.display = "none";
    planner.style.display = "none";
    goals.style.display = "none";
    pomodoro.style.display = "none";
    motivation.style.display = "none";
    weather.style.display = "none";

    if (page === "todo") todo.style.display = "flex";
    if (page === "planner") planner.style.display = "flex";
    if (page === "goals") goals.style.display = "flex";
    if (page === "pomodoro") pomodoro.style.display = "flex";
    if (page === "motivation") motivation.style.display = "flex";
    if (page === "weather") weather.style.display = "flex";
}
//===========================================theme==============================================
const root = document.documentElement;
function applyTheme(theme){
    root.classList.remove("morning","sunset","dark","afternoon","night")
    root.classList.add(theme)
}
function applyAutoTheme() {
    let hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        applyTheme("morning");
    }
       else if (hour >= 12 && hour < 17) {
        applyTheme("afternoon");
       }
    else if (hour >= 17 && hour < 20) {
        applyTheme("sunset");
    }
    else {
        applyTheme("night");
    }}
let savedTheme = localStorage.getItem("theme");
if(savedTheme=== "dark"){
    applyTheme("dark");
}
else{
   applyAutoTheme()
}
setInterval(()=>{
    if(localStorage.getItem("theme") !== "dark"){
        applyAutoTheme();
    }
},50000);

let btn2 = document.querySelector(".theme-btn")
btn2.addEventListener("click",()=>{
    let savedTheme = localStorage.getItem("theme");
 if (root.classList.contains("dark")&& savedTheme === "dark") {
      localStorage.removeItem("theme");
        applyAutoTheme();
    }
    else{
         localStorage.setItem("theme", "dark");
        applyTheme("dark");
    }
    

})
//=======================================================Weather======================================================
let city = document.querySelector("#city");
let rain = document.querySelector("#rain");
let humid = document.querySelector("#humidity")
let condition = document.querySelector("#condition")
let temperature = document.querySelector("#temp")
let wind1 = document.querySelector("#wind");
let weatherIcon = document.querySelector("#weatherIcon");


const apiKey = "0b985c9207c840d4955184219260707";
//lodaing
 function showLoad(){
city.innerText = "Loading...";
temperature.innerText = "--°C";
condition.innerText = "Loading...";
humid.innerText = "--%";
rain.innerText = "-- mm";
 wind1.innerText = "-- km/h";


}
navigator.geolocation.getCurrentPosition(
   async(position)=>{
    showLoad()
 const latitude = position.coords.latitude;
 const longitude = position.coords.longitude;
   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

try{
 const response1 = await fetch(url);
const data1 = await response1.json();
console.log(data1);
city.innerText = data1.location.name
temperature.innerText =data1.current.temp_c + "°C";
condition.innerText =  data1.current.condition.text
humid.innerText = data1.current.humidity + "%";
rain.innerText = data1.current.precip_mm + " mm";
 wind1.innerText = data1.current.wind_kph + " km/h";
 weatherIcon.src = "https:" + data1.current.condition.icon;
weatherIcon.alt = data1.current.condition.text;
   }
 catch(error){
console.log(error)
 city.innerText = "Location Denied";
temperature.innerText = "--°C";
condition.innerText = "Unable to fetch weather";
humid.innerText = "--%";
rain.innerText = "-- mm";
wind.innerText = "-- km/h";
    }  
},
() => {
city.innerText = "Location Denied";
temperature.innerText = "--°C";
condition.innerText = "Enable location permission";
humid.innerText = "--%";
rain.innerText = "-- mm";
wind1.innerText = "-- km/h";
}


)
//==============================================current date time =======================================================
let currentDate = document.querySelector("#currentDate")
let currentTime = document.querySelector("#currentTime")
// console.log(currentDate);
// console.log(currentTime);

function updateTimeDate(){
let now = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const months = [ "January",  "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"]
let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
console.log(now);
currentDate.innerText = `${day}, ${date} ${month} ${year}`;

let hour  = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
minute = String(minute).padStart(2,"0");
second = String(second).padStart(2,"0");

let period = "AM";
if(hour >=12){
    period = "PM"
}
hour = hour % 12
if(hour === 0){
    hour = 12;
}
currentTime.innerText = `${hour}:${minute}:${second} ${period}`;    
}
updateTimeDate()
setInterval(updateTimeDate, 1000);
// console.log(day)
// console.log(month)
// console.log(date)
// console.log(year)