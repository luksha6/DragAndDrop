function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
        console.log("Drag Start!");
}

function onDragFinish(event) {
    console.log("Drag Finish!");
    event.preventDefault();
}

function onDrop(event) {
    console.log("Drop");
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}
