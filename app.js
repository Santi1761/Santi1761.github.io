document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("mouseover", () => {
            card.classList.add("hover");
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("hover");
        });
    });
});


