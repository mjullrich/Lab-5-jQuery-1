
document.addEventListener('DOMContentLoaded', function () {
    createMessageButton();
    createTextboxButton();
    createTextboxDiv();
    changeSquareColors();
    changeParagraphColors();
    createNameButton();
    createNameDiv();
    createFriendsButton();
    createFriendsList();
});

// 1 - add div with button for nice message upon click

function createMessageButton() {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons";
    let button = document.createElement('button');
    button.innerText = 'Click for Nice Message';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = NiceMsg;
}

function NiceMsg() {
    alert("Hope Your Having a Great Day Coding!!");
}

// 2 - add div with button for textbox message upon click

function createTextboxButton() {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons2";
    let button = document.createElement('button');
    button.innerText = 'Click for Textbox Message';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = textboxMsg;
}

function createTextboxDiv() {
    let wrapper2 = document.createElement('div');
    wrapper2.id = "emptyDiv3";
    document.body.appendChild(wrapper2);
}

function textboxMsg() {

    let wrapper2 = document.getElementById('emptyDiv3');

    if (!document.getElementById("centerBox")) {
        let wrapper = document.createElement('div');
        wrapper.id = "centerBox";
        let x = document.createElement("input");
        x.setAttribute("type", "text");
        x.setAttribute("value", "Hello World!");
        wrapper.appendChild(x);
        wrapper2.appendChild(wrapper);

        wrapper2.appendChild(wrapper);
    }
}

// 3 - add div square to change colors upon mouse over

function changeSquareColors() {
    let wrapper = document.createElement('div');
    let square = document.createElement('div');
    wrapper.id = "squareWrapper";
    square.id = "square";
    square.innerHTML = "<p>Mouse Over Me!</p>";
    wrapper.appendChild(square);
    document.body.appendChild(wrapper);
    document.getElementById("square").onmouseover = function () { mouseOver() };
    document.getElementById("square").onmouseout = function () { mouseOut() };
}

function mouseOver() {
    document.getElementById("square").style.background = "red";
}

function mouseOut() {
    document.getElementById("square").style.background = "black";
}

// 4 - add div pararaph to chance colors upon click

function changeParagraphColors() {
    let wrapper = document.createElement('div');
    let paragraph = document.createElement('div');
    wrapper.id = "paraWrapper";
    paragraph.id = "paragraph";
    paragraph.innerHTML = "<p>Click any word in this paragraph to see paragraph change colors!" +
        "<br>Learning jQuery is fun!" +
        "<br>Can't wait to learn Java, C++, PHP, C#," +
        "<br>and many more!</p>";
    wrapper.appendChild(paragraph);
    document.body.appendChild(wrapper);
    document.getElementById("paragraph").onclick = changeColors;
}

function changeColors(event) {
    let paragraph = event.target;
    let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    paragraph.style.color = randColor;
}

// 5 - add div with button when clicked shows my name

function createNameButton() {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons3";
    let button = document.createElement('button');
    button.innerText = 'Click For My Name';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = NameMsg;
}

function createNameDiv() {
    let wrapper2 = document.createElement('div');
    wrapper2.id = "emptyDiv";
    document.body.appendChild(wrapper2);
}

function NameMsg() {
    if (!document.getElementById("myName")) {
        let wrapper2 = document.getElementById('emptyDiv');
        let newSpan = document.createElement('span');
        newSpan.id = "myName";
        newSpan.innerHTML = "Maryann Ullrich";
        wrapper2.appendChild(newSpan);
    }
}

// 6 - list items added with button from an array

function createFriendsButton() {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons4"
    let button = document.createElement('button');
    button.innerText = 'Click For My Friends';

    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = addFriendName;
}

function createFriendsList() {
    let wrapper2 = document.createElement('div');
    wrapper2.id = "emptyDiv2";
    let list = document.createElement('ul');
    list.id = "friendList";

    wrapper2.appendChild(list);

    document.body.appendChild(wrapper2);
}

function addFriendName() {
    let friendsArray = ["Tyler", "Stephen", "John", "Skyler", "Matt", "Ronnie", "Clayton", "Greg", "Adam", "Myles"];
    let friendList = document.getElementById('friendList');
    let childrenNum = friendList.children.length;

    if (childrenNum < friendsArray.length) {
        let item = document.createElement('li');
        item.innerText = friendsArray[childrenNum];
        friendList.appendChild(item);
    }
}