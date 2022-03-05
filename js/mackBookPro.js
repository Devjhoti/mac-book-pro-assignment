//GET BUTTON START
const btn8Gb=document.getElementById('8gb-ram');
const btn16Gb=document.getElementById('16gb-ram');

const ssd256Gb=document.getElementById('ssd-256gb');
const ssd512Gb=document.getElementById('ssd-512gb');
const ssd1Tb=document.getElementById('ssd-1tb');

const freeDelivery=document.getElementById('free-delivery');
const expressDelivery=document.getElementById('express-delivery');
//GET BUTTON END

// COST ELEMENTS START
const extraStorageCost=document.getElementById('extra-storage-cost') ;
const extraMemoryCost=document.getElementById('extra-memory-cost');
const deliveryCharge=document.getElementById('delivery-charge');

const bestPrice=document.getElementById('best-price');
bestPrice.innerText=1299;
let totalPrice=document.getElementById('total-price');
totalPrice.innerText=1299;
let totalPriceDp=document.getElementById('total-dp');
// COST ELEMENT END

// PROMO ELEMENT START
const promoInput=document.getElementById('promo-input');
const promoApplyBtn=document.getElementById('promo-apply-btn');
const promoAlert=document.getElementById('promo-alert');
// PROMO ELEMENT END

// CUSTOM FUNCTIONS START
function getTotalPrice(bestPrice,memoryCost,storageCost,shippingCost){
    let totalPrice=parseInt(bestPrice)+parseInt(memoryCost)+parseInt(storageCost)+parseInt(shippingCost);

    return totalPrice;
}
// CUSTOM FUNCTION ENDS

// EVENT HANDLERS ADDED
btn8Gb.addEventListener('click',function(){
    btn8Gb.style.backgroundColor='rgb(61, 61, 61)';
    btn8Gb.style.color='white';
    btn16Gb.style.backgroundColor='white';
    btn16Gb.style.color='black';

    extraMemoryCost.innerText=0;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})
btn16Gb.addEventListener('click',function(){
    btn16Gb.style.backgroundColor='rgb(61, 61, 61)';
    btn16Gb.style.color='white';
    btn8Gb.style.backgroundColor='white';
    btn8Gb.style.color='black';

    extraMemoryCost.innerText=180;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})
ssd256Gb.addEventListener('click',function(){
    ssd256Gb.style.backgroundColor='rgb(61, 61, 61)';
    ssd256Gb.style.color='white';

    ssd512Gb.style.backgroundColor='white';
    ssd512Gb.style.color='black';

    ssd1Tb.style.backgroundColor='white';
    ssd1Tb.style.color='black';

    extraStorageCost.innerText=0;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})
ssd512Gb.addEventListener('click',function(){
    ssd512Gb.style.backgroundColor='rgb(61, 61, 61)';
    ssd512Gb.style.color='white';

    ssd256Gb.style.backgroundColor='white';
    ssd256Gb.style.color='black';

    ssd1Tb.style.backgroundColor='white';
    ssd1Tb.style.color='black';

    extraStorageCost.innerText=100;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})
ssd1Tb.addEventListener('click',function(){
    ssd1Tb.style.backgroundColor='rgb(61, 61, 61)';
    ssd1Tb.style.color='white';

    ssd512Gb.style.backgroundColor='white';
    ssd512Gb.style.color='black';

    ssd256Gb.style.backgroundColor='white';
    ssd256Gb.style.color='black';

    extraStorageCost.innerText=180;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})
freeDelivery.addEventListener('click',function(){
    freeDelivery.style.backgroundColor='rgb(61, 61, 61)';
    freeDelivery.style.color='white'
    expressDelivery.style.backgroundColor='white';
    expressDelivery.style.color='black';

    deliveryCharge.innerText=0;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})
expressDelivery.addEventListener('click',function(){
    expressDelivery.style.backgroundColor='rgb(61, 61, 61)';
    expressDelivery.style.color='white';

    freeDelivery.style.backgroundColor='white';
    freeDelivery.style.color='black';

    deliveryCharge.innerText=20;

    totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
    totalPrice.innerText=totalPriceDp.innerText;
})

promoApplyBtn.addEventListener('click',function(){
    if(promoInput.value=='stevekaku'){
        totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText)-100;
        totalPrice.innerText=totalPriceDp.innerText;

        document.getElementById('promo-applied').style.display='flex';
        promoAlert.style.display='none';
    }
    else{
        totalPriceDp.innerText=getTotalPrice(bestPrice.innerText,extraMemoryCost.innerText,extraStorageCost.innerText,deliveryCharge.innerText);
        totalPrice.innerText=totalPriceDp.innerText;

        promoAlert.style.display='block';
        document.getElementById('promo-applied').style.display='none';
    }
})