function createNewsDiv() {
  const div = document.createElement("div");
  div.className = "news-item";
  const title = document.createElement("h3");
  title.className = "news-title";
  const source = document.createElement("span");
  source.className = "news-source";
  const timestamp = document.createElement("span");
  timestamp.className = "news-timestamp";
  div.appendChild(title);
  div.appendChild(source);
  div.appendChild(timestamp);
  return div;
}

function renderNews(data) {
  const newsContainer = document.querySelector("#news-container");
  const newsItem = createNewsDiv();
  const { title, source, timestamp } = data;
  newsItem.querySelector(".news-title").textContent = title;
  newsItem.querySelector(".news-source").textContent = source;
  newsItem.querySelector(".news-timestamp").textContent = timestamp;
  newsContainer.appendChild(newsItem);
}

async function getNewsWithCallback(callback) {
  // callback 구문
  // let httpRequest = new XMLHttpRequest();
  // httpRequest.onreadystatechange = function () {
  //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //     if (httpRequest.status === 200) {
  //       const data = JSON.parse(httpRequest.responseText).data;
  //       callback(data);
  //     } else {
  //       console.log("Error: " + httpRequest.status);
  //     }
  //   }
  // };
  // httpRequest.open("GET", "http://localhost:5000/data/dummy-news");
  // httpRequest.send();
  //
  // Promise then-catch 구문
  // fetch("http://localhost:5000/data/dummy-news")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     const { data } = res;
  //     data.forEach((news) => {
  //       renderNews(news);
  //     });
  //   })
  //   .catch(console.log)
  //
  // async-await 구문
  try {
    const { data } = await fetch("http://localhost:5000/data/dummy-news").then((res) => res.json());
    data.forEach((news) => renderNews(news));
  } catch (e) {
    console.log(e);
  }
}

function getNews() {
  getNewsWithCallback((data) => {
    data.forEach((news) => renderNews(news));
  });
}

function resetNews() {
  const newsContainer = document.querySelector("#news-container");
  newsContainer.innerHTML = "";
}
