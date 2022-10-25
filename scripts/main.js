import { exportEntries, addNewEntry } from "./entries.js";

const displayEntries = () => {
let html = "";
const journalEntries = exportEntries()

    for (let i = 0; i <journalEntries.length; i++) {
        html += `<div class = "journalPreviousEntries">
        <h2 class= "journalHeader">${journalEntries[i].concept}</h2>
        <p class = "journalDate">${journalEntries[i].date}</p>
        <p class = "journalDay">${journalEntries[i].dayOfWeek}</p>
        <p class = "journalEntry">${journalEntries[i].entry}</p>
        <p class = "journalMood">${journalEntries[i].mood}</p>  
        </div>`
        
    }
   
    document.getElementById("entries").innerHTML = html

}

displayEntries()


document.addEventListener("click", (e) => {
    if (e.target.id === "submit") {
        e.preventDefault()
        const entryDate = document.getElementById("entryDate").value
        const entryForm = document.getElementById("entryForm").value
        const entry = document.getElementById("entry").value
        const mood = document.getElementById("Mood").value

        const newEntry = {   
            date: entryDate,
            concept: entryForm,
            entry: entry,
            mood: mood
        
        }
       
        addNewEntry(newEntry)

    }
})

document.addEventListener("stateChanged", (e) => {
    displayEntries();

})