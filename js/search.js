const charList = document.querySelector(".charList");
const searchBar = document.querySelector("#searchBar");

// ================= Displays query result =================

let myGradeIs;
const displayChar = (myGradeIs) => {
  const htmlString = myGradeIs
    .map((myGrade) => {
      return `<li>${myGrade.subject}</li>`;
    })
    .join("");
  charList.innerHTML = htmlString;
};

// ================= To find which grade is selected =================

const selected = document.querySelector("#grades");
let grade = selected.value;
findQuery(grade);

selected.addEventListener("change", (e) => {
  grade = e.target.value;
  findQuery(grade);
});

function findQuery(grade) {
  if (grade === "Grade 11") {
    myGradeIs = grade11;
  }
  if (grade === "Grade 12") {
    myGradeIs = grade12;
  }
  if (grade === "Bachelor") {
    myGradeIs = bachelor;
  }
}

// ================= Shows result when sth is searched =================

searchBar.addEventListener("keyup", (e) => {
  let searchString = e.target.value.toLowerCase();
  let filteredCharacters;

  if (searchString === "") {
    // ================= clear search results if the search box is empty =================

    console.log("clear");
    filteredCharacters = [];
  } else {
    filteredCharacters = myGradeIs.filter((myGrade) => {
      const subject = myGrade.subject.toLowerCase();
      const chapter = myGrade.chapter.toLowerCase();
      return subject.includes(searchString) || chapter.includes(searchString);
    });
  }

  displayChar(filteredCharacters);
});
