// this is the StoryMaker Class which
//  Handles Story Selection, 
// Generation, 
//Resetting
class StoryMaker {
    constructor() {
        this.subjects = ["Cat", "Dog", "Boy", "Girl"];
        this.actions = ["Broke up", "Jump", "Saw", "Swim"];
        this.places = ["Park", "Mall", "Home", "Lake"];
        this.times = ["Now", "Soon", "Late", "Then"];
        this.moods = ["Glad", "Sad", "Mad", "Calm"];

        this.selections = {
            subject: 0,
            action: 0,
            place: 0,
            time: 0,
            mood: 0
        };

        this.setupEventListeners();
    }

    // here it will 
    // cycle through word choices when clicking a button
    cycleChoice(type, buttonId, array) {
        this.selections[type] = (this.selections[type] + 1) % array.length;
        document.getElementById(buttonId).innerText = array[this.selections[type]];
    }

}