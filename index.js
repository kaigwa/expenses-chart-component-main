// call variables

// var dayData = document.querySelectorAll('.day')

// data fetchin and .then method usage
fetch('data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(week => {
        const expense = `<span>${week.day} ${week.amount}</span>`; 
        document.querySelector('.bars').insertAdjacentHTML('beforebegin', expense)   
        });
    })
    .catch(error => console.log(error));

