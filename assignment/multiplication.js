function generate() {
  let first = document.getElementById("inp1").value;
  let second = document.getElementById("inp2").value;
  let multi = document.getElementById("multi");

  if (first === '' || second === '') {
    alert("Please enter a valid number");
    return;
  }

  first = Number(first);
  second = Number(second);

  if (second < first) {
    alert("Error: Second number must be greater than the first number");
    return;
  }

  multi.innerHTML = "";

  for (let outer = first; outer <= second; outer++) {
    let row = document.createElement("div");
    row.innerHTML = `<h6> Table ${outer}</h6>`;
    for (let inner = 1; inner <= 12; inner++) {
      row.innerHTML += `${outer} × ${inner} = ${outer * inner} <br>`;
    }
    row.innerHTML += `<hr>`;
    multi.appendChild(row);
  }
}
