(function () {
  "use strict";

  var ids = ["b-voltage", "b-capacity", "b-power", "b-usable"];

  function byId(id) {
    return document.getElementById(id);
  }

  function calc() {
    var voltage = Number(byId("b-voltage").value);
    var milliampHours = Number(byId("b-capacity").value);
    var watts = Number(byId("b-power").value);
    var factor = Number(byId("b-usable").value) / 100;
    var nominalWattHours = (voltage * milliampHours) / 1000;
    var valid =
      [voltage, milliampHours, watts, factor].every(Number.isFinite) &&
      voltage > 0 &&
      milliampHours > 0 &&
      watts > 0 &&
      factor > 0 &&
      factor <= 1;

    if (!valid) {
      byId("b-energy").textContent = "Invalid input";
      byId("b-runtime").textContent = "—";
      return;
    }

    var hours = (nominalWattHours * factor) / watts;
    byId("b-energy").textContent = nominalWattHours.toFixed(2) + " Wh";
    byId("b-runtime").textContent =
      hours < 1 ? Math.round(hours * 60) + " minutes" : hours.toFixed(2) + " hours";
  }

  ids.forEach(function (id) {
    byId(id).addEventListener("input", calc);
  });
  calc();
})();
