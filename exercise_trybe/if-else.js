const beenPrice = 10;
const totalMoney = 9;
let message = '';
const surplus = totalMoney - beenPrice;
if(totalMoney < beenPrice){
    message = `nao vou comprar pois me falta ${surplus} reais`
} else {

    message = `eu compro, e ainda me sobra ${surplus} reais`
}

console.log(message)