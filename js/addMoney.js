

// console.log('add money')

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
      event.preventDefault();
    console.log('add money btn clicked');

    // getInputFeildValueById();
    // const addMoney = getInputFeildValueById()
    // console.log('Add value is ',addMoney)

      // const addMoney = document.getElementById('input-add-money').value ;
      // const addMOneyNumber = parseFloat(addMoney);

      const addMoney = getInputFeildValueById('input-add-money');
      const pinNumber = getInputFeildValueById('input-pin-number');
      console.log('Add Money with parameter',addMoney,pinNumber);


})