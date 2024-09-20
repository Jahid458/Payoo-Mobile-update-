document.getElementById('btn-cash-out')
  .addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputFeildValueById('input-cash-out');
    const pinNumber = getInputFeildValueById('input-cash-out-pin');
    // console.log("inside the clcik hadaler",cashOut,pinNumber)
    if(pinNumber === 1234){
        const balance = getTextFeildValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
      alert('No Money for you .....')
    }

  })