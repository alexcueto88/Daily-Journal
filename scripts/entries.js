const journalEntries = [ 
{   id: 1,
    dayOfWeek: "Monday", 
    date: "01/01/2022",
    concept: "HTML",
    entry: "I learned the basics of HTML.",
    mood: "Excited"

},

{   id: 2,
    dayOfWeek: "Tuesday",
    date: "01/02/2022",
    concept: "CSS",
    entry: "I learned the basics of CSS.",
    mood: "Excited"

},

{   id: 3,
    dayOfWeek: "Wednesday",
    date: "01/03/2022",
    concept: "JavaScrip",
    entry: "I learned the basics of JavaScript.",
    mood: "Excited"

},

{   id: 4,
    dayOfWeek: "Thursday",
    date: "01/04/2022",
    concept: "Variables",
    entry: "I learned the basics of Variables.",
    mood: "Excited"
},

{   id: 5,
    dayOfWeek: "Friday",
    date: "01/05/2022",
    concept: "Numbers",
    entry: "I learned the basics of Numbers.",
    mood: "Happy"
},

{   id: 6,
    dayOfWeek: "Saturday",
    date: "01/06/2022",
    concept: "Strings",
    entry: "I learned the basics of Strings.",
    mood: "Angry"

},

{   id: 7,
    dayOfWeek: "Sunday",
    date: "01/07/2022",
    concept: "Loops",
    entry: "I learned the basics of Loops.",
    mood: "Sad"
}

];


export const exportEntries = () => {
    const copyOfQuotes = journalEntries;
    return copyOfQuotes;
}
