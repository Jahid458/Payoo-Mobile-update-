function getInputFeildValueById(id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFeildValueById(id){
    const textValue = document.getElementById(id).innerText ;
    const textNumber = parseFloat(textValue)
    return textNumber;

}


function showSectionById(id){
  //hidec all the sections 
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-section').classList.add('hidden');
    //show the sections the provided id as parameter
    document.getElementById(id).classList.remove('hidden');

}