
function addingAgeCalculater() {
    var inputText = document.getElementById('inputText').value.trim();
    var yearEl = document.getElementById('year');
    var monthEl = document.getElementById('month');
    var dayEl = document.getElementById('day');
    

    var parts = inputText.split('-');
    if (parts.length !== 3) {
        return alert('Invalid format. Please enter the date as mm-dd-yr.');
    }

    var month = Number(parts[0]);
    var day = Number(parts[1]);
    var year = Number(parts[2]);

    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        return alert('Invalid date. Please enter numbers in the format mm-dd-yr.');
    }

    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1;
    var currentDay = today.getDate();
    
if (month < 1 || month > 12) {
    return alert('Invalid month. Enter a value between 1 and 12.');
}
if (day < 1 || day > 31) {
    return alert('Invalid day. Enter a value between 1 and 31.');
}
if (year > currentYear) {
    return alert('Year cannot be in the future.');
}
   
    document.getElementById('inputText').value = '';
}
