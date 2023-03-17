function changeValue(increase, id) {
  let count = document.querySelector("#" + id);
  let currentValue = parseInt(count.innerHTML);

  if (increase) {
    count.innerHTML = currentValue + 1;
  } else if (!increase && !(currentValue === 0)) {
    count.innerHTML = currentValue - 1;
  }
}

function downloadCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";

  // Add the headers for the CSV file
  csvContent +=
    "Group Number,Game Number,Left Community,Bottom Cube Auto,Middle Cube Auto,Upper Cube Auto,Bottom Cone Auto,Middle Cone Auto,Upper Cone Auto,Balancing Auto,Bottom Cube Tele,Middle Cube Tele,Upper Cube Tele,Bottom Cone Tele, Middle Cone Tele, Upper Cone Tele, Game Pieces Dropped, Is Defensive, Struggled With Defence, Balancing Tele, Remarks\n";

  // Get the form inputs
  const groupNumber = document.querySelector("#group-number").value;
  const gameNumber = document.querySelector("#game-number").value;
  const leftCommunity = document.querySelector("#left-community").checked
    ? "Yes"
    : "No";
  const bottomCubeAuto = document.querySelector(
    "#bottom-cube-auto-show"
  ).textContent;
  const middleCubeAuto = document.querySelector(
    "#middle-cube-auto-show"
  ).textContent;
  const upperCubeAuto = document.querySelector(
    "#upper-cube-auto-show"
  ).textContent;
  const bottomConeAuto = document.querySelector(
    "#bottom-cone-auto-show"
  ).textContent;
  const middleConeAuto = document.querySelector(
    "#middle-cone-auto-show"
  ).textContent;
  const upperConeAuto = document.querySelector(
    "#upper-cone-auto-show"
  ).textContent;
  const balancingAuto = document.querySelector("#balancing-auto").checked
    ? "Yes"
    : "No";
  const bottomCubeTele = document.querySelector(
    "#bottom-cube-tele-show"
  ).textContent;
  const middleCubeTele = document.querySelector(
    "#middle-cube-tele-show"
  ).textContent;
  const upperCubeTele = document.querySelector(
    "#upper-cube-tele-show"
  ).textContent;
  const bottomConeTele = document.querySelector(
    "#bottom-cone-tele-show"
  ).textContent;
  const middleConeTele = document.querySelector(
    "#middle-cone-tele-show"
  ).textContent;
  const upperConeTele = document.querySelector(
    "#upper-cube-tele-show"
  ).textContent;
  const gamePiece =
    document.querySelector("#game-piece-show").textContent;
  const isDefensive = document.querySelector("#defence").checked
    ? "Yes"
    : "No";
  const struggleWithDefence = document.querySelector("#struggle-defense")
    .checked
    ? "Yes"
    : "No";
  const balancing = document.querySelector("#balancing-tele").checked
    ? "Yes"
    : "No";
  const remarksInfo = document.querySelector("#remarks").value;

  // Add the values for the CSV file
  csvContent += `${groupNumber},${gameNumber},${leftCommunity},${bottomCubeAuto},${middleCubeAuto},${upperCubeAuto},${bottomConeAuto},${middleConeAuto},${upperConeAuto},${balancingAuto},${bottomCubeTele},${middleCubeTele},${upperCubeTele},${bottomConeTele},${middleConeTele},${upperConeTele}, ${gamePiece}, ${isDefensive}, ${struggleWithDefence}, ${balancing}, ${remarksInfo}\n`;

  // Create the CSV file
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "neat-team-scouting-gameNum: " + gameNumber + ".csv");
  document.body.appendChild(link);
  link.click();
  window.location.href = encodedUri;
}

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  downloadCSV();
});