

// 1 - add div with button for nice message upon click

document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons";
    let button = document.createElement('button');
    button.innerText = 'Click for Nice Message';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = NiceMsg;
});

function NiceMsg() {
    alert("Hope Your Having a Great Day Coding!!");
}

// 2 - add div with button for textbox message upon click

document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons2";
    let button = document.createElement('button');
    button.innerText = 'Click for Textbox Message';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = textboxMsg;

});

function textboxMsg() {
    if (!document.getElementById("centerBox")) {
        let wrapper = document.createElement('div');
        wrapper.id = "centerBox";
        let x = document.createElement("input");
        x.setAttribute("type", "text");
        x.setAttribute("value", "Hello World!");
        wrapper.appendChild(x);
        document.body.appendChild(wrapper);
    }
}

// 3 - add div square to change colors upon mouse over

document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.createElement('div');
    let square = document.createElement('div');
    wrapper.id = "squareWrapper";
    square.id = "square";
    square.innerHTML = "<p>Mouse Over Me!</p>";
    wrapper.appendChild(square);
    document.body.appendChild(wrapper);
    document.getElementById("square").onmouseover = function () { mouseOver() };
    document.getElementById("square").onmouseout = function () { mouseOut() };
});

function mouseOver() {
    document.getElementById("square").style.background = "red";
}

function mouseOut() {
    document.getElementById("square").style.background = "black";
}


// 4 - add div pararaph to chance colors upon click

document.addEventListener('DOMContentLoaded', function () {
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

});

function changeColors(event) {
    let paragraph = event.target;
    let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    paragraph.style.color = randColor;
}

// 5 - add div with button when clicked shows my name

document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons3";
    let button = document.createElement('button');
    button.innerText = 'Click For My Name';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = NameMsg;  
    
});

document.addEventListener('DOMContentLoaded', function () {
    let wrapper2 = document.createElement('div');
    wrapper2.id = "emptyDiv";
    document.body.appendChild(wrapper2);
   

    
});

function NameMsg() {
    if (!document.getElementById("myName")) {
        let wrapper2 = document.getElementById("emptyDiv");
        let newSpan = document.createElement('span');
        newSpan.id = "myName";
        newSpan.innerHTML = "Maryann Ullrich";
        wrapper2.appendChild(newSpan);
    }
}
