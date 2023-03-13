function createUnit(id) {
  const div = document.createElement("div");
  div.classList.add("container-for-unit");
  const input = document.createElement("input");
  input.id = id;
  input.value = 0;
  const span = document.createElement("span");
  span.textContent = id;

  div.appendChild(input);
  div.appendChild(span);
  container.appendChild(div);

  return input;
}
