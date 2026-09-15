const defaults = {
  heroTag: "NETWORKING\nARCHITECTURE\nTOGETHER",
  heroText: "Das Netzwerk für Architektur, Stadtplanung und Landschaftsarchitektur – über Universitäten hinweg.",
  mission: "N_AET bringt Studierende der Architektur, Stadtplanung und Landschaftsarchitektur aus verschiedenen Universitäten zusammen. Wir schaffen Raum für Austausch, gemeinsames Lernen, Exkursionen und neue Perspektiven – damit die besten Ideen im Miteinander entstehen.",
  eventTitle: "MEET UP FRANKFURT",
  eventDate: "Sa. 18. Nov. 2026",
  qrUrl: "https://github.com/",
  qrLabel: "WhatsApp / Community"
};

let data = {...defaults, ...JSON.parse(localStorage.getItem("naetDemo") || "{}")};

const $ = s => document.querySelector(s);
const setText = (sel, value, preserveNewlines=false) => {
  const el = $(sel);
  if (!el) return;
  el.innerHTML = preserveNewlines ? value.replace(/\n/g, "<br>") : value;
};

function render(){
  setText("#heroTag", data.heroTag, true);
  setText("#heroText", data.heroText);
  setText("#missionText", data.mission);
  setText("#eventTitle", data.eventTitle);
  setText("#eventDate", data.eventDate);
  setText("#qrLabel", data.qrLabel);
  setText("#modalEventTitle", data.eventTitle);
  setText("#modalEventDate", `${data.eventDate} · Frankfurt am Main`);
  generateQR("#qrcode", data.qrUrl);
  generateQR("#modalQR", data.qrUrl);
  $("#eHeroTag").value = data.heroTag;
  $("#eHeroText").value = data.heroText;
  $("#eMission").value = data.mission;
  $("#eEventTitle").value = data.eventTitle;
  $("#eEventDate").value = data.eventDate;
  $("#eQrUrl").value = data.qrUrl;
  $("#eQrLabel").value = data.qrLabel;
}

function generateQR(selector, text){
  const el = $(selector);
  if (!el) return;
  el.innerHTML = "";
  if (window.QRCode) {
    new QRCode(el, {text, width:116, height:116, colorDark:"#0639b9", colorLight:"#ffffff"});
  } else {
    el.innerHTML = `<div style="color:#0639b9;background:#fff;padding:16px;font:9px monospace;text-align:center">QR<br>library<br>loading…</div>`;
    setTimeout(()=>generateQR(selector,text), 900);
  }
}

function openModal(id){ $(id).classList.add("open"); $(id).setAttribute("aria-hidden","false"); }
function closeModal(el){ el.closest(".modal").classList.remove("open"); }

document.addEventListener("click", e=>{
  const modalBtn = e.target.closest("[data-modal]");
  if (modalBtn) openModal("#"+modalBtn.dataset.modal);
  if (e.target.closest(".close")) closeModal(e.target);
  if (e.target.classList.contains("modal")) e.target.classList.remove("open");
});

render();
