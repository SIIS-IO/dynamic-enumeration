var cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", (event) => {
        const target = event.currentTarget;
        let count;
        if (target.classList.contains('checked')) {
            target.classList.remove("checked");
            count = document.querySelectorAll(".checked");
            count = Number.parseInt(count.length === 0 ? 1 : count.length - 1);
        } else {
            target.classList.add("checked");
            count = document.querySelectorAll(".checked");
            count = count.length === 1 ? 1 : Number.parseInt(count.length);
            const number = target.querySelector(".number");
            number.textContent = count;
        }
    });
});