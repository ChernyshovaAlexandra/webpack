import startGame from './pushBalls.js'

function validation() {

    let arr = [];
    let mass = [];
    let classes = ['red', 'green', 'blue', 'yellow', 'violet'];
    for (let i = 0; i < 9; i++) {
        arr.push([]);
        mass.push([]);
    }

    for (let i = 0; i < 9; i++) {
        arr[i].push([]);
        mass[i].push([]);
        for (let j = 0; j < 9; j++) {
            arr[i][j] = $('.coll').eq(j).children('.row').eq(i).children('.cell').children('span').attr('class');
            mass[i][j] = $('.coll').eq(i).children('.row').eq(j).children('.cell').children('span').attr('class');
        }
    }

    function checkHorizontal() {
        for (let k = 0; k < arr.length; k++) {
            for (let z = 0; z < arr[k].length; z++) {
                console.log(arr)
                if (arr[k][z + 2] === arr[k][z + 1] && arr[k][z + 1] === arr[k][z]) {
                    // $('.coll').eq(z + 2).children('.row').eq(k).children('.cell').css({ 'border': '3px dotted red' });
                    // $('.coll').eq(z).children('.row').eq(k).children('.cell').css({ 'border': '3px dotted red' });
                    $('.coll').eq(z + 1).children('.row').eq(k).children('.cell')
                        // .css({ 'border': '3px dotted red' })
                        .children('span')
                        .removeClass(arr[k][z + 1])
                        .addClass(classes[classes.indexOf(arr[k][z + 1]) + 1] || classes[0]);
                }
            }
        }
    }

    function checkVertical() {
        for (let k = 0; k < mass.length; k++) {
            for (let z = 0; z < mass[k].length; z++) {
                console.log(mass, 'mass')
                if (mass[k][z + 2] === mass[k][z + 1] && mass[k][z + 1] === mass[k][z]) {
                    $('.coll').eq(z + 2).children('.row').eq(k).children('.cell').css({ 'border': '3px dotted red' });
                    $('.coll').eq(z).children('.row').eq(k).children('.cell').css({ 'border': '3px dotted red' });
                    $('.coll').eq(z + 1).children('.row').eq(k).children('.cell')
                        .css({ 'border': '3px dotted red' })
                        .children('span')
                        // .removeClass(mass[k][z + 1])
                        // .addClass(classes[classes.indexOf(mass[k][z + 1]) + 1] || classes[0]);
                }
            }
        }
    }
    checkHorizontal();
    checkVertical();
}

export default validation;