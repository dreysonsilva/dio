let n1=8;
let n2=6;
let n3=6;
let n4=6;

let media = (n1+n2+n3+n4)/4;

if(media<=5){
    console.log("Reprovado sua nota "+media );
}else if(media>5 && media <7){
    console.log("recuperação sua nota "+media);
}else{
    console.log("Aprovado sua nota "+media);
}