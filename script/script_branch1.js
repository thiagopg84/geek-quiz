(function startGeekQuiz() {
    // objetos perguntas dentro de uma array
    const quizQuestions = [
        // logos
        {
            id: 'question01',
            photo: 'img/q1.jpg',
            questionType: 'input',
            question: 'Which console is this logo from?',
            answer: '3DO',
            dicas: [],
            availableAnswers: {}
        },
        {
            id: 'question02',
            photo: 'img/q2.jpg',
            questionType: 'multiChoice',
            question: 'Which console is this logo from?',
            answer: 'c',
            dicas: [],
            availableAnswers: {
                a: 'Nintendo GameCube',
                b: 'Virtual Boy',
                c: 'Nintendo 64',
                d: 'Ultra 64'
            }
        },
        {
            id: 'question03',
            photo: 'img/q3.jpg',
            questionType: 'input',
            question: 'Which game developer is this logo from?',
            answer: 'KONAMI',
            dicas: [],
            availableAnswers: {}
        },
        {
            id: 'question04',
            photo: 'img/q4.jpg',
            questionType: 'multiChoice',
            question: 'Which game producer is this logo from?',
            answer: 'a',
            dicas: [],
            availableAnswers: {
                a: 'Jaleco',
                b: 'Natsume',
                c: 'Kaneko',
                d: 'Takara'
            }
        },
        {
            id: 'question05',
            photo: 'img/q5.jpg',
            questionType: 'input',
            question: 'Which game producer is this logo from?',
            answer: 'CAPCOM',
            dicas: [],
            availableAnswers: {}
        },
        
        // consoles
        {
            id: 'question06',
            photo: 'img/q6.jpg',
            questionType: 'multiChoice',
            question: 'Which console is this joystick from?',
            answer: 'c',
            dicas: [],
            availableAnswers: {
                a: 'Mega Drive (Genesis)',
                b: 'DreamCast',
                c: '3DO',
                d: 'Amiga CD32'
            }
        },
        {
            id: 'question07',
            photo: 'img/q7.jpg',
            questionType: 'multiChoice',
            question: 'What console is this?',
            answer: 'a',
            dicas: [],
            availableAnswers: {
                a: 'Atari Jaguar',
                b: 'NeoGeo',
                c: 'Sega Saturn',
                d: 'TurboDuo'
            }
        },
        {
            id: 'question08',
            photo: 'img/q8.jpg',
            questionType: 'multiChoice',
            question: 'What console is this?',
            answer: 'b',
            dicas: [],
            availableAnswers: {
                a: 'Sega SG',
                b: 'Master System',
                c: 'Mega Drive (Genesis)',
                d: 'Commodore 64GS'
            }
        },
        {
            id: 'question09',
            photo: 'img/q9.jpg',
            questionType: 'multiChoice',
            question: 'What console is this?',
            answer: 'd',
            dicas: [],
            availableAnswers: {
                a: 'Dreamcast',
                b: 'Sega 32X',
                c: 'TurboDuo',
                d: 'NeoGeo'
            }
        },
        {
            id: 'question10',
            photo: 'img/q10.jpg',
            questionType: 'multiChoice',
            question: 'What console is this?',
            answer: 'c',
            dicas: [],
            availableAnswers: {
                a: 'Game Boy',
                b: 'NeoGeo Pocket',
                c: 'Game Gear',
                d: 'PSP'
            }
        },
        // portraits
        {
            id: 'question11',
            photo: 'img/q11.jpg',
            questionType: 'multiChoice',
            question: 'What is the name of this character?',
            answer: 'd',
            dicas: [],
            availableAnswers: {
                a: 'Steve',
                b: 'Billy',
                c: 'Cormano',
                d: 'Bob'
            }
        },
        {
            id: 'question12',
            photo: 'img/q12.jpg',
            questionType: 'multiChoice',
            question: 'Which game does this character belong to?',
            answer: 'b',
            dicas: [],
            availableAnswers: {
                a: 'Final Fight 2',
                b: 'Real Bout Fatal Fury 2: The Newcomers',
                c: 'Saturday Night Slam masters',
                d: 'Art of Fighting'
            }
        },
        {
            id: 'question13',
            photo: 'img/q13.jpg',
            questionType: 'multiChoice',
            question: 'Which game does this character belong to?',
            answer: 'a',
            dicas: [],
            availableAnswers: {
                a: 'Skate or Die',
                b: 'Renegade',
                c: 'Vigilante',
                d: 'California Games'
            }
        },
        {
            id: 'question14',
            photo: 'img/q14.jpg',
            questionType: 'multiChoice',
            question: 'What is the name of this character?',
            answer: 'd',
            dicas: [],
            availableAnswers: {
                a: 'Brocken',
                b: 'The General',
                c: 'Rolento',
                d: 'M. Bison'
            }
        },
        {
            id: 'question15',
            photo: 'img/q15.jpg',
            questionType: 'multiChoice',
            question: 'What is the name of this character?',
            answer: 'a',
            dicas: [],
            availableAnswers: {
                a: 'Skate',
                b: 'Wheels',
                c: 'Wheeler',
                d: 'Blade'
            }
        }
    ];
    
    // output para jogar o html gerado a partir das perguntas e alternativas
    const questionsHTML = [];

    // div que vai conter o html do 'questionsHTML'
    const container = document.querySelector('.container');
    
    // função para gerar as perguntas e suas respectivas alternativas
    quizQuestions.forEach((currentQuestion, questionNumber) => {

        // array para gerar as alternativas de cada pergunta
        const questions = [];

        // se a pergunta for do tipo multiChoice...
        if (currentQuestion.questionType == 'multiChoice') {

            // para cada alternativa nas respostas disponíveis...
            for(letter in currentQuestion.availableAnswers){

                // jogar na array 'questions'
                questions.push(
                    `<input type="button" data-value="${letter}" id="${currentQuestion.id}-${letter}" value="${currentQuestion.availableAnswers[letter]}" class="button-options" belongs-to="${currentQuestion.id}">`
                );  
            }

            // jogar na array questionsHTML todos os divs .card (onde as perguntas estarão) e o conteúdo da array 'question' (que agora contém todas as alternativas);
            questionsHTML.push(
                `<div class="card">
                    <picture>
                        <img src="${currentQuestion.photo}">
                    </picture>
                    <h1>${questionNumber + 1}) ${currentQuestion.question}</h1>
                    <div class="answers">${questions.join("")}</div>
                </div>`
            )

        // se for do tipo <input type="textarea">
        } else {

            // se a pergunta em questão não tem foto... 
            if (currentQuestion.photo == '') {
                questionsHTML.push(
                    `<div class="card">
                        <h1>${questionNumber + 1}) ${currentQuestion.question}</h1>
                        <p><input type="textarea" id="${currentQuestion.id}-input" belongs-to="${currentQuestion.id}" class="inputarea"></input></p>
                        <input type="button" value="Submit" id="${currentQuestion.id}-submit" belongs-to="${currentQuestion.id}" class="submit-btns">
                    </div>`
                )

            // se tem foto...
            } else {
                questionsHTML.push(
                    `<div class="card">
                        <picture>
                            <img src="${currentQuestion.photo}">
                        </picture>
                        <h1>${questionNumber + 1}) ${currentQuestion.question}</h1>
                        <p><input type="textarea" id="${currentQuestion.id}-input" belongs-to="${currentQuestion.id}" class="inputarea"></input></p>
                        <input type="button" value="Submit" id="${currentQuestion.id}-submit" belongs-to="${currentQuestion.id}" class="submit-btns">
                    </div>`
                )
            }
        }
    })

    // joga na div .container todo o conteúdo criado pelas funções acima
    let buildQuiz = () => {
        container.innerHTML = questionsHTML.join("");
        container.innerHTML += `
            <div class="vazio hide" id="vazio">
                <p>Digite algo :(</p>
            </div>
        `
    }
    buildQuiz();
    

    // todos os botões das questões tipo multiChoice
    const multiChoiceQuestions = document.querySelectorAll('.button-options');

    // todas as areas de texto
    const inputTextQuestions = document.querySelectorAll('.inputarea');

    // todos os botões das questões tipo input textarea
    const submitBtns = document.querySelectorAll('.submit-btns');

    // o pop-up que aparece quando os input textarea estão vazios e clicamos em 'enviar'
    const popUp = document.querySelector('#vazio');

    // todos os divs .card (cada pergunta, na prática)
    const cards = document.querySelectorAll('.card');

    // esconder todas as perguntas
    cards.forEach((e) => {
        e.classList.add('hidden', 'no-opacity');
    });

    // variável para controle de quantas questões foram respondidas
    let answeredQuestions = 0;

    // score do jogador
    let score = 0;

    // função para desabilitar os botões logo após a pergunta for respondida
    const disableButtons = function(button, i) {
        button.forEach((f) => {
            if(f.getAttribute('belongs-to') == quizQuestions[i].id) {
                f.setAttribute('disabled', 'true');
                if (f.classList.contains('button-options')) {
                    f.classList.remove('button-options')
                } else {
                    f.classList.remove('submit-btns')
                }                
                f.classList.add('disabled');
            }
        })
    };

    // essa função controla o fluxo das perguntas (esconde a respondida e mostra a próxima, além de dizer que o jogo acabou)
    const gameOutput = () => {
        if (answeredQuestions < quizQuestions.length) {
            setTimeout(() => {
                cards[answeredQuestions -1].classList.add('no-opacity');
            }, 300);
            setTimeout(function() {
                cards[answeredQuestions -1].classList.add('hidden');                
                cards[answeredQuestions].classList.remove('hidden');
                setTimeout(() => {
                    cards[answeredQuestions].classList.remove('no-opacity');
                }, 100);
            }, 450)
        } else {
            setTimeout(() => {
                cards[answeredQuestions -1].classList.add('no-opacity');
            }, 200);
            setTimeout(() => {
                cards[answeredQuestions -1].classList.add('hidden');
            }, 500);
            setTimeout(function() {
                
                container.innerHTML += `
                <div class="final">
                    <h2>Game Over!</h2>
                    <p id="finalScore">Your final score is ${score} / ${quizQuestions.length}!</p>
                    <input type="button" name="resetBtn" id="resetBtn" value="Play again">
                </div>
            `;

                const resetBtn = document.querySelector('#resetBtn');
                resetBtn.addEventListener('click', () => {
                    startGeekQuiz();
                })
            }, 600) 
        }
    };
    const assignBtns = () => {

        // loop para definir os eventos de click nos botões e incrementar o score e a quantidade de perguntas respondidas
        for (let i = 0; i < quizQuestions.length; i++) {
            
            // loop aninhado para pegar todas as questões tipo multiChoice
            for (let f = 0; f < multiChoiceQuestions.length; f++) {
                multiChoiceQuestions[f].addEventListener('click', () => {
                   
                    // se o botão corresponde à questão[i]...
                    if (multiChoiceQuestions[f].getAttribute('belongs-to') == quizQuestions[i].id) {
                      
                        //se a resposta for igual à resposta indicada no objeto...
                        if (multiChoiceQuestions[f].getAttribute('data-value') == quizQuestions[i].answer) {
                            console.log('acertou');
                            score++;
                            console.log('o score é ' + score)
                       
                            // adiciona classe css indicativa de acerto
                            multiChoiceQuestions[f].classList.add('correct');
                        } else {
                            console.log('errou');
                       
                            // adiciona classe css indicativa de erro
                            multiChoiceQuestions[f].classList.add('incorrect');
                        };
                        answeredQuestions++;
                        console.log(`respondidas: ${answeredQuestions}`);
                      
                        // função de desabilitar os botões
                        disableButtons(multiChoiceQuestions, i);
                     
                        // essa função controla o fluxo das perguntas (esconde a respondida e mostra a próxima, além de dizer que o jogo acabou) 
                        gameOutput();
                    };
                });
            }
            
            // loop aninhado para pegar todas as questões tipo input textarea
            for (let z = 0; z < submitBtns.length; z++) {
              
                // se o botão corresponde à questão[i]...
                if (submitBtns[z].getAttribute('belongs-to') == quizQuestions[i].id) {
                    submitBtns[z].addEventListener('click', () => {
                   
                        // se o input textarea estiver vazio...
                        if (inputTextQuestions[z].value.trim() == '') {
                         
                            // o pop-up aparece por 1.75s
                            popUp.classList.remove('hide');
                            setTimeout(function () {
                                popUp.classList.add('hide');
                            }, 1750);
                        } else {
                       
                            //se a resposta for igual à resposta indicada no objeto...
                            if (inputTextQuestions[z].value.toUpperCase() == quizQuestions[i].answer) {
                                console.log('acertou');
                                score++;
                                console.log('o score é ' + score)
                           
                                // adiciona classe css indicativa de acerto
                                submitBtns[z].classList.add('correct');
                            } else {
                                console.log('errou');                            
                                submitBtns[z].classList.add('incorrect');
                            }
                            answeredQuestions++;
                          
                            // função de desabilitar os botões
                            disableButtons(submitBtns, i);
                          
                            // desabilita o textarea
                            inputTextQuestions[z].setAttribute('disabled', 'true');
                          
                            // essa função controla o fluxo das perguntas (esconde a respondida e mostra a próxima, além de dizer que o jogo acabou) 
                            gameOutput();
                            
                            console.log(answeredQuestions);
                        }
                    })
                }
            }
        };
    }
    assignBtns();
    
    // mostrar a primeira pergunta para começar o jogo
    setTimeout(() => {
        cards[0].classList.remove('no-opacity');    
    }, 125);
    cards[0].classList.remove('hidden');
})();