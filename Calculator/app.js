





var s = document.getElementById("screen");
function getNumber(n){


    console.log(n)

    s.value += n


}



function isEqual(){
    
    var ee= s.value

    s.value = eval(ee)
    

}