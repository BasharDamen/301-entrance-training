'use strict';

// making constructor
Task.globalArray=[];

function Task(name, date){
this.name = name;
this.date = date;

Task.globalArray.push(this);
}

// 

// making add event

let theForm = document.getElementById('toDoForm');

theForm.addEventListener('submit', handleClick);

function handleClick(event){

    // event.preventDefault();

    let taskName = event.target.taskName.value;

    let taskDate = event.target.taskDate.value;
    
    new Task(taskName, taskDate);
    
    saveToLocal()
}
// 
// making clear Event

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', handleClear);

function handleClear(){
    localStorage.clear();
    location.reload();
}
// 


// rendering list function
let myList = document.getElementById('myTasks');
let removeBtn;
function renderList(){
    let ul = document.createElement('ul');
    myList.appendChild(ul)
    for (let i = 0; i < Task.globalArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Task.globalArray[i].date} --- ${Task.globalArray[i].name}`;

        // making remove item button
        removeBtn = document.createElement('input');
        removeBtn.type = 'button';
        removeBtn.value = 'X';
        li.appendChild(removeBtn);

        removeBtn.addEventListener('click', handleRemove)
        function handleRemove(event, i){
            Task.globalArray.splice(i, 1)
            saveToLocal();
            location.reload();
        }
        
    }
}


// 


// Save and get from local storage
function saveToLocal(){
    localStorage.setItem('tasks', JSON.stringify(Task.globalArray));
}

function getFromLocal(){
    let convertedData = JSON.parse(localStorage.getItem('tasks'))

    if(convertedData !== null){
        Task.globalArray = convertedData;
        renderList();

    }
}

getFromLocal();

// 