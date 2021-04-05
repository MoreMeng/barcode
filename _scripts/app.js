const beforePrint = () => {
  console.log('Functionality to run before printing.');
};

const afterPrint = () => {
  console.log('Functionality to run after printing');
  let bot = document.getElementById("bot");
  bot.value++;
  console.log(bot.value);

  if (bot.value > 40 && ( (bot.value % 40) == 1) ) {
    let box = document.getElementById("box").value++;
    // bot.value = 1;
    console.log(`${box} : ${bot.value}`);
  }

};

const generate = () => {

  let encoder = new Code128Generator();

  let lot = document.getElementById("lot").value;
  let exp = document.getElementById("exp").value;
  let sn = document.getElementById("sn").value;
  let box = document.getElementById("box").value;
  let bot = document.getElementById("bot").value;

  document.getElementById("pntLot").innerHTML = `${encoder.encode(lot)}`;
  document.getElementById("pntExp").innerHTML = `${encoder.encode(exp)}`;
  document.getElementById("pntSn").innerHTML = `${encoder.encode(sn)}`;
  document.getElementById("pntBox").innerHTML = `${box}`;
  document.getElementById("pntBot").innerHTML = `${bot}`;

  // document.getElementById("pntLot2").innerHTML = `${encoder.encode(lot)}`;
  // document.getElementById("pntExp2").innerHTML = `${encoder.encode(exp)}`;
  // document.getElementById("pntSn2").innerHTML = `${encoder.encode(sn)}`;
  // document.getElementById("pntBox2").innerHTML = `${box}`;
  // document.getElementById("pntBot2").innerHTML = `${bot}`;



  // const listGroup = document.querySelector('.list-group');
  // let cln = listGroup.cloneNode(true);
  // listGroup.replaceChild(cln, listGroup.childNodes[0]);

  // var item = document.getElementById("myList").childNodes[0];

  // document.getElementById("print").append(cln);
  // listGroup.after(cln);

  // listGroup.removeChild(cln);

  window.print();

}

(function () {
  // window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
  // generate();
  // document.getElementById('print').style.display = 'block';
}());