const {gets,print} = require('./js19-funcoes-auxiliares-media');


const media = gets();

if(media <5 ){
    print('Reprovado');
}else if(media >=5 && media <7){
    print('Recuperação');
}else{
    print('Aprovado!');
}