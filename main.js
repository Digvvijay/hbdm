var cv = new fabric.Canvas('cv');
 var x= document.getElementById("myAudio");

function new_image()
{

    fabric.Image.fromURL('BirthdayImage.jpg',function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set(
            {
                top:0,
                left:0
            });
        cv.add(block_image_object);
    });
}
	

function ps(){
	x.play();
}
