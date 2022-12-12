noseY=0;
noseX=0;

function preload(){
    lips=loadImage('https://webstockreview.net/images/lip-clipart-8.png');
    mustache=loadImage('https://clipground.com/images/mustache-designs-clipart-7.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('PoseNet is Initialized');

}
function draw(){
    image(video,0,0,300,300);
    image(lips,noseX,noseY,30,30);
    image(mustache,noseX,noseY,30,30);
}
function take_snapshot(){
    save('MyFilterimage.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-13;
        noseY=results[0].pose.nose.y-13;
    }
}