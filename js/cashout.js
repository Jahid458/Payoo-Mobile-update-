document.getElementById('btn-cash-out')
  .addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputFeildValueById('input-cash-out');
    const pinNumber = getInputFeildValueById('input-cash-out-pin');
    console.log("inside the clcik hadeler",cashOut,pinNumber)

  })