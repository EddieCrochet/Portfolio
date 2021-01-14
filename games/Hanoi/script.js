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

    dropzone.prepend(draggableEl);
    ev.dataTransfer.clerdata();
}