const mm = document.querySelector("#mm");
const cm = document.querySelector("#cm");
const meter = document.querySelector("#meter");
const km = document.querySelector("#km");
const container = document.querySelector(".container");

let count = {
  mm: 0,
  cm: 0,
  meter: 0,
  km: 0,
};

container.addEventListener("click", (e) => {
  if (e.target.id === "mm") {
    count.mm++;
    mm.value = count.mm;
    changeDataFromMM(count.mm);
  } else if (e.target.id === "cm") {
    count.cm++;
    cm.value = count.cm;
    changeDataFromCM(count.cm);
  } else if (e.target.id === "meter") {
    count.meter++;
    meter.value = count.meter;
    changeDataFromMeter(count.meter);
  } else if (e.target.id === "km") {
    count.km++;
    km.value = count.km;
    changeDataFromKM(count.km);
  }
});

mm.addEventListener("change", (e) => {
  if (!isNaN(e.target.value)) {
    count.mm = e.target.valueAsNumber;
    changeDataFromMM(e.target.value);
  }
});
cm.addEventListener("change", (e) => {
  if (!isNaN(e.target.value)) {
    count.cm = e.target.valueAsNumber;
    changeDataFromMM(e.target.value);
  }
});
meter.addEventListener("change", (e) => {
  if (!isNaN(e.target.value)) {
    count.meter = e.target.valueAsNumber;
    changeDataFromMM(e.target.value);
  }
});
km.addEventListener("change", (e) => {
  if (!isNaN(e.target.value)) {
    count.km = e.target.valueAsNumber;
    changeDataFromMM(e.target.value);
  }
});
