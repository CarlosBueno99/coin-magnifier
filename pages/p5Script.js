function setUo(){
    createCanvas(320,240);
    background(51);
    createCapture(VIDEO);
    video.size(320,240);
}

function draw(){
    image(video, 0,0)
}