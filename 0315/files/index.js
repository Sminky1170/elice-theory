const form = document.querySelector("form");

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  for (const el of form.children) {
    if (el.className !== "button") {
      el.children[1].value = "Hi";
    }
  }
});
