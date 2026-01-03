// 1. Inisialisasi Elemen DOM
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const timeBox = document.getElementById("timeBox");
const input = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const defaultArtikel = document.getElementById('defaultArtikel');
const detailArtikel = document.getElementById('detailArtikel');

// 2. Fungsi Jam Real-time (WIB/WITA/WIT)
function updateTime() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);

  const offset = -now.getTimezoneOffset() / 60;
  let zone = offset === 7 ? "WIB" : offset === 8 ? "WITA" : offset === 9 ? "WIT" : "Local";

  if (timeBox) {
    timeBox.textContent = `${time} ${zone}`;
  }
}
setInterval(updateTime, 1000);
updateTime();

// 3. Navigasi Sidebar (Hanya jalan jika elemen ada)
if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
}

document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove("menu-open");
  });
});

// 4. Data Database Urban Legend
const legends = {
  kuntilanak: {
    title: "Kuntilanak",
    img: "img/kunitlanak.jpg", 
    text: "Kuntilanak adalah salah satu tokoh mistis yang paling populer dalam cerita rakyat Indonesia..."
  },
  pocong: {
    title: "Pocong",
    img: "img/pocong.jpg",
    text: "Pocong adalah salah satu sosok mistis paling ikonik dalam cerita rakyat Indonesia..."
  },
  leak: {
    title: "Leak",
    img: "img/leak.jpg",
    text: "Leak adalah salah satu tokoh mistis yang berasal dari tradisi lisan masyarakat Bali..."
  },
  genderuwo: {
    title: "Genderuwo",
    img: "img/genderuwo.jpg",
    text: "Genderuwo adalah salah satu makhluk gaib yang paling terkenal dalam cerita rakyat Jawa..."
  },
  kuyang: {
    title: "Kuyang",
    img: "img/kuyang.jpg",
    text: "Kuyang adalah salah satu urban legend paling menyeramkan dari Kalimantan..."
  }
};

// 5. Fungsi Menampilkan Detail Artikel
function showLegend(key) {
  const legend = legends[key];
  if (!legend || !defaultArtikel || !detailArtikel) return;

  defaultArtikel.style.display = "none";
  detailArtikel.hidden = false;
  detailArtikel.style.display = "block";

  const imgElement = document.getElementById('legendImg');
  if (imgElement) {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = legend.img;
      document.getElementById('legendTitle').innerText = legend.title;
      document.getElementById('legendText').innerText = legend.text;
      imgElement.style.opacity = 1;
      imgElement.style.transition = "opacity 0.5s ease";
    }, 100);
  }

  showRelated(key);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Fungsi Menampilkan Artikel Terkait
function showRelated(current) {
  const list = document.getElementById('relatedList');
  if (!list) return;
  list.innerHTML = "";
  Object.keys(legends)
    .filter(k => k !== current)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .forEach(k => {
      list.innerHTML += `
        <div class="related-item" onclick="showLegend('${k}')" style="cursor:pointer;">
          <img src="${legends[k].img}" style="width:100px; height:130px; object-fit:cover;">
          <p>${legends[k].title}</p>
        </div>
      `;
    });
}

// 7. Fungsi Search (DIBUNGKUS AGAR TIDAK ERROR DI CONTACT US)
function performSearch() {
  if (!input) return;
  const key = input.value.toLowerCase().trim();

  if (key === "") {
    if (detailArtikel) detailArtikel.style.display = "none";
    if (defaultArtikel) defaultArtikel.style.display = "block";
    return;
  }

  const found = Object.keys(legends).find(k => {
    return legends[k].title.toLowerCase() === key || k === key;
  });

  if (found) {
    showLegend(found);
  } else {
    alert("Legenda '" + input.value + "' tidak ditemukan.");
  }
}

// Cek apakah tombol search ada sebelum pasang listener
if (searchBtn && input) {
  searchBtn.addEventListener('click', performSearch);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}
