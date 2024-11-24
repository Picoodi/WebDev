const Display = document.getElementById("Display")

function ShowOnDisplay(input){
    Display.value += input;

}

function clearDisplay(){
    Display.value = "";

}


function calculate(){
    try{
        Display.value = eval(Display.value);
    }
    catch(error){
        Display.value = "Error";
    }

}

function removelastobject(){
    Display.value = Display.value.slice(0,-1)
}
