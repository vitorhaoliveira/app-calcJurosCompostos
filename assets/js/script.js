document.getElementById('bt-calc').addEventListener('click', function() {
   const inputValue = document.getElementById('value').value; 
   const inputFee = (document.getElementById('fee').value) / 100; 
   const inputTime = document.getElementById('time').value; 

   const total = inputValue * (1 + inputFee)**inputTime;

   document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace(".", ","));
});

document.getElementById('bt-clean').addEventListener('click', function() {
   location.reload();
})