function addingAgeCalculater(){
    var inputText = document.getElementById('inputText')
    var inputValue = document.getElementById('inputValue')
    if (!inputText.value.trim()){
              return alert('Enter your age to calculate.')
             }
             var li = document.createElement('li')
             li.textContent = inputText.value;
             inputValue.appendChild(li); 
             li.className = 'listItem'
             inputText.value = ''     
}  








