/*const now = new Date();
//what is the time right now?
console.log(now.toLocaleTimeString("en-US"));

// this is an object too, but more like HashMap or HashTable
const option = {timeStyle: "short"};

// any changes to fallAsleepTime will be reflected in now if set equal
// reference variables, pointing to same object
const fallAsleepTime = new Date();
fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
console.log("You will fall asleep at", fallAsleepTime.toLocaleTimeString("en-US", option));

const wakeUpTime = new Date(fallAsleepTime);
const wakeUpTimes = []
// create a loop that calculates the sleep time 
for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", option);
    //console.log("Sleep cycle: ", wakeUpTimeString);
    //console.log("Sleep cycle: " + wakeUpTimeString);
    //console.log(`Sleep cycle #${i} ends at ${wakeUpTimeString}`);
    wakeUpTimes.push(wakeUpTimeString);
}
console.log("Wake-up times:", wakeUpTimes.join(", "));
*/

const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

clcBtn.addEventListener("click", calcWakeUpTimes);
refreshBtn.addEventListener("click", calcWakeUpTimes);
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

const option = { timeStyle: "short" };

function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", option);
    //const cycleDiv = document.getElementById(`cycle-${i}`);
    //cycleDiv.textContent = wakeUpTimeString;
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = wakeUpTimeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }
  promptSection.classList.add("hidden");
  imageContainer.classList.add("hidden");
  resultSection.classList.remove("hidden");
}

const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcWakeUpTimes;