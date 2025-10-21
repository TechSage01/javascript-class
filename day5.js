// DOM IS A PROGGRAMING Interface that represents  an HTML or XML documenvt as a tree structure 
// every element (tags, attribute, text etc) is treated as a node in the tree.
// js can use the DOM TO:
// SELECT ELEMENTS(document.getElementId) etc.
// MODIFY ELEMENTS(styles, change content).
// ADD OR REMOVE ELEMENTS DYNAMICALLY(appenchild, remove, createElement)

// EVENTS -- ARE ACTIONS THAT HAPPENS IN THE BROWER(E.g click, over, press key, scroll, load a page).
// js can listen and respond to these events 
// when an element is given an event, there must be an hander , will be sent to a function, thus a function name. 
// TO CALL AN EVENT YOU NEED AN HANDKER WE CALL AN EVENT HANDLER WHICH IS OUR FUNCTION NAME 
// ONCLICK IS ALWAYS USED TO ENABLE USER CLICK 

function getUserName(){
    let myUsername = document.getElementById('username');
    console.log(myUsername);
    let mySelf = document.getElementById('self');
    console.log(mySelf);

    let myText = document.querySelector('.text');
    console.log(myText);

    let myList = document.querySelectorAll('.list');
    console.log(myList);
    
    myList.forEach((items, index)=> {
        console.log(items, index);

        items.innerHTML = 'Good Morning Techies'
        
    })

    myUsername.innerHTML = 'Hello World'
    mySelf.innerHTML = 'Hello JavaScript'
    myText.innerHTML = "Hey Techies"
    
}
getUserName();
function changeUI(){
    let myBody = document.getElementById('body');
    console.log(myBody);
    let myBtn = document.getElementById('btn');
    console.log(myBtn);
    myBtn.textContent = 'Hello';
    myBtn.style.backgroundColor = "blue";
    myBtn.style.padding = '10px 20px';
    myBtn


    myBody.style.backgroundColor = 'red'
    
}
