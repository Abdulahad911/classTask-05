
var today = new Date();
var currentYear = today.getFullYear();

function addingAgeCalculater(){
    
    var inputText = document.getElementById('inputText')
    var inputValue = document.getElementById('inputValue')
    var month = document.getElementById('month')
    var year = document.getElementById('year')
    var day = document.getElementById('day')
    if (!inputText.value.trim()){
              return alert('Invalid format. Please enter the date as mm-dd-yr.')
             }
             if(inputText.value < years)  {
                year.textContent = `${inputText.value} `
                
               }  
              else{
                alert("Year cann't be in future")
              }
              inputText.value = '' 
              if(inputText.value < 13)  {
                month.textContent = inputText.value
               }  
            else{
                return alert('invalid month')
            }
             
             inputText.value = '' 
}  








