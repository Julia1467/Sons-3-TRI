function TocaSomAplausos (){
    document.querySelector("#som_tecla_aplausos").play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < ListaDeTeclas.length){
    ListaDeTeclas[contador].onclick = tocasomaplausos;
    contador = contador + 1;
    console.log(contador)
}