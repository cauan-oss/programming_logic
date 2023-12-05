const grade = 59
let message = ""
if(grade >= 80){
    message = "Parabens, voce faz parte do grupo de pessoas aprovadas"
} else if( grade < 80 && grade >= 60) {
    message = "Voce esta na nossa lista de espera"
} else if(grade < 60) {
    message = "Infelizmente voce reprovou"
}

console.log(message)