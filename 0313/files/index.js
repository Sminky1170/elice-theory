const container = document.querySelector(".container");

const mm = createUnit("mm");
const cm = createUnit("cm");
const meter = createUnit("meter");
const km = createUnit("km");

let count = {
  mm: 0,
  cm: 0,
  meter: 0,
  km: 0,
};

function setValueAsCount() {
  mm.value = count.mm;
  cm.value = count.cm;
  meter.value = count.meter;
  km.value = count.km;
}

container.addEventListener("click", (e) => {
  if (e.target.id === "mm") {
    count.mm++;
    const newCount = changeDataFromMM(count.mm);
    count = {
      ...newCount,
    };
    setValueAsCount();
  } else if (e.target.id === "cm") {
    count.cm++;
    const newCount = changeDataFromCM(count.cm);
    count = {
      ...newCount,
    };
    setValueAsCount();
  } else if (e.target.id === "meter") {
    count.meter++;
    const newCount = changeDataFromMeter(count.meter);
    count = {
      ...newCount,
    };
    setValueAsCount();
  } else if (e.target.id === "km") {
    count.km++;
    const newCount = changeDataFromKM(count.km);
    count = {
      ...newCount,
    };
    setValueAsCount();
  }
});

mm.addEventListener("change", (e) => {
  if (!isNaN(Number(e.target.value))) {
    const newCount = changeDataFromMM(Number(e.target.value));
    count = {
      ...newCount,
    };
    setValueAsCount();
  }
});

cm.addEventListener("change", (e) => {
  if (!isNaN(Number(e.target.value))) {
    const newCount = changeDataFromMM(Number(e.target.value));
    count = {
      ...newCount,
    };
    setValueAsCount();
  }
});

meter.addEventListener("change", (e) => {
  if (!isNaN(Number(e.target.value))) {
    const newCount = changeDataFromMM(Number(e.target.value));
    count = {
      ...newCount,
    };
    setValueAsCount();
  }
});

km.addEventListener("change", (e) => {
  if (!isNaN(Number(e.target.value))) {
    const newCount = changeDataFromMM(Number(e.target.value));
    count = {
      ...newCount,
    };
    setValueAsCount();
  }
});
