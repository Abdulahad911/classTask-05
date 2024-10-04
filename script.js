
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

    document.getElementById('inputText').value = '';
}
