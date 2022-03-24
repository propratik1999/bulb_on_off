function clickMe(state){
    // alert("The bulb is ON");

    if(state=='on')
    {

        document.body.style.backgroundColor="yellow"; 
        document.getElementById('offbulb').setAttribute('src','img/onbulb.jpg');
    
    }
    else
    {
        document.body.style.backgroundColor="black";
        document.getElementById('offbulb').setAttribute('src','img/offbulb.jpg');


    }
}