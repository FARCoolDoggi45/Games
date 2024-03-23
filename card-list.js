const cardListElement = document.querySelector('.card-list');
const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.card');

function renderCardList(games) {
    for (const game of games) {
        const gameElement = cardTemplate.cloneNode(true);
        gameElement.querySelector('.title').textContent = game.title
        gameElement.querySelector('.genres').textContent = game.genres.join(', ')
        gameElement.querySelector('.publishers').textContent = game.publishers.firstName
        gameElement.querySelector('.date').textContent = game.date
        cardListElement.append(gameElement);
    }
}
