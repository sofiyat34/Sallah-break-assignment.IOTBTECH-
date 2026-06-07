PERSONAL REFLECTION
1. What was the hardest part? What did you learn about debugging?
Answer:

The hardest part was connecting different parts of the project together, the folders are many and connecting it to a single repo was hell for me i use complete full day to figure it out. especially making sure user actions updated the dashboard correctly and saving data properly.

I learned that debugging works better when breaking problems into smaller parts instead of trying to fix everything at once. Using console.log(), checking browser DevTools, and testing one feature at a time helped me find errors faster.

2. When you got stuck, how did you get unstuck?
Answer:

When I got stuck, I used a combination of:

Documentation to understand concepts

Google searches for similar problems

AI assistance for explanations and debugging

Trial and error by testing smaller pieces of code

The most helpful method was combining documentation with testing because it helped me understand why something works instead of only copying solutions.

3. How would you rate your code organization? What would you change?
Answer:

I would rate my code organization around 7/10.

Things I would improve:

Separate HTML, CSS, and JavaScript more clearly

Use more functions instead of repeating code

Group related code together (UI updates, storage, events)

If I started again, I would plan the structure before coding.

ENGINEERING BEST PRACTICE
Review your project code. Identify 3 things done well and 3 things to improve.
3 Things Done Well
1. Reusable Functions
Example:

function renderTasks(){
   // update UI
}
This avoids rewriting code.

2. Used Event Listeners Properly
button.addEventListener(
"click",
addTask
);
Keeps JavaScript cleaner.

3. Used localStorage
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
Allows data persistence.

3 Things To Improve
1. Reduce Repeated Code
Bad:

document.getElementById("a")
document.getElementById("b")
document.getElementById("c")
Better:

const taskInput =
document.getElementById(
"taskInput"
);
2. Split Large Functions
Bad:

function app(){

// save

// render

// validation

// events

}
Better:

saveTasks();

renderTasks();

validateInput();
3. Improve Variable Names
Bad:

let x;

let a;
Better:

let taskList;

let completedTasks;