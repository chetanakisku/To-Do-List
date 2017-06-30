xyz();

function xyz() {
    var listItems = document.getElementsByTagName('li');


    for (var i = 0; i < listItems.length; i++) {
        var closeBtn = document.createElement('span');
        var close = document.createTextNode('\u00D7');
        closeBtn.className = 'close-btn';
        closeBtn.appendChild(close);
        listItems[i].appendChild(closeBtn);
    }
    abc();
}


function abc() {
    var close = document.getElementsByClassName('close-btn');
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function(event) {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


var btnId = document.getElementById('btn');
btnId.onclick = function() {
    var inputText = document.getElementById('inputText').value;
    console.log(inputText);
    var textNode = document.createTextNode(inputText);

    var newLi = document.createElement('li');
    newLi.appendChild(textNode);
    var list = document.getElementById('ulList');
    list.appendChild(newLi);
    newLi.className = 'list-item';

    xyz();
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);