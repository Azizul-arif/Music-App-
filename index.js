window.addEventListener('load', ()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60c2d3",
    ]
    console.log(sounds);
    //work for sound
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            //sounds[4];
            sounds[index].currentTime=0; //reset the current time for multiple click
            sounds[index].play(); //play the sound
            createbubbles(index);
        });
    })
    //function to make bubbles
    const createbubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation ="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
});
