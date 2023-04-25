
// window.alert('Chaliye Shuru Karte Hai');


// Get Todos from input-txt 
function gettodos() {

    var todos = new Array;

    // getting Todos as object in string form
    var todos_str = localStorage.getItem('todo');

    // Convert JSON string into object 
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 

// Push todos in List 
function add() {
    var task = document.getElementById('task').value;
    
    // if input-txt is Empty 
    if(task===''){
        alert('Plz Enter Some txt Bro!');
        return;
    }


    var todos = gettodos();
    todos.push(task);

    // Convert Obj into String 
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}


// Reset to Default 
function clearDefault(a) {
    if (a.defaultValue==a.value){
        a.value="";
    }
}


// Removing ToDo 
function remove() {

    // gets the value of the id attribute of the current HTML element
    var id = this.getAttribute('id');
    var todos = gettodos();

    // Removing first elemnt by splice 
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    
    // Reduce Counter by 1 on removing ToDo 
    var counter = document.getElementById('count');

    // Convert string to Int - parseInt
    var count = parseInt(counter.innerText);
    if(todos.length===0){
        counter.innerText=0+'';
    }
    else{
        counter.innerText = (count - 1) + '';
    }

    show();
    return false;
}



// Display UI of List
function show() {
    var todos = gettodos();

    
    // List UI 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '"><i class="fa-solid fa-trash"></i></button> </li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    


    // Increase Counter By 1 
    var counter = document.getElementById('count');
    if (todos.length === 0) {
        counter.innerText = '0';
    } else {
        counter.innerText = todos.length + '';
    }
 

    // Remove ToDo on hitting Btn 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };


}

 
document.getElementById('add').addEventListener('click', add);


show();