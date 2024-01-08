Webcam.set({
    width:350,
    height:300,
    image_faormat: 'png',
    png_qulity:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


onsole.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Kw6NVw_Fo/',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');
}