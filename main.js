hatX = 0;
hatY = 0;

function preload() {
   business = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
 }
 
 function setup() {
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
 
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
 }
 
 function modelLoaded() {
   console.log('PoseNet Is Initialized');
 }
 
 function gotPoses(results)
 {
   if(results.length > 0)
   {
     console.log(results);
     hatX = results[0].pose.hat.x;
     hatY = results[0].pose.hat.y;
     console.log("hat x = " + hatX);
     console.log("hat y = " + hatY);
 
   }
 }
 
 function draw() {
   image(video, 0, 0, 300, 300);
   image(business, hatX, hatY,150,50);

 }
 
 function take_snapshot(){    
   save('myFilterImage.png');
 }
 
 