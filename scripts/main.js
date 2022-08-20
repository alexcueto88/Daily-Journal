import { exportEntries } from "./entries.js";

const displayEntries = () => {
let html = "";
const journalEntries = exportEntries()

    for (let i = 0; i <journalEntries.length; i++) {
        html += `<div>
        <h2>${journalEntries[i].concept}</h2>
        <p>${journalEntries[i].date}</p>
        <p>${journalEntries[i].dayOfWeek}</p>
        <p>${journalEntries[i].entry}</p>
        <p>${journalEntries[i].mood}</p>  
        </div>`
        
    }
   
    document.getElementById("entries").innerHTML = html

}

displayEntries()
