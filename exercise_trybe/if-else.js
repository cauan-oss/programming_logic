const beenPrice = 10;
const totalMoney = 9;
const message = '';
const surplus = totalMoney - beenPrice;
if(totalMoney < beenPrice){
    console.log(`nao vou comprar pois me falta ${surplus} reais`)
} else {

    console.log(`eu compro, e ainda me sobra ${surplus} reais`)
}