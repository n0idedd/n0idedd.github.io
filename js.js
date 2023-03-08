function MuestraOculta(grupo){
    if(document.getElementById(grupo).style.display === "none"){
        document.getElementById(grupo).style.display = "block";
    }else{
        document.getElementById(grupo).style.display = "none";
    }
}