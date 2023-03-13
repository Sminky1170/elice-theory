const mm = document.querySelector("#mm");
const cm = document.querySelector("#cm");
const meter = document.querySelector("#meter");
const km = document.querySelector("#km");

mm.onchange = function () {
  cm.value = getCMFromMM(mm.valueAsNumber);
  meter.value = getMeterFromMM(mm.valueAsNumber);
  km.value = getKMFromMM(mm.valueAsNumber);
};

cm.addEventListener("change", function () {
  mm.value = getMMFromCM(cm.valueAsNumber);
  meter.value = getMeterFromCM(cm.valueAsNumber);
  km.value = getKMFromCM(cm.valueAsNumber);
});

meter.addEventListener("change", () => {
  mm.value = getMMFromMeter(meter.valueAsNumber);
  cm.value = getCMFromMeter(meter.valueAsNumber);
  km.value = getKMFromMeter(meter.valueAsNumber);
});

km.addEventListener("change", () => {
  mm.value = getMMFromKM(km.valueAsNumber);
  cm.value = getCMFromKM(km.valueAsNumber);
  meter.value = getMeterFromKM(km.valueAsNumber);
});
