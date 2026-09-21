document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       INDEX
    ===================================== */

    const surpriseBtn =
        document.getElementById("surpriseBtn");

    const continueCarta =
        document.getElementById("continueCarta");

    const reveal =
        document.getElementById("reveal");

    const petals =
        document.getElementById("petals");


    function createPetal() {

        if (!petals) return;

        const petal =
            document.createElement("span");

        petal.className = "petal";

        petal.textContent =
            Math.random() > 0.35
                ? "🌻"
                : "💛";

        petal.style.left =
            `${Math.random() * 100}%`;

        petal.style.setProperty(
            "--drift",
            `${(Math.random() - 0.5) * 220}px`
        );

        petal.style.animationDuration =
            `${4 + Math.random() * 5}s`;

        petal.style.fontSize =
            `${0.7 + Math.random() * 1.1}rem`;

        petals.appendChild(petal);

        petal.addEventListener(
            "animationend",
            () => petal.remove()
        );
    }


    function flowerRain(amount = 35) {

        for (let i = 0; i < amount; i++) {

            setTimeout(
                createPetal,
                i * 80
            );

        }

    }


    if (surpriseBtn && reveal) {

        surpriseBtn.addEventListener(
            "click",
            () => {

                flowerRain(45);

                reveal.classList.add("show");

                reveal.setAttribute(
                    "aria-hidden",
                    "false"
                );

                setTimeout(() => {

                    reveal.scrollIntoView({
                        behavior: "smooth"
                    });

                }, 250);

            }
        );

    }


    if (continueCarta) {

        continueCarta.addEventListener(
            "click",
            () => {

                window.location.href =
                    "carta.html";

            }
        );

    }


    if (petals) {

        setInterval(
            createPetal,
            1800
        );

    }


    /* =====================================
       CARTA — VENTANA EMERGENTE
    ===================================== */

    const continueBtn =
        document.getElementById("continueBtn");

    const surprise =
        document.getElementById("surprise");

    const closeBtn =
        document.getElementById("closeBtn");


    if (continueBtn && surprise) {

        continueBtn.addEventListener(
            "click",
            () => {

                surprise.classList.add("show");

            }
        );

    }


    if (closeBtn && surprise) {

        closeBtn.addEventListener(
            "click",
            () => {

                surprise.classList.remove("show");

            }
        );

    }


    if (surprise) {

        surprise.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === surprise
                ) {

                    surprise.classList.remove(
                        "show"
                    );

                }

            }
        );

    }

});
