let tinggi, berat, keterangan, bmi;
function hitung() {
  tinggi = parseFloat(document.getElementById("ipt_t").value);
  tinggi /= 100;
  berat = parseFloat(document.getElementById("ipt_b").value);
  bmi = berat / (tinggi * tinggi);

  if (bmi > 27) {
    keterangan = "Gemuk, Kelebihan berat badan tingkat berat";
  } else if ((bmi >= 25.1) & (bmi <= 27)) {
    keterangan = "Gemuk, Kelebihan berat badan tingkat ringan";
  } else if ((bmi >= 18.5) & (bmi <= 25)) {
    keterangan = "Normal";
  } else if ((bmi >= 17) & (bmi <= 18.4)) {
    keterangan = "Kurus, Kekurangan berat badan tingkat ringan";
  } else {
    keterangan = "Kurus, Kekurangan berat badan tingkat berat";
  }
  let nilai1 = document.getElementById("ipt_b").value;
  let tampungNilai = nilai1 * 1000;
  document.getElementById("ipt_b_").value = tampungNilai;
  document.getElementById("bmi").innerHTML =
    "Hasil perhitungan BMI : " + bmi.toFixed(1);
  document.getElementById("keterangan").innerHTML = keterangan;
}

function myKg() {
  document.getElementById("kg").disabled = true;
  document.getElementById("gr").disabled = false;
}

function myGr() {
  document.getElementById("kg").disabled = false;
  document.getElementById("gr").disabled = true;
}
