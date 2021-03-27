window.addEventListener("load", () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight /1.5 ;
    canvas.width = window.innerWidth /1.5;

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);


    const drawWidth = document.getElementById("drawWidth");
    ctx.lineWidth = drawWidth.value;

    drawWidth.oninput = function(){
        ctx.lineWidth = this.value;
    };


    const drawColor = document.getElementById("drawColor");
    drawColor.oninput = function () {
        ctx.strokeStyle = this.value;
    };

    const drawCircle = document.getElementById("drawCircle");
    drawCircle.onclick = function () {
        ctx.beginPath();
        ctx.arc(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 50, 0, 2 * Math.PI);
        ctx.stroke();
    };

    const clearDrawing = document.getElementById("clearDrawing");
    clearDrawing.onclick = function () {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

});