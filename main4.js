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

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const animeCards = document.querySelectorAll('.anime-card');

    animeCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const animeSections = document.querySelectorAll('.anime-section');

    animeSections.forEach(section => {
      let matchFound = false;
      const cards = section.querySelectorAll('.anime-card');

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
          card.style.display = '';
          matchFound = true;
        } else {
          card.style.display = 'none';
        }
      });
      section.style.display = matchFound ? '' : 'none';
    });
  });
});
