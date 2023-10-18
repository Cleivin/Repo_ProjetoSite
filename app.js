const vPerguntas = ['Quer seguir para área de Front-End ou seguir para a área de Back-End. | 1 = Front-end | 2 = Back-End'
                   ,'Quer aprender React ou aprender Vue. | 1 = React | 2 = Vue'
                   ,'Quer aprender C# ou aprender Java. | 1 = C# | 2 = Java'
                   ,'Gostaria de seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. | 1 = Área | 2 = FullStack'
                   ,'Qual tecnologia você deseja escolher se especializar?'
                   ,'Mais alguma tecnilogia? Digite "OK" para finalizar.'];
const vRespostas = [] ;
let vAdd = '' ;

while (true){
    vAdd = prompt(vPerguntas[0]);
    if (vAdd > 2) {
        alert('Valor Inválido, tente novamente.')
    } else break
    } ;

if (vAdd == 1){
    vAdd = 'Front-end'
    } else vAdd = 'Back-end' ;

vRespostas.push(vAdd) ;

if (vRespostas[0] == 'Front-end'){
    while (true){
        vAdd = prompt(vPerguntas[1]);
        if (vAdd > 2) {
            alert('Valor Inválido, tente novamente.')
        } else break
        } ;
} else
    while (true){
        vAdd = prompt(vPerguntas[2]);
        if (vAdd > 2) {
            alert('Valor Inválido, tente novamente.')
        } else break
        } ; 
;

if (vRespostas[0] == 'Front-end' && vAdd == 1){
    vAdd = 'React'
    } else if (vRespostas[0] == 'Front-end' && vAdd == 2){
        vAdd = 'Vue'
    } else if (vRespostas[0] == 'Back-end' && vAdd == 1) {
        vAdd = 'C#'
    } else vAdd = 'Java' ;

vRespostas.push(vAdd) ;

while (true){
    vAdd = prompt(vPerguntas[3]);
    if (vAdd > 2) {
        alert('Valor Inválido, tente novamente.')
    } else break
    } ;

if (vAdd == 1){
    vAdd = 'continuar estudando na Área'
    } else vAdd = 'iniciar estudar fullstack' ;

vRespostas.push(vAdd) ;

vRespostas.push(prompt(vPerguntas[4])) ;

while(true){
    vAdd = prompt(vPerguntas[5]) ;
    if (vAdd != 'OK') {
        vRespostas.push(vAdd) ;
    } else break
} ;


alert('Você gostaria de iniciar em ' + vRespostas[0] + ', com a tecnologia ' + vRespostas[1] + ' e vai ' + vRespostas[2] + ' com as tecnologias a seguir: ' + vRespostas.slice(3)) ;