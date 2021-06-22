(function() {

    var a = 0;
    var b = 0;
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
                    if (questionNumber == 0) {
                        answers.push(
                            `<label>
                    <input type="checkbox"   class="x-checkbox" name="question${questionNumber}" value="${letter}">
                    ${""} 
                    ${currentQuestion.answers[letter]}
                  </label>`
                        );
                    } else if (questionNumber == 3) {


                        if (a == 0) {
                            answers.push(
                                `<label>
                       <textarea class="form-control" style="width: 30em; height: 10em;" id="textarea-example-1" rows="3" spellcheck="false"></textarea>
                        
                      </label>`
                            );

                            a++
                        }

                    } else if (questionNumber == 17) {


                        if (b == 0) {
                            answers.push(
                                `<label>
                       <textarea class="form-control" style="width: 30em; height: 10em;" id="textarea-example-1" rows="3" spellcheck="false"></textarea>
                        
                      </label>`
                            );

                            b++
                        }

                    } else {
                        answers.push(
                            `<label>
                    <input type="radio"   class="x-radio" name="question${questionNumber}" value="${letter}">
                    ${""} 
                    ${currentQuestion.answers[letter]}
                  </label>`
                        );
                    }

                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide" >
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



    function showResults() {

        var progress = document.getElementById("progressContainer").style.display = "none";

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
            var salesSectie = document.getElementById("salesSectie")
            var buttons = document.getElementById("footer")
            var buttons2 = document.getElementById("aButtons")
            adviesSectie.style.display = "block";
            salesSectie.style.display = "block";
            vragenSectie.style.display = "none";
            buttons.style.display = "none";
            buttons2.style.display = "none";



        });




        // Adviezen met twee condities --------------------------------------------------------------------------------------------


        // D2 - FC 5 tm 8 gtt 7 tm 11
        if (fcpuntentelling > 4 && gttpuntentelling > 6) {
            document.getElementById("Advice").innerText = "Een combinatie van SAP Logistics Business Network – Freight Collaboration + Global Track & Trace sluit het beste aan bij uw situatie. Hierbij kunt u gebruik maken van zowel de contracten en facturatie als het zelf opstellen van tracking scenario’s. Benieuwd hoe u deze combinatie inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // D4 - FC 5 tm 8 GTT 12
        if (fcpuntentelling > 4 && gttpuntentelling == 12) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Global Track & Trace is voor u een slimme optie. Ons advies: combineer het met SAP Logistics Business Network – Freight Collaboration. U maakt dan uw goederenstroom inzichtelijk én heeft de volledige vrijheid en flexibiliteit om zelf tracking scenario’s te maken. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // D3 - FC 9 GTT 7 tm 11
        if (fcpuntentelling == 9 && gttpuntentelling > 6) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network - Freight collaboration is voor u een slimme optie. Ons advies: combineer het met SAP Logistics Business Network – Global Track & Trace. Deze oplossing past namelijk ook bij uw wensen om de contracten en facturatie middels SAP Logistics Business Network te regelen. Omdat dit ook aansluit op uw wensen. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // G2 FC & MT 5 t/m 8 punten 
        if (fcpuntentelling > 4 && mttpuntentelling > 4) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Freight Collaboration & Material Traceability bevelen wij u aan. Hiermee kun u zichtbaarheid creëren voor de eindgebruiker en op een handige manier de kosten afhandelen. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // H4 MT 9 punten GTT 7 t/m 11 punten   
        if (mttpuntentelling == 9 && gttpuntentelling > 6) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Material Traceability is een zeer geschikte optie voor u. Dit kunt u dan gebruiken in combinatie met Global Track & Trace. Bij het gebruik van deze twee oplossingen kunt u uw producten volgen over de gehele goederenstroom. Benieuwd hoe u deze combinatie inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }


        // G3 FC 5 t/m 8 punten MT 9 punten
        if (fcpuntentelling > 4 && mttpuntentelling == 9) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Material Traceability is een slimme optie voor u. Dit adviseren wij in combinatie met Freight Collaboration. Op deze manier kunt u de kosten afhandeling ook gemakkelijk via SAP Logistics Business Network regelen. Wij zouden u graag helpen bij het implementeren van deze oplossingen binnen uw bedrijf. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // G4 FC 9 punten MT 5 t/m 8 punten 
        if (fcpuntentelling == 9 && mttpuntentelling > 4) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Freight Collaboration is een zeer geschikte optie voor u. Dit adviseren wij in combinatie met Material Traceability. Op deze manier kunt u ook inzichtelijk maken waar uw producten vandaan komen. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // H3 MT 5 t/m 8 punten GTT 12 punten  
        if (mttpuntentelling > 4 && gttpuntentelling == 12) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Global Track & Trace is een zeer geschikte optie voor u. Ons advies is om dit te gebruiken in combinatie met Material traceability. Bij het gebruik van deze twee oplossingen kunt u uw gehele goederenstroom inzichtelijk krijgen. Benieuwd hoe u deze combinatie inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // H2 MT 5 t/m 8 punten GTT 7 t/m 11 punten -> ERROR?
        if (mttpuntentelling > 4 && gttpuntentelling > 6) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Material Traceability is een slimme optie voor u. Ons advies: combineer dit met SAP Logistics Business Network – Global Track & Trace. Middels deze twee oplossingen kunt u uw gehele goederenstroom inzichtelijk krijgen. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // H1 – MT 9 punten & GTT 12 punten  
        if (mttpuntentelling == 9 && gttpuntentelling == 12 && fcpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Material Traceability in combinatie met Global Track & Trace is de slimste optie voor u. Op deze manier kunt u het gehele proces van uw goederen inzichtelijk krijgen. Van grondstof tot eindproduct. Benieuwd hoe u deze (gecombineerde) oplossing inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // G1 – FC & MT (9 punten) 
        if (fcpuntentelling == 9 && mttpuntentelling == 9) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network - Freight Collaboration & Material Traceability is een slimme optie voor u. Dit sluit aan bij u wensen over de contracten en facturatie. Ook kunt u hierdoor zichtbaarheid creëren voor de consument. Benieuwd hoe u deeze combinatie inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        //D1 – FC (9 punten) & GTT (12 punten) 
        if (fcpuntentelling == 9 && gttpuntentelling == 12) {
            document.getElementById("Advice").innerText = "Een combinatie van SAP Logistics Business Network – Freight Collaboration + Global Track & Trace is voor u de slimste optie. U wilt zelf tracking scenario’s opstellen. Door dit te combineren met de geautomatiseerde contracten en facturatie blijft u de concurrenten voor. Benieuwd hoe u deze combinatie inricht binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // Adviezen met drie condities --------------------------------------------------------------------------------------------


        // F1 Geen SAP LBN FC 4 of minder punten GTT 6 of minder punten en MT 4 of minder punten/ fallback 
        if (fcpuntentelling < 5 && gttpuntentelling < 7 && mttpuntentelling < 5) {
            document.getElementById("Advice").innerText = "Bedankt voor het invullen van de matrix. Op basis van uw antwoorden is er niet één doorslaggevende oplossing die eruit springt. We spreken u graag persoonlijk om uw situatie samen scherp te stellen en een maatwerkadvies te geven. Neem contact op met Bart de Bijl voor een vrijblijvend adviesgesprek.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // E2 - FC 5 tm 8 gtt 7 tm 11 mtt 5 tm 8
        if (fcpuntentelling > 4 && gttpuntentelling > 6 && mttpuntentelling > 4) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network sluit als totaaloplossing het beste aan bij uw wensen. Zo kunt u onder andere zelf uw tracking scenario’s opstellen en inzichtelijk krijgen waar uw grondstoffen vandaan komen. Benieuwd welke voordelen het heeft voor de processen binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // E1 Perfect score - check
        if (fcpuntentelling == 9 && gttpuntentelling == 12 && mttpuntentelling == 9) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network sluit als totaaloplossing perfect aan bij uw wensen. U krijgt daarmee alle mogelijkheden om uw hele Supply Chain inzichtelijk te maken. De kunst is het naadloos te laten aansluiten op uw huidige IT-landschap. Benieuwd wat daarbij komt kijken? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }


        // Adviezen met een conditie --------------------------------------------------------------------------------------------



        // A2 - FC 5 tm 8
        if (fcpuntentelling > 4 && gttpuntentelling == 0 && mttpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Freight Collaboration past het beste bij uw situatie. De reden hiervoor is omdat u hierdoor gebruik kunt maken van een geautomatiseerde contractafhandeling. De kunst is het naadloos te laten aansluiten op uw huidige IT-landschap. Benieuwd wat daarbij komt kijken? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // A1 - FC 9 
        if (fcpuntentelling == 9 && gttpuntentelling == 0 && mttpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Freight Collaboration is voor u een slimme optie. Waarom? Het sluit perfect aan op uw wensen voor contractafhandeling. Benieuwd hoe u het naar uw hand zet voor uw situatie? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        // B2 - GT 8 tm 11
        if (gttpuntentelling > 7 && fcpuntentelling == 0 && mttpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Global Track & Trace sluit het beste aan bij uw situatie. Waarom? Omdat u hierdoor totale vrijheid heeft om uw eigen scope te bepalen voor Tracken & Tracen van goederen. Benieuwd wat erbij komt kijken om die oplossing vorm te geven binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        // B1 - GT 12
        if (gttpuntentelling == 12 && fcpuntentelling == 0 && mttpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Global Track & Trace is een slimme oplossing in uw situatie. U heeft daarmee de vrijheid uw eigen scope te bepalen voor Tracken & Tracen van goederen. De kunst is het naadloos te laten aansluiten op uw IT-landschap. Benieuwd hoe u dit aanpakt? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;
        }

        //C2 MT 5 t/m 8 punten 
        if (mttpuntentelling > 4 && gttpuntentelling == 0 && fcpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network – Material Traceability is de oplossing voor u. De kunst is dit binnen uw bedrijf verder vorm te geven. Benieuwd hoe u dit aanpakt? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }

        //C1 – MT 9 punten 
        if (mttpuntentelling == 9 && gttpuntentelling == 0 && fcpuntentelling == 0) {
            document.getElementById("Advice").innerText = "SAP Logistics Business Network - Material Traceability sluit naadloos aan op uw wensen. U toont met deze oplossing aan waar uw grondstoffen vandaan komen. Benieuwd wat erbij komt kijken om die oplossing vorm te geven binnen uw bedrijf? Bel Bart de Bijl voor een brainstorm.";
            document.getElementById("TitleAdvice").innerText = `${fcpuntentelling} voor FC, ${gttpuntentelling} voor GT, ${mttpuntentelling} voor MTT`;

        }




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


        //SetProgress
        var progress = document.getElementById("progress").getAttribute("aria-valuenow");
        progress = parseFloat(progress) + 5;

        document.getElementById("progress").setAttribute("style", "width: " + progress + "%");
        document.getElementById("progress").setAttribute("aria-valuenow", String(progress));



        var alreadyNext = false
        var process = document.getElementById("process");
        var headerTekst = document.getElementById("headerTekstClass");


        const answerContainers = quizContainer.querySelectorAll('.answers');
        // find selected answer
        const answerContainer = answerContainers[4];
        const selector = `input[name=question${4}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;



        if (currentSlide == 4 || currentSlide == 7 || currentSlide == 12) {
            document.getElementById("headerTekstClass").style.display = "block";
            document.getElementById("next").setAttribute("data-toggle", "modal");
            document.getElementById("next").setAttribute("data-target", "#exampleModalLong");
        } else {
            document.getElementById("headerTekstClass").style.display = "none";
            document.getElementById("next").setAttribute("data-toggle", "0");
            document.getElementById("next").setAttribute("data-target", "0");
        }


        if (currentSlide > 3) {


            document.getElementById("headerTekstClass").innerText = "Freight Collaboration";
            document.getElementById("process").innerText = "Freight Collaboration";
            document.getElementById("headerTekst").innerText = "Freight collaboration is een van de opties binnen SAP LBN. Freight collaboration regelt alles rondom de contracten en facturatie binnen SAP LBN. Hier kun je opdrachten uitzetten binnen een netwerk van vervoerders welke zich dan aan kunnen melden op de opdracht. Hiermee wordt het gehele proces van contract tot de facturatie gedaan door SAP LBN. Ook zit hier een gestandaardiseerde vorm van het tracken van je goederen bij inbegrepen. ";
            process.style.display = "inline-block";


        }


        if (currentSlide > 6) {
            document.getElementById("headerTekstClass").innerText = "Global Track & Trace";
            document.getElementById("process").innerText = "Global Track & Trace";
            document.getElementById("headerTekst").innerText = "Binnen SAP LBN is Global Track & Trace de tweede optie die je kan afnemen. Deze optie focust zich volledig op het tracken & tracen van je goederen. Hiermee kun je heel je supply chain inzichtelijk krijgen en exact zien waar uw producten zijn geweest en zich nu bevinden (real-time).";
            process.style.display = "inline-block";
            headerTekst.style.direction = "block";

        }


        if (currentSlide > 11) {
            document.getElementById("headerTekstClass").innerText = "Material Traceability";
            document.getElementById("process").innerText = "Material Traceability";
            document.getElementById("headerTekst").innerText = "De derde en laatste optie van SAP LBN is Material Traceability. Deze optie zorgt voor het delen van data over de gehele supply chain. Hiermee kan je bijvoorbeeld aantonen dat een vis in een duurzame omgeving gevangen is.";
            process.style.display = "inline-block";
            headerTekst.style.direction = "block";

        }

        if (currentSlide < 4 || currentSlide > 14) {
            process.style.display = "none";
            headerTekst.style.direction = "none";
        }


        if (currentSlide == 17 && userAnswer == "a") {
            showSlide(18);
            alreadyNext = true;
        }

        if (currentSlide == 1 && userAnswer == "b") {
            showSlide(3);
            alreadyNext = true;
        }




        // if (currentSlide === 4 && userAnswer === "a") {
        //     showSlide(8);

        //     alreadyNext = true;
        // }

        // if (currentSlide === 11 && userAnswer === "c") {
        //     showSlide(13);
        //     alreadyNext = true;
        // } else if (currentSlide === 11) {
        //     showSlide(12);
        //     alreadyNext = true;
        // }

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

    //Questions Array
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
            question: "4. Op welk niveau wilt u goederen in uw supply chain tracken?",
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
            FCPunten3: "z",
            FCPunten1: "z",
            GTTPunten3: "a",
            GTTPunten1: "b",
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
            GTTPunten3: "z",
            GTTPunten1: "z",
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
            GTTPunten3: "z",
            GTTPunten1: "z",

            FCPunten3: "z",
            FCPunten1: "z",
            MTTPunten3: "a",
            MTTPunten1: "b"

        },
        {
            question: "14. Ik wil alle stappen in het supply chain proces vastleggen in de blockchain zodat eindgebruikers kunnen zien of het product duurzaam is ontwikkeld",
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
            MTTPunten3: "z",
            MTTPunten1: "z",

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

    // Kick things off
    buildQuiz();

    // Pagination
    // const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");

    let currentSlide = 0;
    let isCheck = "radio";

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    // previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();