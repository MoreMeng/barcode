const beforePrint = () => {
  console.log('Functionality to run before printing.');
};

const afterPrint = () => {
  console.log('Functionality to run after printing');
  let bot = document.getElementById("bot");
  bot.value++;
  // console.log(bot.value);

  if (bot.value > 40 && ((bot.value % 40) == 1)) {
    let box = document.getElementById("box").value++;
    // bot.value = 1;
    console.log(`${box} : ${bot.value}`);
  }

};

const generate = (print) => {

  let encoder = new Code128Generator();

  let lot = document.getElementById("lot").value;
  let lotBar = encoder.encode(lot);

  let sn = document.getElementById("sn").value;
  let snBar = encoder.encode(sn);

  let exp = document.getElementById("exp").value;
  let expBar = encoder.encode(exp)

  let box = document.getElementById("box").value;
  let bot = document.getElementById("bot").value;

  let botMod = bot % 40;

  document.querySelector("#print .pntLot").innerHTML = `${lotBar}`;
  document.querySelector("#print .pntLotTxt").innerHTML = `${lot}`;
  document.querySelector("#print .pntSn").innerHTML = `${snBar}`;
  document.querySelector("#print .pntSnTxt").innerHTML = `${sn}`;
  document.querySelector("#print .pntExp").innerHTML = `${expBar}`;
  document.querySelector("#print .pntExpTxt").innerHTML = `${exp}`;
  document.querySelector("#print .pntBox").innerHTML = `${box}`;
  document.querySelector("#print .pntBot").innerHTML = `${bot}`;

  document.querySelector("#print2 .pntLot").innerHTML = `${lotBar}`;
  document.querySelector("#print2 .pntLotTxt").innerHTML = `${lot}`;
  document.querySelector("#print2 .pntSn").innerHTML = `${snBar}`;
  document.querySelector("#print2 .pntSnTxt").innerHTML = `${sn}`;
  document.querySelector("#print2 .pntExp").innerHTML = `${expBar}`;
  document.querySelector("#print2 .pntExpTxt").innerHTML = `${exp}`;
  document.querySelector("#print2 .pntBox").innerHTML = `${box}`;
  document.querySelector("#print2 .pntBot").innerHTML = `${bot}`;

  console.log(`bot = ${bot} Mod = ${botMod}`);

  let clone = document.getElementById('clone');
  let html = '';

  clone.innerHTML = '';

  if (botMod == 1) {

    for (let i = ++bot; i < (bot+9) ; i++) {

      html += `<div class="pt-3 mb-0 print-page-break"><div class="row"><div class="col-3 pt-3">Lot No.</div><div class="col-8"><span class="barcode d-block">${lotBar}</span><span class="d-block text-barcode">${lot}</span></div></div><div class="row"><div class="col-3 pt-3">S/N</div><div class="col-8"><span class="barcode d-block">${snBar}</span><span class="d-block text-barcode">${sn}</span></div></div><div class="row"><div class="col-3 pt-3">Exp</div><div class="col-8"><span class="barcode d-block">${expBar}</span><span class="d-block text-barcode">${exp}</span></div></div><div class="row"><div class="col-3"></div><div class="col-8 row"><div class="col">กล่องที่ <span>${box}</span></div><div class="col">ขวดที่ <span>${i}</span></div></div></div></div>`;

      html += `<div class="pt-3 mb-0 print-page-break"><div class="row"><div class="col-3 pt-3">Lot No.</div><div class="col-8"><span class="barcode d-block">${lotBar}</span><span class="d-block text-barcode">${lot}</span></div></div><div class="row"><div class="col-3 pt-3">S/N</div><div class="col-8"><span class="barcode d-block">${snBar}</span><span class="d-block text-barcode">${sn}</span></div></div><div class="row"><div class="col-3 pt-3">Exp</div><div class="col-8"><span class="barcode d-block">${expBar}</span><span class="d-block text-barcode">${exp}</span></div></div><div class="row"><div class="col-3"></div><div class="col-8 row"><div class="col">กล่องที่ <span>${box}</span></div><div class="col">ขวดที่ <span>${i}</span></div></div></div></div>`;
    }
    clone.innerHTML = html;
  }

  if (print)
    window.print();

}


(function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
  generate(0);
  // document.getElementById('print').style.display = 'block';
}());