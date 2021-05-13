function preload()
{

}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide();
}
function take_snapshot()
{
   save('your frame.png')
}
function draw()
{
    image(video, 100, 100, 300, 300);
    fill('#f0b907');
    stroke('#f0b907');
    circle(50, 50, 80);
    circle(50, 450, 80);
    circle(450, 50, 80);    
    circle(450, 450, 80);
    fill('#f0b907');
    stroke('#f0b907');
    rect(90, 40, 350, 20);
    rect(82, 450, 350, 20);
    rect(40, 90, 20, 350);
    rect(440, 80, 20, 350);
}


