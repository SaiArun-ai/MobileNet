Webcam.set({
    width:256,
    height:256,
    image_format:"png",
    img_quality:10,
    constraints:{
        facingMode:"environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach("#Camera");