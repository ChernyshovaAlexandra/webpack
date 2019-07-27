function startGame() {
    const level = {
        'columns': [6, 15],
        'rows': [6, 15],
        'colors': ['red', 'green', 'blue', 'yellow', 'violet']
    };

    function getRandomArbitrary(min, max, elem) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let a = getRandomArbitrary(level['rows'][0], level['rows'][level['rows'].length - 1]);
    let b = getRandomArbitrary(level['columns'][0], level['columns'][level['columns'].length - 1]);

    for (let i = 0; i < b; i++) {
        $('.area').append('<div class="coll"></div>');
    }
    for (let i = 0; i < b; i++) {
        for (let z = 0; z < a; z++) {
            $('.coll').eq(i).append('<div class="row"><div class="cell"></div></div>');
        }
    }

    let cell = document.getElementsByClassName('cell');


    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
        let k;
        let cellSpan = document.createElement('span');
        k = getRandomArbitrary(0, 5);
        cellSpan.classList.add(level['colors'][k]);
        cell[i].appendChild(cellSpan);
    }
}

export default startGame;