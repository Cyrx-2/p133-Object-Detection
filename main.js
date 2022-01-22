status="";
objects= [];

img ="";
function setup()
{
canvas = createCanvas(640,420);
canvas.center();
objectsDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting objects";
}



function draw()
{
 image(img, 0,0,640,420);

if(status != "")
{
    for(i = 0; i< objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status: objects Detected";

        fill("#FF0000");
        Percent = floor(objects[i].confidence * 100);

         text(objects[i].label + " " + Percent + "% ", +  objects[i].x, objects[i].y + 20);
        noFill();
        stroke("#FF0000");
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        
    }
}
/*
 


 fill("#FF0000");
 stroke("#FF0000");
 text("cat",350,100);
 noFill();
 
rect(300,75, 300,350);
*/
}

function modelLoaded()
{
console.log("Model loaded");

status = true;

objectsDetector.detect(img, gotResults);

}

function gotResults(error,results)
{
if(error)
{
    console.log(error);

}
else
{
    console.log(results);
    objects = results;

}
}