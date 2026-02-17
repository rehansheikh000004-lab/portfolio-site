const btn = document.getElementById("search");
const result = document.getElementById("result");

btn.onclick = async () => {
  const city = document.getElementById("city").value;

  if (!city) return;

  const res = await fetch(
    `https://wttr.in/${city}?format=j1`
  );

  const data = await res.json();

  const temp = data.current_condition[0].temp_C;
  const desc = data.current_condition[0].weatherDesc[0].value;

  result.innerHTML = `
    <p>Temperature: ${temp}°C</p>
    <p>Condition: ${desc}</p>
  `;
};
