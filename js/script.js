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


    // this function will generate the final sstory when user prompts 
    generateStory() {
        let story = `${this.subjects[this.selections.subject]} 
                     ${this.actions[this.selections.action]} 
                     at the ${this.places[this.selections.place]} 
                     ${this.times[this.selections.time]} 
                     and felt ${this.moods[this.selections.mood]}.`;

        document.getElementById("storyOutput").innerText = story;
      
    }


    // this function will randomly generate story when user prompts
    generateRandomStory() {
        let story = `${this.subjects[Math.floor(Math.random() * this.subjects.length)]} 
                     ${this.actions[Math.floor(Math.random() * this.actions.length)]} 
                     at the ${this.places[Math.floor(Math.random() * this.places.length)]} 
                     ${this.times[Math.floor(Math.random() * this.times.length)]} 
                     and felt ${this.moods[Math.floor(Math.random() * this.moods.length)]}.`;

        document.getElementById("storyOutput").innerText = story;
       
    }

}