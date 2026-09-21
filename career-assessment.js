document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("careerAssessmentForm");

    const resultBox = document.getElementById("assessmentResult");

    const resultTitle = document.getElementById("resultTitle");

    const resultDescription =
        document.getElementById("resultDescription");


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // Count A, B, C and D
        let scores = {
            A: 0,
            B: 0,
            C: 0,
            D: 0
        };


        // Get answers of all 10 questions
        for (let i = 1; i <= 10; i++) {

            const answer = document.querySelector(
                `input[name="q${i}"]:checked`
            );

            if (answer) {
                scores[answer.value]++;
            }

        }


        // Find highest score
        let highestScore = Math.max(
            scores.A,
            scores.B,
            scores.C,
            scores.D
        );


        // Check for tie
        let topLetters = Object.keys(scores).filter(
            letter => scores[letter] === highestScore
        );


        let result;


        if (topLetters.length > 1) {

            result = {
                title: "You have a diverse career profile",
                description:
                    "Your answers show a combination of different strengths and interests. Rather than fitting into one single direction, you may benefit from exploring multiple career areas before making an academic or career decision."
            };

        } else {

            switch (topLetters[0]) {

                case "A":

                    result = {
                        title: "Technology, Science & Analytical Direction",
                        description:
                            "Your responses show a strong inclination toward analytical thinking, problem-solving, technology, science and structured tasks. You may enjoy exploring areas such as technology, engineering, computer science, data, research, healthcare or other analytical fields."
                    };

                    break;


                case "B":

                    result = {
                        title: "Creative, Design & Media Direction",
                        description:
                            "Your responses indicate a strong creative inclination. You may enjoy expressing ideas through design, writing, visual communication, media, performing arts, content creation, architecture or other creative fields."
                    };

                    break;


                case "C":

                    result = {
                        title: "Business, Management & Entrepreneurship Direction",
                        description:
                            "Your answers suggest an interest in business thinking, practical decision-making, leadership, financial concepts and achieving measurable results. You may explore areas such as management, business, finance, entrepreneurship, marketing or related fields."
                    };

                    break;


                case "D":

                    result = {
                        title: "People, Society & Communication Direction",
                        description:
                            "Your responses show a strong interest in people, communication, society and understanding human behaviour. You may explore areas such as psychology, education, counselling, law, social sciences, public service, human resources or related fields."
                    };

                    break;

            }

        }


        // Show result
        resultTitle.textContent = result.title;

        resultDescription.textContent = result.description;

        resultBox.classList.add("show");


        // Scroll to result
        setTimeout(function () {

            resultBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);


    });

});