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
  const cm = getCMFromMM(mm);
  const meter = getMeterFromMM(mm);
  const km = getKMFromMM(mm);
  return { mm, cm, meter, km };
}

function changeDataFromCM(cm) {
  const mm = getMMFromCM(cm);
  const meter = getMeterFromCM(cm);
  const km = getKMFromCM(cm);
  return { mm, cm, meter, km };
}

function changeDataFromMeter(meter) {
  const mm = getMMFromMeter(meter);
  const cm = getCMFromMeter(meter);
  const km = getKMFromMeter(meter);
  return { mm, cm, meter, km };
}

function changeDataFromKM(km) {
  const mm = getMMFromKM(km);
  const cm = getCMFromKM(km);
  const meter = getMeterFromKM(km);
  return { mm, cm, meter, km };
}
