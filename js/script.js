var element = document.createElement('div');
element.classList.add('wrapper');
var body = document.querySelector('body');
body.appendChild(element);


var header = document.createElement('h3');
header.classList.add('header');
header.innerHTML = 'Тест по программированию';
var wrapper = document.querySelector('.wrapper');
wrapper.appendChild(header);

var question = {
    text: 'Вопрос №',
    answers: [
        {
            text: 'Вариант ответа №1',
            correct: true
        },
        {
            text: 'Вариант ответа №2',
            correct: true
        },
        {
            text: 'Вариант ответа №3',
            correct: true
        }
    ],
    getQuestion: function (n) {
        var list = '';
        for (var i = 0; i < this.answers.length; i++) {
            list += '<li class="menu"><input type="checkbox" class="checkbox"><label class="label">' + this.answers[i].text + '</label></li>';
        }
        return '<h4>' + this.text + n + '</h4><ul>' + list + '</ul>';
    }
};
for(var i = 1; i < 4; i++) {
            element.innerHTML = element.innerHTML + question.getQuestion(i);
        }
var button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'Проверить мои результаты';
wrapper.appendChild(button);

