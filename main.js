noseX=0;
noseY=0;
function preload(){
clownNose=loadImage('https://i.postimg.cc/52sghp08/clown-nose-png-12.png');

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)
}
function draw(){
image(video, 0,0,300,300);

image(clownNose,noseX,noseY,30,30);
}
function take_snapshot(){
    save(myFilterImage.png);
}
 function modelLoaded(){
    console.log('posenet is inisilised');
 }
 function gotposes(result){
    if (result.length>0){
console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
console.log("nose x= "+noseX);
console.log("nose y= "+noseY);

   }
 }