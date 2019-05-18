const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo-niobio-cash.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'balance.txt', true);
request.onload = function () {
  var data = this.response;
  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const h1 = document.createElement('h1');
    h1.textContent = "Saldo da Carteira de Pesquisa - Balance of Research's Wallet";
    const p = document.createElement('p');
    p.textContent = data + ' NBR';

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
