function getMMFromCM(cm) {
  return cm * 10;
}

function getMMFromMeter(meter) {
  return meter * 1000;
}

function getMMFromKM(km) {
  return km * 1000000;
}

function getCMFromMM(mm) {
  return mm / 10;
}

function getCMFromMeter(meter) {
  return meter * 100;
}

function getCMFromKM(km) {
  return km * 100000;
}

function getMeterFromMM(mm) {
  return mm / 1000;
}

function getMeterFromCM(cm) {
  return cm / 100;
}

function getMeterFromKM(km) {
  return km * 1000;
}

function getKMFromMM(mm) {
  return mm / 1000000;
}

function getKMFromCM(cm) {
  return cm / 100000;
}

function getKMFromMeter(meter) {
  return meter / 1000;
}

function changeDataFromMM(mm) {
  cm.value = getCMFromMM(mm);
  meter.value = getMeterFromMM(mm);
  km.value = getKMFromMM(mm);
}

function changeDataFromCM(cm) {
  mm.value = getMMFromCM(cm);
  meter.value = getMeterFromCM(cm);
  km.value = getKMFromCM(cm);
}

function changeDataFromMeter(meter) {
  mm.value = getMMFromMeter(meter);
  cm.value = getCMFromMeter(meter);
  km.value = getKMFromMeter(meter);
}

function changeDataFromKM(km) {
  mm.value = getMMFromKM(km);
  cm.value = getCMFromKM(km);
  meter.value = getMeterFromKM(km);
}
