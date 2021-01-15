'use strict'

const t3 = document.getElementsByClassName("t3")[0];

function onDragStart(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
}

function onDragOver(ev) {
    ev.preventDefault();
}

function onDrop(ev) {
    const id = ev.dataTransfer.getData('text');
    const draggableEl = document.getElementById(id);
    const dropzone = ev.target;
    const blocks = ev.target.children;

    //first 2 main rules about the id number size and if the tower was empty
    if((blocks.length === 0) || (blocks[blocks.length -1].id > id) ) {
        dropzone.prepend(draggableEl);
        //winning logic
        if(t3.children.length == 4) {
            alert("dang! You won!")
        }
    } else {
        alert("I already told you you cant do that...");
    }

    ev.dataTransfer.clearData();
}