document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("genreModal");
    const genreLink = document.querySelector('a[href="Genre"]');
    const startBtn = document.getElementById("startBtn");
    const closeBtn = document.querySelector("#genreModal .close");

    genreLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

    window.addEventListener("load", () => {
      console.log("Ranking page loaded.");
    });

    const listItems = document.querySelectorAll('.ranking-list li');
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        alert(`You clicked on: ${item.querySelector('h3').innerText}`);
    });
});