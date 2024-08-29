const now = new Date();
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