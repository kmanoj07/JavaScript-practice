let billTotalinput = document.querySelector('#billTotalInput');
let tipInput = document.querySelector('#tipInput');
let numberOfPeople = document.querySelector('#numberOfPeople');
let perPersonTotal = document.querySelector('#perPersonTotal');

const calculateBill = ()=>{
    const bill = Number(billTotalinput.value);
    const tipPercentage = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercentage;
    const total = tipAmount / Number(numberOfPeople.innerText);

    perPersonTotal.innerText = `$${total.toLocaleString('en-US')}`;
    console.log({total});
}

const increasePeople = ()=> {
    let noOfPeople = Number(numberOfPeople.innerText) + 1;
    numberOfPeople.innerText  = noOfPeople;

    calculateBill();
}

const decreasePeople = ()=> {
    let nuOfPeople = Number(numberOfPeople.innerText);
    if(nuOfPeople > 1){
        nuOfPeople--;
        numberOfPeople.innerText = nuOfPeople;
        calculateBill();
    }
}
