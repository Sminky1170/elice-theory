const lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    const { id } = e.target;
    resetNews();
    resetWeather();
    if (id === "dummy-news") {
      getNews();
    }
    if (id === "mini-weather") {
      getWeather();
    }
  });
});
