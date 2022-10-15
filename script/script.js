const Result = document.getElementById('result');

// select values and send to the results page
const result = (e) => {
    e.target.classList.add('selected');

    const value = e.target.innerHTML;
    Result.innerHTML = value;
}

const para = [
{id: 'one', command: document.getElementById('one').onclick = result},
{id: 'two', command: document.getElementById('two').onclick = result},
{id: 'three', command: document.getElementById('three').onclick = result},
{id: 'four', command: document.getElementById('four').onclick = result},
{id: 'five', command: document.getElementById('five').onclick = result}
]
// switch pages
const Submit = document.getElementById('submit');
const Thanks = document.getElementById('thanks');
const Home = document.getElementById('home');
const thankYouPage = () => {
    if (Submit.id == 'submit'){
        Thanks.classList.add('show');
        Thanks.classList.remove('hide');
        Home.classList.remove('show');
        Home.classList.add('hide');
    }
}
Submit.addEventListener('click', thankYouPage);