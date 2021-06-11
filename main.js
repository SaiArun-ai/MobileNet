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

function CaptureImage(){
    Webcam.snap(function (data_uri){
        document.getElementById("Result").innerHTML = '<img id = "ig" src = "'  + data_uri + '" width = 250 height = 200> ';
    });
    
}

var Classifier = ml5.imageClassifier('Mobilenet',modelLoaded);
function modelLoaded(){

}
function Identify(){
    image = document.getElementById("ig").value;
    Classifier.classify(image,gotresult);
}


function gotresult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("WordLaResult").innerHTML = results[0].label;
    }
}