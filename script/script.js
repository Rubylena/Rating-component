const Result = document.getElementById('result');

// select values and send to the results page
const result = (e) => {
    e.target.classList.add('selected');

    const value = e.target.innerHTML;
    Result.innerHTML = value;
}

const para = [
{id: 'one', command: document.getElementById('one').onclick = result},
{'two': document.getElementById('two').onclick = result},
{'three': document.getElementById('three').onclick = result},
{'four': document.getElementById('four').onclick = result},
{'five': document.getElementById('five').onclick = result}
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