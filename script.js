const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000
  },
  weight: {
    gram: 1,
    kilogram: 0.001,
    milligram: 1000
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    "cubic meter": 0.001
  }
};

function populateUnits() {
  const category = document.getElementById("category").value;
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  Object.keys(units[category]).forEach(unit => {
    const option1 = document.createElement("option");
    option1.value = unit;
    option1.textContent = unit;

    const option2 = option1.cloneNode(true);

    fromUnit.appendChild(option1);
    toUnit.appendChild(option2);
  });
}

function convert() {
  const category = document.getElementById("category").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const value = parseFloat(document.getElementById("inputValue").value);

  if (isNaN(value)) {
    document.getElementById("result").textContent = "🚫 Please enter a valid number.";
    return;
  }

  const baseValue = value / units[category][from];
  const convertedValue = baseValue * units[category][to];

  document.getElementById("result").textContent = `✅ ${value} ${from} = ${convertedValue.toFixed(4)} ${to}`;
}

// Initialize on load
window.onload = populateUnits;