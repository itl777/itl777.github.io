let user_input = document.getElementById('user_input')
let submit = document.getElementById('submit')
let No_1 = document.getElementById('No_1')
let No_2 = document.getElementById('No_2')
let No_3 = document.getElementById('No_3')
let pass = document.getElementById('pass')
let fail = document.getElementById('fail')

const chicken = new RegExp('chicken')
const flex = new RegExp('flex')
const grid = new RegExp('grid:3/2/4/3')
const insect = new RegExp('🐛')

let flex_ans = false;
let chicken_ans = false;



submit.addEventListener('click', function () {
    gameStart()
})

function gameStart() {
    setTimeout(function () {
        fail.style.display = 'block'
        user_input.disabled = true
        submit.disabled = true
    }, 60000)


    if (user_input.value !== '') {
        //呼叫下一關
        No_1.style.display = 'block'
    }
    if (flex.exec(user_input.value)) {
        flex_ans = true;
        // 呼叫第下關
        No_2.style.display = 'block'

        No_1.style.backgroundColor = '#FFEDAB'
    } else {
        No_1.style.backgroundColor = 'lightpink'
    }

    if (chicken.exec(user_input.value)) {
        chicken_ans = true;
        // 呼叫第下關
        No_3.style.display = 'block'
        //把雞放入textarea
        addChicken()
        No_2.style.backgroundColor = '#FFEDAB'
    } else {
        No_2.style.backgroundColor = 'lightpink'
    }

    if (grid.exec(user_input.value)) {
        No_3.style.backgroundColor = '#FFEDAB'

        // 成功設定
        if (flex_ans && chicken_ans) {
            pass.style.display = 'block'
            user_input.disabled = true
        }
    } else {
        No_3.style.backgroundColor = 'lightpink'
    }
}


function addChicken() {
    const getChicken = new RegExp('🐔')
    if (!getChicken.exec(user_input.value)) {
        user_input.value = user_input.value + '🐔🐛🐛'
    }
    setInterval(function () {
        if (insect.exec(user_input.value)) {
            // 刪除蟲蟲
            let insect_index = user_input.value.indexOf('🐛')
            if (insect_index > 0) {
                user_input.value = user_input.value.substring(0, insect_index) + 'X' + user_input.value.substring(insect_index + 2);

            }
        } else {
            fail.style.display = 'block'
            user_input.disabled = true
            submit.disabled = true
        }

    }, 10000)
}