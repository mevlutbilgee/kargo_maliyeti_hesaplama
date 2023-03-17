const btnHesaplama = document.getElementById("btnHesaplama");
const pazaryeri = document.getElementById("pazaryeri");
const pazaryeriTrendyol = document.getElementById("pazaryeriTrendyol");
const pazaryeriHepsiburada = document.getElementById("pazaryeriHepsiburada");
const pazaryeriCiceksepeti = document.getElementById("pazaryeriCiceksepeti");
const pazaryeriN11 = document.getElementById("pazaryeriN11");
const kategoriList = document.getElementById("kategoriList");
const kargoList = document.getElementById("kargoList");
const enInput = document.getElementById("enInput");
const boyInput = document.getElementById("boyInput");
const yukseklikInput = document.getElementById("yukseklikInput");
const secilenPazaryeri = document.getElementById("secilenPazaryeri");
const secilenKargoSirketi = document.getElementById("secilenKargoSirketi");
const desi = document.getElementById("desi");
const kargoTutar = document.getElementById("kargoTutar");
pazaryeri.addEventListener("click", () => {
  if (pazaryeri.value == pazaryeriHepsiburada.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // ------------------HEPSİBURADA------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kargoList.innerHTML = `<option value=""></option>
    <option value="HepsiJET">HepsiJET</option>
      <option value="Aras Kargo">Aras Kargo</option>
      <option value="Yurtiçi Kargo">Yurtiçi Kargo</option>
      <option value="Sürat Kargo">Sürat Kargo</option>
      <option value="PTT Kargo">PTT Kargo</option>
      <option value="MNG Kargo">MNG Kargo</option>
      <option value="Sendeo Kargo">Sendeo Kargo</option>
      <option value="Borusan Kargo">Borusan Kargo</option>
      <option value="Horoz Kargo">Horoz Kargo</option>
      <option value="Ceva Kargo">Ceva Kargo</option>`;
  } else if (pazaryeri.value == pazaryeriTrendyol.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // --------------------TRENDYOL-------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kargoList.innerHTML = `<option value=""></option>
    <option value="Trendyolexpress">Trendyolexpress</option>
      <option value="Aras Kargo">Aras Kargo</option>
      <option value="Yurtiçi Kargo">Yurtiçi Kargo</option>
      <option value="Sürat Kargo">Sürat Kargo</option>
      <option value="UPS Kargo">UPS Kargo</option>
      <option value="PTT Kargo">PTT Kargo</option>
      <option value="MNG Kargo">MNG Kargo</option>
      <option value="Sendeo Kargo">Sendeo Kargo</option>
      <option value="Borusan Kargo">Borusan Kargo</option>
      <option value="Horoz Kargo">Horoz Kargo</option>
      <option value="Ceva Kargo">Ceva Kargo</option>`;
  } else if (pazaryeri.value == pazaryeriCiceksepeti.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // -------------------ÇİÇEK SEPETİ----------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kargoList.innerHTML = `<option value=""></option>
      <option value="Aras Kargo">Aras Kargo</option>
      <option value="Yurtiçi Kargo">Yurtiçi Kargo</option>
      <option value="Sürat Kargo">Sürat Kargo</option>
      <option value="UPS Kargo">UPS Kargo</option>
      <option value="PTT Kargo">PTT Kargo</option>
      <option value="MNG Kargo">MNG Kargo</option>
      <option value="Sendeo Kargo">Sendeo Kargo</option>`;
  } else if (pazaryeri.value == pazaryeriN11.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // -----------------------N11---------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kargoList.innerHTML = `<option value=""></option>
      <option value="Aras Kargo">Aras Kargo</option>
      <option value="Yurtiçi Kargo">Yurtiçi Kargo</option>
      <option value="Sürat Kargo">Sürat Kargo</option>
      <option value="PTT Kargo">PTT Kargo</option>
      <option value="MNG Kargo">MNG Kargo</option>
      <option value="Sendeo Kargo">Sendeo Kargo</option>`;
  }
});
btnHesaplama.addEventListener("click", () => {
  let desiSonuc = "";
  desiSonuc = (
    (enInput.value * boyInput.value * yukseklikInput.value) /
    3000
  ).toFixed(2);
  let kargoUcreti = 0;
  let kargo_KDV = 1.18;
  if (pazaryeri.value == pazaryeriHepsiburada.value) {
    //! ------------- Hepsiburada ------------------
    if (kargoList.value == "HepsiJET") {
      if (desiSonuc <= 1) {
        kargoUcreti = 20.9 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 23 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 27.38 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 38 * kargo_KDV;
      } else if (desiSonuc <= 40) {
        kargoUcreti = 69.85 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Aras Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 21.69 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 23.89 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 25.74 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 27.61 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 29.31 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 33.57 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 35.68 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 37.8 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 39.91 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 42.03 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 43.73 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 45.43 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 47.12 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 48.82 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 50.52 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 53.15 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 55.79 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 58.42 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 61.06 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 63.69 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Yurtiçi Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 30.97 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 31.76 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 33.77 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 34.44 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 38.46 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 39.8 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 44.95 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 46.87 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 49.65 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 51.88 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 56.92 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 60.71 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 63.07 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 67.99 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 72.24 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 74.24 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 78.49 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 81.41 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 83.75 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 86.33 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sürat Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 23.03 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 25.33 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 26.61 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 28.15 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 28.66 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 29.68 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 31.91 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 34.29 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 36.33 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 38.59 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 38.89 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 39.92 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 40.94 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 44.83 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 51.94 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 54.91 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 57.88 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 62.33 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 65.3 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "PTT Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 26.27 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 29.24 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 30.51 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 31.78 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 36.95 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 39.32 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 41.68 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 44.05 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 46.41 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 48.78 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 51.14 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 53.5 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 55.87 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 58.23 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 60.6 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 62.96 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 65.33 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 67.69 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 70.06 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 72.63 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "MNG Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 21.48 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 23.53 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 26.29 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 29.32 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 32.46 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 35.61 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 37.7 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 39.8 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 41.89 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 43.99 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 47.13 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 49.22 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 51.32 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 54.46 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 56.56 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 61.8 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 64.94 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 68.08 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 70.18 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 73.32 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sendeo Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 26.88 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 28.55 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 34.45 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 48.1 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 58.03 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Borusan Kargo") {
      if (desiSonuc <= 29) {
        kargoUcreti = 114.08 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Horoz Kargo") {
      if (desiSonuc <= 34) {
        kargoUcreti = 132.59 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Ceva Kargo") {
      if (desiSonuc <= 30) {
        kargoUcreti = 164.35 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    }
  } else if (pazaryeri.value == pazaryeriTrendyol.value) {
    //! --------------- Trendyol -------------------
    if (kargoList.value == "Trendyolexpress") {
      if (desiSonuc <= 1) {
        kargoUcreti = 20.33 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 20.77 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 24.32 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 24.48 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 25.44 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 27.53 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 28.89 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 31.4 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 32.75 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 34.37 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 36.64 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 36.7 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 36.94 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 37.48 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 39.78 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 51.43 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 52.66 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 54.55 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 56.68 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 58.74 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Aras Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 21.49 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 23.54 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 25.59 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 27.63 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 29.48 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 33.78 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 35.82 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 38.22 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 40.42 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 42.62 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 44.47 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 46.33 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 48.19 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 50.05 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 51.9 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 54.8 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 57.69 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 60.6 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 63.51 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 66.4 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Yurtiçi Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 29.26 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 30.04 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 31.49 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 32.17 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 37.32 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 38.53 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 43.57 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 45.25 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 48.04 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 50.17 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 53.42 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 56.76 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 58.55 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 63.14 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 66.5 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 68.4 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 72.2 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 75.78 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 77.35 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 79.01 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sürat Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 21.49 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 25.02 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 26.41 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 27.63 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 28.2 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 28.94 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 31.91 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 33.4 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 34.88 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 35.62 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 35.84 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 36.96 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 37.85 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 41.45 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 49.93 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 53.29 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 56.1 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 58.9 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 61.71 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "UPS Kargo") {
      if (desiSonuc <= 5) {
        kargoUcreti = 24.5 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 32 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 37 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 54 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "PTT Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 20.76 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 25.21 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 26.41 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 28.06 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 29.71 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 33.03 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 36.34 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 41.3 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 43.34 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 45.52 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 47.7 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 49.88 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 52.06 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 54.25 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 56.42 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 58.6 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 60.79 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 62.97 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "MNG Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 20.79 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 21.99 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 24.99 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 25.99 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 27.99 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 32.99 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 33.99 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 35.99 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 37.99 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 40.99 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 45.99 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 46.99 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 47.99 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 49.99 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 56.99 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 59.99 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 62.99 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 64.99 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 66.99 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 69.99 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sendeo Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 27.33 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 31.42 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 40.33 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 58.95 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 69.6 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Borusan Kargo") {
      if (desiSonuc <= 30) {
        kargoUcreti = 122.57 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Horoz Kargo") {
      if (desiSonuc <= 30) {
        kargoUcreti = 128.04 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Ceva Kargo") {
      if (desiSonuc <= 30) {
        kargoUcreti = 163.06 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    }
  } else if (pazaryeri.value == pazaryeriCiceksepeti.value) {
    //! ------------- Çiçeksepeti ------------------
    if (kargoList.value == "Aras Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 24.43 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 27.08 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 30.27 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 33.61 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 36.84 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 38.53 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 40.23 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 41.92 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 43.61 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 45.3 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 45.5 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 45.69 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 45.87 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 46.06 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 46.25 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 48.32 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 50.39 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 52.44 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 54.51 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 56.58 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Yurtiçi Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 30.26 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 31.03 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 32.67 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 33.44 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 38.17 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 40.55 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 45.46 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 46.51 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 47.2 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 47.9 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 55.73 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 59.54 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 61.73 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 66.65 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 70.47 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 72.54 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 76.71 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 79.54 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 81.83 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 84.35 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sürat Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 24.62 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 25.65 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 26.68 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 27.7 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 29.75 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 30.78 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 32.83 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 34.88 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 37.96 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 41.35 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 44.47 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 46.82 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 49.94 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 53.38 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 57.75 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 62.42 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 65.54 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 68.66 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 71.78 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "UPS Kargo") {
      if (desiSonuc <= 5) {
        kargoUcreti = 35.4 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 42.87 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 49.76 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 57.23 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "PTT Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 26.35;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 31.1;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 34.6;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 36.1;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 37.6;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 43.71;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 46.5;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 49.29;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 52.08;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 54.87;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 57.66;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 60.45;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 63.24;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 66.03;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 68.82;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 71.61;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 74.4;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 77.19;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 79.98;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 82.77;
      }
    } else if (kargoList.value == "MNG Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 27.64 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 29.61 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 35.53 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 37.51 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 45.4 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 54.29 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sendeo Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 22.29 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 24 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 26.1 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 27.2 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 28.3 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 29.9 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 31.4 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 33.7 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 36.9 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 39.6 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 41.4 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 43.1 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 45.2 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 49.4 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 52.2 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 57.5 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 61.1 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 64.1 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 67.5 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 72 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    }
  } else if (pazaryeri.value == pazaryeriN11.value) {
    //! ------------------ N11 ----------------------
    if (kargoList.value == "Aras Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 22.46 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 24.89 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 27 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 29.16 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 31.1 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 35.69 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 38.01 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 40.33 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 42.65 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 44.97 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 46.92 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 48.89 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 50.85 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 52.81 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 54.76 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 57.82 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 60.88 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 63.95 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 67.1 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 70.07 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Yurtiçi Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 30.26 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 31.03 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 33 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 33.65 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 37.58 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 38.89 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 43.94 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 45.79 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 48.51 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 50.69 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 53.98 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 57.36 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 59.23 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 63.91 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 67.31 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 69.16 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 72.98 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 76.71 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 78.34 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 79.98 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sürat Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 22.5 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 24.75 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 26 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 27.5 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 28 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 29 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 31.18 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 33.5 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 35.5 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 37.7 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 38 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 39 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 40 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 43.8 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 50.75 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 53.65 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 56.55 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 60.9 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 63.8 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "PTT Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 20.68 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 24.75 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 26.78 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 28.81 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 30.85 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 32.88 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 34.92 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 36.95 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 38.98 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 41.02 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 43.05 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 45.08 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 47.12 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 49.15 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 51.19 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 53.22 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 55.25 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 57.29 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 59.32 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 61.36 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "MNG Kargo") {
      if (desiSonuc <= 2) {
        kargoUcreti = 23.56 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 24.65 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 25.38 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 26.83 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 28.28 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 29.73 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 31.18 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 34.08 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 36.25 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 37.7 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 39.15 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 40.6 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 42.05 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 44.95 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 45.63 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 47.1 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 48.78 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 50.55 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 52.32 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    } else if (kargoList.value == "Sendeo Kargo") {
      if (desiSonuc <= 1) {
        kargoUcreti = 23.9 * kargo_KDV;
      } else if (desiSonuc <= 2) {
        kargoUcreti = 25 * kargo_KDV;
      } else if (desiSonuc <= 3) {
        kargoUcreti = 27.3 * kargo_KDV;
      } else if (desiSonuc <= 4) {
        kargoUcreti = 28.4 * kargo_KDV;
      } else if (desiSonuc <= 5) {
        kargoUcreti = 29.6 * kargo_KDV;
      } else if (desiSonuc <= 6) {
        kargoUcreti = 31.2 * kargo_KDV;
      } else if (desiSonuc <= 7) {
        kargoUcreti = 32.8 * kargo_KDV;
      } else if (desiSonuc <= 8) {
        kargoUcreti = 35.3 * kargo_KDV;
      } else if (desiSonuc <= 9) {
        kargoUcreti = 38.6 * kargo_KDV;
      } else if (desiSonuc <= 10) {
        kargoUcreti = 41.5 * kargo_KDV;
      } else if (desiSonuc <= 11) {
        kargoUcreti = 43.2 * kargo_KDV;
      } else if (desiSonuc <= 12) {
        kargoUcreti = 45.2 * kargo_KDV;
      } else if (desiSonuc <= 13) {
        kargoUcreti = 47.3 * kargo_KDV;
      } else if (desiSonuc <= 14) {
        kargoUcreti = 49.4 * kargo_KDV;
      } else if (desiSonuc <= 15) {
        kargoUcreti = 51.9 * kargo_KDV;
      } else if (desiSonuc <= 16) {
        kargoUcreti = 54.2 * kargo_KDV;
      } else if (desiSonuc <= 17) {
        kargoUcreti = 57.8 * kargo_KDV;
      } else if (desiSonuc <= 18) {
        kargoUcreti = 60.6 * kargo_KDV;
      } else if (desiSonuc <= 19) {
        kargoUcreti = 63.8 * kargo_KDV;
      } else if (desiSonuc <= 20) {
        kargoUcreti = 65.1 * kargo_KDV;
      } else {
        alert(" Desi yüksek gelmektedir !");
      }
    }
  }
  secilenPazaryeri.innerHTML = `${pazaryeri.value}`;
  secilenKargoSirketi.innerHTML = `${kargoList.value}`;
  desi.innerHTML = `${desiSonuc}`;
  if (kargoUcreti > 0) {
    kargoTutar.innerHTML = `${kargoUcreti.toFixed(2)} TL`;
  } else {
    kargoTutar.innerHTML = `Hesaplanamadı`;
  }
});
