document.getElementById('btn-add-money')
  .addEventListener('click',function(event){
      event.preventDefault();

      const addMoney = getInputFeildValueById('input-add-money');
      const pinNumber = getInputFeildValueById('input-pin-number');
      //wrong way to deliver do not try serious issue
      if(pinNumber === 1234){
          const balance = getTextFeildValueById('account-balance');
          const newbalance = balance + addMoney; 
          document.getElementById("account-balance").innerText = newbalance;


      }else{
        alert('Failed to Add money')
      }

  })