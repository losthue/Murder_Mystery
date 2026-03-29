function checkBinary() {
  let input = document.getElementById("answer").value.toLowerCase();

  if (input === "cheat") {
    document.getElementById("result").innerHTML =
      "✅ Correct. Someone was cheating... Go to the SPORTS AREA.";
  } else {
    document.getElementById("result").innerHTML =
      "❌ Wrong. Try again.";
  }
}

function checkFinal() {
  let choice = document.getElementById("killer").value;
  let motive = document.getElementById("motive").value.toLowerCase();

  if (choice === "sam" && motive.includes("cheat")) {
    document.getElementById("result").innerHTML =
      "🎉 CORRECT! Sam killed Chris because he was caught cheating.";
  } else {
    document.getElementById("result").innerHTML =
      "❌ Not quite. Recheck your clues.";
  }
}
