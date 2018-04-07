
$(document).ready(function () {

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

    let wrapper = $("<div/>").attr({
        id: 'my_centered_buttons'
    });
    let button = $("<button/>")
        .text('Click For Nice Message')
        .click(function () {
            NiceMsg();
        });
    wrapper.append(button);
    $("body").append(wrapper);
}

function NiceMsg() {
    alert('Hope Your Having a Great Day Coding!!');
}

// 2 - add div with button for textbox message upon click

function createTextboxButton() {
    let wrapper = $("<div/>").attr({
        id: 'my_centered_buttons2'
    });

    let button = $("<button/>")
        .text('Click For Textbox Message')
        .click(function () {
            textboxMsg();
        });

    wrapper.append(button);
    $("body").append(wrapper);
}

function createTextboxDiv() {
    let wrapper2 = $("<div/>").attr({
        id: 'emptyDiv3'
    });
    wrapper2.append("<div/>");
    $("body").append(wrapper2);
}

function textboxMsg() {

    if (!$("#centerBox").length) {

        let wrapper2 = $("#emptyDiv3");
        let wrapper = $("<div/>").attr({
            id: "centerBox"
        });
        let inputBox = $('<input/>').val('Hello World');
        wrapper.append(inputBox);
        wrapper2.append(wrapper);
    }
}

// 3 - add div square to change colors upon mouse over

function changeSquareColors() {

    let wrapper = $("<div/>").attr({
        id: 'squareWrapper'
    });
    let square = $("<div/>").attr({
        id: 'square'
    });
    square.text("Mouse Over Me!");
    square.hover(
        function () {
            $(this).css("background", "red");
        },
        function () {
            $(this).css("background", "black")
        }
    );
    wrapper.append(square);
    $("body").append(wrapper);
}

// 4 - add div pararaph to chance colors upon click

function changeParagraphColors() {

    let wrapper = $("<div/>").attr({
        id: 'paraWrapper'
    });
    let paragraph = $("<div/>").attr({
        id: 'paragraph'
    });

    paragraph.append("Click any word in this paragraph to see paragraph change colors!" +
        "<br>Learning jQuery is fun!" +
        "<br>Can't wait to learn Java, C++, PHP, C#," +
        "<br>and many more!");

    paragraph.click(function () {
        let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        $(this).css("color", randColor);
    });

    wrapper.append(paragraph);
    $("body").append(wrapper);
}

// 5 - add div with button when clicked shows my name

function createNameButton() {
    let wrapper = $("<div/>").attr({
        id: 'my_centered_buttons3'
    });
    let button = $("<button/>")
        .text('Click For My Name')
        .click(function () {
            NameMsg();
        });
    wrapper.append(button);
    $("body").append(wrapper);
}

function createNameDiv() {
    let wrapper2 = $("<div/>").attr({
        id: 'emptyDiv'
    });
    $("body").append(wrapper2);
}

function NameMsg() {
    if (!$("#mynName").length) {

        let wrapper2 = $("#emptyDiv");
        let newSpan = $("<div/>").attr({
            id: "myName"
        });
        let inputBox = $('<input/>').val('Maryann Ullrich');

        wrapper2.append(inputBox);
        wrapper2.append(newSpan);
    }
}

// 6 - list items added with button from an array

function createFriendsButton() {

    let wrapper = $("<div/>").attr({
        id: 'my_centered_buttons4'
    });
    let button = $("<button/>")
        .text('Click For My Friends')
        .click(function () {
            addFriendName();
        });
    wrapper.append(button);
    $("body").append(wrapper);
}

function createFriendsList() {

    let wrapper2 = $("<div/>").attr({
        id: 'emptyDiv2'
    });

    let list = $("<ul/>").attr({
        id: 'friendList'
    });

    wrapper2.append(list);

    $("body").append(wrapper2);

}

function addFriendName() {
    let friendsArray = ["Tyler", "Stephen", "John", "Skyler", "Matt", "Ronnie", "Clayton", "Greg", "Adam", "Myles"];
    let friendList = $('#friendList');
    let childrenNum = friendList.children().length;

    if (childrenNum < friendsArray.length) {
        let item = $("<li>");
        item.append(friendsArray[childrenNum]);
        friendList.append(item);
    }
}



