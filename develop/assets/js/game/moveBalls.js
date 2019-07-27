import startGame from './pushBalls.js';

function move() {
    let ball = $('.cell');
    let activeBalls = [];
    let a = [];
    let row, coll;

    function validation(row, coll) {

        function checkRow(row, coll) {
            let mass = [];
            for (let i = 0; i < 9; i++) {
                for (let j = i; j < i + 3; j++) {
                    mass.push($('.coll').eq(j).children('.row').eq(row).children('.cell').children('span').attr('class'));
                }
                i += 2;
            }
            for (let a = 1; a < mass.length - 1; a++) {
                if (mass[a] === mass[a - 1] && mass[a - 1] === mass[a + 1]) {
                    startGame();
                } else {
                    console.log(mass[a], mass[a - 1], mass[a + 1])
                }
            }

        }

        // function checkColl() {
        //     coll = $(this).parents('.coll').index();
        // }
        checkRow(row, coll);
    }

    $('.cell').on('click', function() {
        row = $(this).parents('.row').index();
        coll = $(this).parents('.coll').index();

        validation(row, coll);
        a.push($(this));
        $(this).addClass('active');
        activeBalls.push($(this).children('span').attr('class').toString());
        if ($('.active').length === 2) {
            a[0].children('span')
                .removeClass(activeBalls[0])
                .addClass(activeBalls[1]);
            a[1].children('span')
                .removeClass(activeBalls[1])
                .addClass(activeBalls[0]);
            a = [];
            setTimeout(() => {
                $('.cell').removeClass('active');
            }, 600)
            activeBalls = [];
        } else if ($('.active').length > 2) {
            $('.cell').removeClass('active');
            activeBalls = [];
            a = [];
        }
    });


}

export default move;