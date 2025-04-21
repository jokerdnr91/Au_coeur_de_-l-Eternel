const verses = [
  {
    reference: "Jean 3:16",
    text: "Car Dieu a tant aimé le monde qu’il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu’il ait la vie éternelle."
  },
  {
    reference: "Matthieu 5:9",
    text: "Heureux ceux qui procurent la paix, car ils seront appelés fils de Dieu."
  },
  {
    reference: "Luc 23:34",
    text: "Jésus dit: Père, pardonne-leur, car ils ne savent ce qu’ils font."
  },
  {
    reference: "Psaume 23:1",
    text: "L'Éternel est mon berger: je ne manquerai de rien."
  },
  {
    reference: "Romains 8:1",
    text: "Il n'y a donc maintenant aucune condamnation pour ceux qui sont en Jésus-Christ."
  }
];

const container = document.getElementById("versesContainer");
const searchInput = document.getElementById("searchInput");

function displayVerses(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>Aucun verset trouvé.</p>";
    return;
  }

  list.forEach((verse) => {
    const div = document.createElement("div");
    div.className = "verse";
    div.innerHTML = 
      <strong>${verse.reference}</strong>
      <p>${verse.text}</p>
    ;
    container.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = verses.filter(
    (v) =>
      v.reference.toLowerCase().includes(searchTerm) ||
      v.text.toLowerCase().includes(searchTerm)
  );
  displayVerses(filtered);
});

displayVerses(verses);
