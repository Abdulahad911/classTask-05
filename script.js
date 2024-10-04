
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
    var ageDay =  currentDay - day;
    var ageMonth = currentMonth - month;
if (month < 1 || month > 12) {
    return alert('Invalid month. Enter a value between 1 and 12.');
}
if (day < 1 || day > 31) {
    return alert('Invalid day. Enter a value between 1 and 31.');
}
if (year > currentYear) {
    return alert('Year cannot be in the future.');
}
if (ageDay < 0) {
    ageMonth--;
    var daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    ageDay += daysInPreviousMonth; 
}
if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
}
   yearEl.textContent = currentYear - year;
   monthEl.textContent = ageMonth;
   dayEl.textContent = ageDay ;

    document.getElementById('inputText').value = '';
}
