'use strict'

const t3 = document.getElementsByClassName("t3")[0];

function onDragStart(ev) {
    const fromTower = ev.target.parentNode.children;
    //first rule about which block you are allowed to move
    if(fromTower[0] === ev.target){
        ev.dataTransfer.setData('text/plain', ev.target.id);
    } else {
        alert("You can\'t even grab that piece... silly.");
    }
}

function onDragOver(ev) {
    ev.preventDefault();
}

const isLegal = (ev) => {
     // Below points to the drop object's first class name!
    // This is designed to be either 'tower' or 'block' to help with logic :)
    console.log(ev.path[0].classList[0]);
    const id = ev.dataTransfer.getData('text');
    const blocks = ev.target.children;
    //console.log(blocks[blocks.length -1].id);

    // we HAVE to drop the block onto a tower...
    if(ev.path[0].classList[0] !== "tower")
        return false;
        // 2 main rules about the id number size and if the tower was empty
    if((blocks.length === 0) || (blocks[blocks.length -1].id > id))
        return true;
    else return false;
};

function onDrop(ev) {
    const id = ev.dataTransfer.getData('text');
    const draggableEl = document.getElementById(id);
    const dropzone = ev.target;
    
    if(isLegal(ev)) {
        dropzone.prepend(draggableEl);
        console.log(id);
        //winning logic
        if(t3.children.length == 4) {
            alert("dang! You won!")
        }
    } else {
        alert("I already told you you cant do that...");
    }

    ev.dataTransfer.clearData();
}