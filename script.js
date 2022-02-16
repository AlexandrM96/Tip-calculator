let chequeSumm = document.querySelector('.form__input1');
let percentSumm = document.querySelector('.form__input2');
let numberPeople = document.querySelector('.form__input3');
let invoiceButton = document.querySelector('.form__button_main');
 let resetButton = document.querySelector( '.form__button');
 
 //Вычисление суммы процента от суммы чека
 function calculateTips1(chequeSum, percentSum) {
     let summTipsPeople = percentSum / 100 * chequeSum; 
   return summTipsPeople;
 }


    //Деление суммы процента чаевых на количество людей
    function calculateTips2(chequeSum, percentSum, peopleSum) {
        let tips = (percentSum / 100 * chequeSum) / peopleSum;
       return tips;
       
    }


    //Вывод результата счета чаевых в итоговые значения
function printMessage(summ1, summ2) {
 document.querySelector('.results__value1').innerText = summ2 + "₽";
 document.querySelector('.results__value2').innerText = summ1 + "₽";
}
  
 //Работа кнопки "Посчитать"
function resultClick() {
  let cheque = parseInt(chequeSumm.value); 
  let percent = parseInt(percentSumm.value); 
  let people = parseInt(numberPeople.value); 
  let tipsTotal = calculateTips1( cheque, percent);
  let tipsTotal2 = calculateTips2( cheque, percent, people);
     printMessage(tipsTotal, tipsTotal2); 
     
}

invoiceButton.addEventListener('click', resultClick);

//Работа кнопки "Сбросить"
function resultReset(){
    chequeSumm.value = '' ;
    percentSumm.value = '' ;
    numberPeople.value = '' ;
   tipsTotal = '' ;
   printMessage('___', '___'); // либо
 //document.querySelector('.results__value1').innerText = '___₽';
 //document.querySelector('.results__value2').innerText = '___₽';
}

resetButton.addEventListener('click', resultReset);
