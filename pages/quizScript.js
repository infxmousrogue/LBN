(function() {


    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" class="x-radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
                    <blockquote class="bg-primary-alt question">
                    <div class="h3 mb-2">${currentQuestion.question}</div>
                    

                    </a>
                </blockquote>
              <div class="answers"> ${answers.join("")} </div>
   
            </div>
           `
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    // getElementById("teller").style.display = "none"

    function showResults() {



        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let fc3 = 0;

        let fcpuntentelling = 0;
        let gttpuntentelling = 0;
        let mttpuntentelling = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.FCPunten3) {
                // add to the number of correct answers
                fcpuntentelling = fcpuntentelling + 3;



            }
            // if answer is wrong or blank
            else if (userAnswer === currentQuestion.FCPunten1) {
                // color the answers red
                fcpuntentelling = fcpuntentelling + 1;

            }

            // if answer is correct
            if (userAnswer === currentQuestion.GTTPunten3) {
                // add to the number of correct answers
                gttpuntentelling = gttpuntentelling + 3;

                // color the answers green

            }
            // if answer is wrong or blank
            else if (userAnswer === currentQuestion.GTTPunten1) {
                // color the answers red
                gttpuntentelling = gttpuntentelling + 1;

            }

            // if answer is correct
            if (userAnswer === currentQuestion.MTTPunten3) {
                // add to the number of correct answers
                mttpuntentelling = mttpuntentelling + 3;

                // color the answers green

            }
            // if answer is wrong or blank
            else if (userAnswer === currentQuestion.MTTPunten1) {
                // color the answers red
                mttpuntentelling = mttpuntentelling + 1;

            }



            var adviesSectie = document.getElementById("advies");
            var vragenSectie = document.getElementById("vragensectie");
            adviesSectie.style.display = "block";
            vragenSectie.style.display = "none";

        });

        // show number of correct answers out of total


        document.getElementById("vragenResultaat").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
    }

    function showSlide(n) {

        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        // if (currentSlide === 0) {
        //     previousButton.style.display = 'none';
        // } else {
        //     previousButton.style.display = 'inline-block';
        // }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }





    function showNextSlide() {


        var alreadyNext = false



        const answerContainers = quizContainer.querySelectorAll('.answers');
        // find selected answer
        const answerContainer = answerContainers[4];
        const selector = `input[name=question${4}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;




        if (currentSlide === 4 && userAnswer === "a") {
            showSlide(8);

            alreadyNext = true;
        }

        if (currentSlide === 11 && userAnswer === "c") {
            showSlide(13);
            alreadyNext = true;
        } else if (currentSlide === 11) {
            showSlide(12);
            alreadyNext = true;
        }

        if (alreadyNext === false) {
            showSlide(currentSlide + 1)
        }

    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: "0. Wat is het doel wat u middels Track & Trace wil bereiken?  ",
            answers: {
                a: "Ik wil weten wanneer mijn goederen zijn aangekomen bij de klant",
                b: "Ik wil milestones updates over mijn goederen",
                c: "Ik wil al mijn goederen van begin tot einde Tracken en Tracen",
                d: "Ik wil de exacte locatie weten van mijn goederen die via land, zee of lucht gaan",
                e: "Ik wil de collaboratie tussen het bedrijf en de vervoerders automatiseren"
            },
            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        },
        {
            question: "1. Maakt u al gebruik van SAP-oplossingen?",
            answers: {
                a: "Ja",
                b: "Nee",
                c: "Ja en nee"
            },
            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        },
        {
            question: "2. Van welke SAP-oplossingen maakt u gebruik?",
            answers: {
                a: "Transportation Management Basic ",
                b: "Transportation Management Advanced ",
                c: "SAP ECC ",
                d: "SAP S/4HANA "
            },
            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        },
        {
            question: "3. Van welke non-SAP systemen maakt u gebruik?",
            answers: {
                a: "Transportation Management Basic ",
                b: "Transportation Management Advanced ",
                c: "SAP ECC ",
                d: "SAP S/4HANA "
            },
            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        },
        {
            question: "4. Op welk niveau wilt u goederen in uw supply chain tracken??",
            answers: {
                a: "GTT ",
                b: "FCC",
                c: "FC"
            },
            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        },
        {
            question: "5. Ik wil middels de oplossing de contracten en facturatie regelen",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            FCPunten3: "a",
            FCPunten1: "b",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "6. Ik wil dat carriers zelf een afspraak kunnen inplannen om de goederen op te halen of af te leveren ",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },

            FCPunten3: "a",
            FCPunten1: "b",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "7. Ik wil gemaakte logistieke kosten automatisch kunnen koppelen aan een project zodat overzichtelijk blijft hoeveel kosten er gemaakt worden per project ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            FCPunten3: "a",
            FCPunten1: "b",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "8. Ik wil de flexibiliteit om zelf tracking scenario’s te kunnen uitwerken ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            FCPunten3: "a",
            FCPunten1: "b",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "9. Ik wil documenten (zoals in welke container de goederen op een schip staan) kunnen koppelen aan de opdracht (sales order, purchase order etc)",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            GTTPunten3: "a",
            GTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "10. Ik wil zien wat voor effect supply chain gebeurtenissen hebben op mijn verschillende shipments ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            GTTPunten3: "a",
            GTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "11. Ik wil de stakeholders notificeren over veranderingen in het proces",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            GTTPunten3: "a",
            GTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "12. Hoe wil u de stakeholders notificeren van verandering in het proces?",
            answers: {
                a: "Ze een tracking link sturen zodat ze de order zelf kunnen volgen ",
                b: "Informatie updates sturen naar aanleiding van vertragingen of versnellingen in de Supply Chain ",
                c: "Ik wil dat event updates worden doorgestuurd naar de klant "
            },
            GTTPunten3: "a",
            GTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"


        },
        {
            question: "13. Ik wil bijhouden waar elk(e) grondstof, dier, vis of ingrediënt vandaan komt ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            GTTPunten3: "a",
            GTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "14. Ik wil alle stappen in het supply chain proces vast te leggen in de blockchain zodat eindgebruikers kunnen zien of het product duurzaam is ontwikkeld",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            MTTPunten3: "a",
            MTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z"

        },
        {
            question: "15. Ik wil voor mijn klanten zichtbaarheid creëren van grondstof tot eindproduct",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            MTTPunten3: "a",
            MTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z"

        },
        {
            question: "16. Maakt u nu gebruik van vaste vervoerders? ",
            answers: {
                a: "Ja",
                b: "Nee",
                c: "Nog niet, wil hier wel naartoe"
            },
            MTTPunten3: "a",
            MTTPunten1: "b",

            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z"


        },
        {
            question: "17. Hoe vervoert u nu uw producten?",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            nulPunten: "c",

            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"

        },
        {
            question: "18. Ik wil in de toekomstige situatie gebruik maken van mijn bestaande vervoerders",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            nulPunten: "c",

            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        },
        {
            question: "19. Hoe wil u dan vervoerders selecteren?",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },


            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "z",
            GTTPunten1: "z",
            MTTPunten3: "z",
            MTTPunten1: "z"
        }



    ];

    const freightQuestions = [{
            question: "5. Ik wil middels de oplossing de contracten en facturatie regelen",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "6. Ik wil dat carriers zelf een afspraak kunnen inplannen om de goederen op te halen of af te leveren ",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "7. Ik wil gemaakte logistieke kosten automatisch kunnen koppelen aan een project zodat overzichtelijk blijft hoeveel kosten er gemaakt worden per project ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        }


    ];

    const GlobalTandT = [{
            question: "8. Ik wil de flexibiliteit om zelf tracking scenario’s te kunnen uitwerken ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "9. Ik wil documenten (zoals in welke container de goederen op een schip staan) kunnen koppelen aan de opdracht (sales order, purchase order etc)",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "10. Ik wil zien wat voor effect supply chain gebeurtenissen hebben op mijn verschillende shipments ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "11. Ik wil de stakeholders notificeren over veranderingen in het proces",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "12. Hoe wil u de stakeholders notificeren van verandering in het proces?",
            answers: {
                a: "Ze een tracking link sturen zodat ze de order zelf kunnen volgen ",
                b: "Informatie updates sturen naar aanleiding van vertragingen of versnellingen in de Supply Chain ",
                c: "Ik wil dat event updates worden doorgestuurd naar de klant "
            },
            correctAnswer: "c"
        },
    ];

    const MaterialTr = [{
            question: "13. Ik wil bijhouden waar elk(e) grondstof, dier, vis of ingrediënt vandaan komt ",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "14. Ik wil alle stappen in het supply chain proces vast te leggen in de blockchain zodat eindgebruikers kunnen zien of het product duurzaam is ontwikkeld",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "15. Ik wil voor mijn klanten zichtbaarheid creëren van grondstof tot eindproduct",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        }
    ];

    const eindVragen = [{
            question: "16. Maakt u nu gebruik van vaste vervoerders? ",
            answers: {
                a: "Ja",
                b: "Nee",
                c: "Nog niet, wil hier wel naartoe"
            },
            correctAnswer: "c"
        },
        {
            question: "17. Hoe vervoert u nu uw producten?",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "18. Ik wil in de toekomstige situatie gebruik maken van mijn bestaande vervoerders",
            answers: {
                a: "Eens",
                b: "Neutraal ",
                c: "Oneens"
            },
            correctAnswer: "c"
        },
        {
            question: "19. Hoe wil u dan vervoerders selecteren?",
            answers: {
                a: "Eens",
                b: "Neutraal",
                c: "Oneens"
            },
            correctAnswer: "c"
        }


    ];

    // Kick things off
    buildQuiz();

    // Pagination
    // const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");

    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    // previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();