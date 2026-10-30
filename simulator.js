var brightness = document.getElementById("brightness");
var movement = document.getElementById("movement");
var wDark = document.getElementById("w-dark");
var wMove = document.getElementById("w-move");
var weights = document.getElementById("weights");
var modeHelp = document.getElementById("mode-help");
var decisionEl = document.getElementById("decision");
var reasonEl = document.getElementById("reason");

function mode() {
  return document.querySelector('input[name="mode"]:checked').value;
}

// Fixed rules: a threshold is a cut-off number that switches the decision.
function decideByRules(b, m) {
  if (m < 20) {
    return { light: "Off", reason: "Movement is below 20, so nobody seems to be here." };
  }
  if (b >= 70) {
    return { light: "Off", reason: "Someone is here, but the room is already bright (70 or more)." };
  }
  if (b >= 40) {
    return { light: "Dim", reason: "Someone is here and the room is partly lit (40 to 69), so a dim light is enough." };
  }
  return { light: "Bright", reason: "Someone is here and the room is dark (below 40), so the light goes bright." };
}

// Scoring model: each sensor adds points, scaled by its weight, to a score out of 100.
function decideByScore(b, m, wd, wm) {
  var total = wd + wm;
  if (total === 0) {
    return { light: "Off", reason: "Both weights are 0, so the model ignores the sensors. Raise a weight." };
  }
  var darkPoints = (wd * (100 - b)) / total;
  var movePoints = (wm * m) / total;
  var score = darkPoints + movePoints;
  var light = score < 35 ? "Off" : score < 65 ? "Dim" : "Bright";
  var reason =
    "Darkness gives " + darkPoints.toFixed(0) + " points and movement gives " +
    movePoints.toFixed(0) + " points, a score of " + score.toFixed(0) + " out of 100. " +
    "Below 35 means off, 35 to 64 means dim, 65 or more means bright.";
  return { light: light, reason: reason };
}

function update() {
  var b = Number(brightness.value);
  var m = Number(movement.value);
  var wd = Number(wDark.value);
  var wm = Number(wMove.value);

  document.getElementById("brightness-value").textContent = b + " out of 100";
  document.getElementById("movement-value").textContent = m + " out of 100";
  document.getElementById("w-dark-value").textContent = wd + " out of 10";
  document.getElementById("w-move-value").textContent = wm + " out of 10";

  var useScore = mode() === "score";
  weights.hidden = !useScore;
  modeHelp.textContent = useScore
    ? "The model turns the readings into one score, then picks a light level from the score."
    : "Fixed rules are simple if-then steps that a person wrote by hand.";

  var result = useScore ? decideByScore(b, m, wd, wm) : decideByRules(b, m);
  decisionEl.textContent = result.light;
  reasonEl.textContent = result.reason;
}

document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", update);
});
update();
