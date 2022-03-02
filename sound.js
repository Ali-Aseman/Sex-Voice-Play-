function play(){
    alert("لطفا صدای گوشی خود را زیاد کنید تا متوجه بشید")
    if(document.getElementById('Seda') == null ) {
        var sex = document.createElement('audio');
        a.src = "https://dl4.fara-download.ir/audio/sound_effect/human/scream/woman/woman_scream5.mp3"
        a.autoplay=true;
        a.loop=true;
        a.id='Seda';
        a.style.display='none';
        document.body.appendChild(a);
        document.body.addEventListener("click",function(){
            a.play()
            
        })
    }
}
