'use strict'

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
    console.log(blocks[blocks.length]);

    if((blocks.length === 0) || (blocks[blocks.length -1].id > id) ) {
        dropzone.prepend(draggableEl);
    }
    console.log(id);

    ev.dataTransfer.clearData();
}