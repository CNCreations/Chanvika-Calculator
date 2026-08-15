const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".card")];
const noResults = document.getElementById("noResults");

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = card.dataset.name.includes(q);
    card.hidden = !match;
    if (match) visible++;
  });
  noResults.hidden = visible !== 0;
});
