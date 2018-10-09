var event, ok; 
var userHistory = [];
var userHistoryStep = -1;
var userHistoryIndex = 0;

do {
    do {//Выводим первый вопрос
        ok = false;
        if (userHistoryStep == -1) {
            event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
        } else if (userHistoryStep == userHistoryIndex) {
            alert(works.a00);
            event = -1;
        } else {
            event = userHistory[userHistoryIndex++];
        }
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);

    userHistory.push(event);
    switch (event) {
        case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            do {
                ok = false;
                if (userHistoryStep == -1) {
                    event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
                } else if (userHistoryStep == userHistoryIndex) {
                    alert(works.b00);
                    event = -1;
                } else {
                    event = userHistory[userHistoryIndex++];
                }
                if (event == -1) {
                    break;
                }
                else {
                    ok = isAnswer(works.b0, event);
                }
            } while (!ok);
            userHistory.push(event);
            switch (event) {
                case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                    do {
                        ok = false;
                        if (userHistoryStep == -1) {
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        } else if (userHistoryStep == userHistoryIndex) {
                            alert(works.d00);
                            event = -1;
                        } else {
                            event = userHistory[userHistoryIndex++];
                        }
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);
                    userHistory.push(event);
                    break;
                case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                    do {
                        ok = false;
                        if (userHistoryStep == -1) {
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        } else if (userHistoryStep == userHistoryIndex) {
                            alert(works.d00);
                            event = -1;
                        } else {
                            event = userHistory[userHistoryIndex++];
                        }
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);
                    userHistory.push(event);
                    break;
                case -1: // Второе действие
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
            do {
                ok = false;
                if (userHistoryStep == -1) {
                    event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
                } else if (userHistoryStep == userHistoryIndex) {
                    alert(works.c00);
                    event = -1;
                } else {
                    event = userHistory[userHistoryIndex++];
                }
                if (event == -1) {
                    break;
                }
                else {
                    ok = isAnswer(works.c0, event);
                }
            } while (!ok);
            userHistory.push(event);
            switch (event) {
                case 1: // Второе действие
                    do {
                        ok = false;
                        if (userHistoryStep == -1) {
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        } else if (userHistoryStep == userHistoryIndex) {
                            alert(works.d00);
                            event = -1;
                        } else {
                            event = userHistory[userHistoryIndex++];
                        }
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);
                    userHistory.push(event);
                    break;
                case 2: // Второе действие
                    do {
                        ok = false;
                        if (userHistoryStep == -1) {
                            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                        } else if (userHistoryStep == userHistoryIndex) {
                            alert(works.d00);
                            event = -1;
                        } else {
                            event = userHistory[userHistoryIndex++];
                        }
                        if (event == -1) {
                            break;
                        }
                        else {
                            ok = isAnswer(works.d0, event);
                        }
                    } while (!ok);
                    userHistory.push(event);
                    break;
                case -1: // Второе действие
                    break;
                default:
                    alert('Ошибка');
            }
            break;
        case -1: // Первое действие
            break;
        default:
            alert('Ошибка');
    }
    alert('Спасибо за игру');
    if (event !== -1) {
        do {
            ok = false;
            event = +prompt('Введите номер окна от 1 до ' + userHistory.length + ' или -1 для выхода из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(userHistory.length, event);
                if (ok) {
                    userHistoryStep = event - 1;
                }
            }
        } while (!ok);
    }
} while (event !== -1);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
	return true;
    
}