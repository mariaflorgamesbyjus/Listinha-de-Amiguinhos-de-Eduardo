 var array=[]
 function cliqueaqui(){

convidado = document.getElementById("listinhabonitinha").value
array.push(convidado)
a=array.join("<br>")
document.getElementById("qualqueridhahahhbla").innerHTML = a
document.getElementById("listinhabonitinha").value=""

    

}

function procurar(){

    var s=document.getElementById("procurar").value
    var vezes=0

    for (i=0;i<array.length;i++){
        if(s==array[i]){
            vezes++
        }
    }
  document.getElementById("encontrado").innerHTML= "o nome "+s+ " foi encontrado " +vezes+" vezes" }
