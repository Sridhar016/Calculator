const display=document.getElementById("display")


function appendTodisplay(input){
    display.value+=input
}

function clearDisplay(){
    display.value ="";
}
function tcalculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
    
}