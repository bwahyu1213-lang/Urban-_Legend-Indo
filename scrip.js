const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const timeBox = document.getElementById("timeBox");
const input = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const defaultArtikel = document.getElementById('defaultArtikel');
const detailArtikel = document.getElementById('detailArtikel');

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
});

document.querySelectorAll('#sideMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove("menu-open");
  });
});

function updateTime() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);

  const offset = -now.getTimezoneOffset() / 60;
  let zone = offset === 7 ? "WIB" : offset === 8 ? "WITA" : offset === 9 ? "WIT" : "Local";

  timeBox.textContent = `${time} ${zone}`;
}
updateTime();
setInterval(updateTime, 1000);

const legends = {
  kuntilanak: {
    title: "Kuntilanak",
    img: "img/kunitlanak.jpg", 
    text: "Kuntilanak adalah salah satu tokoh mistis yang paling populer dalam cerita rakyat Indonesia. Sosok ini digambarkan sebagai perempuan berambut panjang, berpakaian putih, dan sering muncul di malam hari. Cerita tentang kuntilanak tidak hanya menjadi kisah horor, tetapi juga bagian dari tradisi lisan yang diwariskan turun-temurun di berbagai daerah. Dalam cerita rakyat Jawa, kuntilanak sering dikaitkan dengan arwah perempuan yang meninggal ketika melahirkan. Ia dipercaya menampakkan diri di bawah pohon besar atau di tempat sunyi, sambil mengeluarkan suara tawa melengking atau tangisan bayi. Kisah ini berfungsi sebagai peringatan moral: masyarakat diajak untuk menghormati kehidupan dan kematian, serta menjaga sikap ketika berada di alam terbuka. Di Kalimantan, sosok ini dikenal dengan nama Pontianak, yang kemudian menjadi nama sebuah kota. Cerita rakyat setempat menyebutkan bahwa Pontianak adalah arwah perempuan yang meninggal secara tragis, dan penampakannya menjadi simbol ketakutan sekaligus identitas budaya. Sementara itu, di Sumatra dan daerah lain, kuntilanak sering digambarkan sebagai sosok yang menggoda laki-laki sebelum menakutinya. Dalam budaya populer modern, kuntilanak tetap hidup melalui film, buku, dan media sosial. Esensi dari legenda ini bukan hanya rasa takut, melainkan juga nilai budaya yang mengajarkan tentang kehidupan, kematian, dan misteri yang menyertainya."
  },
  pocong: {
    title: "Pocong",
    img: "img/pocong.jpg",
    text: "Pocong adalah salah satu sosok mistis paling ikonik dalam cerita rakyat Indonesia. Ia digambarkan sebagai arwah orang yang meninggal dunia, namun masih terikat oleh kain kafan yang membungkus tubuhnya. Sosok ini dipercaya bangkit dari kubur karena ikatan kafannya belum dilepaskan, sehingga ia melompat-lompat dengan wajah tertutup kain putih. Dalam tradisi masyarakat Jawa dan daerah lain, pocong sering dianggap sebagai simbol peringatan tentang pentingnya prosesi pemakaman yang benar. Penampakan pocong biasanya dikaitkan dengan kuburan, jalan sepi, atau tempat gelap di malam hari. Banyak cerita rakyat menggambarkan pocong muncul untuk menakut-nakuti orang yang lewat, dengan cara melompat-lompat atau berdiri diam menatap korban. Di beberapa daerah, cerita tentang pocong berkembang menjadi variasi yang berbeda. Ada yang menyebut pocong bisa berbicara, ada pula yang percaya ia muncul sebagai tanda adanya kematian yang akan datang. Dalam budaya populer modern, pocong menjadi salah satu tokoh horor paling sering muncul di film, sinetron, hingga komik Indonesia. Kehadirannya memperkuat citra pocong sebagai hantu khas Nusantara yang menakutkan sekaligus unik."
  },
  leak: {
    title: "Leak",
    img: "img/leak.jpg",
    text: "Leak adalah salah satu tokoh mistis yang berasal dari tradisi lisan masyarakat Bali. Sosok ini digambarkan sebagai manusia yang mempelajari ilmu hitam dan mampu berubah wujud menjadi makhluk menyeramkan. Dalam cerita rakyat, Leak dipercaya bisa melepaskan kepalanya dari tubuh, lengkap dengan organ dalam yang menggantung, lalu terbang mencari mangsa di malam hari. Cerita tentang Leak erat kaitannya dengan praktik sihir dan ilmu gaib. Ia sering digambarkan sebagai musuh para pendeta atau orang suci yang menjaga keseimbangan spiritual di Bali. Masyarakat Bali percaya bahwa Leak berkeliaran di malam hari untuk mencari bayi atau orang yang sedang sakit sebagai korban. Namun, ada juga cerita yang menyebutkan bahwa Leak hanyalah manusia biasa yang berubah wujud karena kekuatan gaib. Dalam budaya populer modern, Leak sering muncul dalam pertunjukan seni, film, dan cerita horor. Sosoknya yang menyeramkan menjadikannya salah satu ikon mistis paling khas dari Bali."
  },
  genderuwo: {
    title: "Genderuwo",
    img: "img/genderuwo.jpg",
    text: "Genderuwo adalah salah satu makhluk gaib yang paling terkenal dalam cerita rakyat Jawa. Sosok ini digambarkan sebagai makhluk besar, berbulu lebat, dengan tubuh kekar dan wajah menyeramkan. Ia dipercaya menghuni hutan, pohon besar, atau tempat-tempat sepi, dan sering dikaitkan dengan kisah mistis yang diwariskan turun-temurun. Dalam cerita rakyat, Genderuwo sering dianggap sebagai makhluk yang suka mengganggu manusia. Ia disebut mampu berubah wujud menjadi sosok lain, bahkan menyerupai manusia untuk menipu korbannya. Ada kisah yang menyebutkan bahwa Genderuwo suka menggoda perempuan, atau menakut-nakuti orang yang berjalan sendirian di malam hari. Masyarakat Jawa percaya bahwa Genderuwo adalah simbol dari kekuatan alam yang liar dan tak terkendali. Kehadirannya menjadi peringatan agar manusia tidak sembarangan memasuki hutan atau tempat angker tanpa izin. Dalam budaya populer modern, Genderuwo sering muncul dalam film horor, komik, hingga pertunjukan seni."
  },
  kuyang: {
    title: "Kuyang",
    img: "img/kuyang.jpg",
    text: "Kuyang adalah salah satu urban legend paling menyeramkan dari Kalimantan. Sosok ini digambarkan sebagai kepala manusia dengan rambut panjang dan organ tubuh yang menggantung, terbang di malam hari mencari mangsa. Dalam cerita rakyat, Kuyang diyakini berasal dari manusia yang mempelajari ilmu hitam, sehingga mampu melepaskan kepala dari tubuhnya untuk mencari darah segar. Masyarakat Dayak dan Melayu di Kalimantan percaya bahwa Kuyang berkeliaran untuk mengincar ibu hamil atau bayi yang baru lahir. Kisah ini berfungsi sebagai peringatan agar masyarakat selalu waspada, terutama di malam hari. Budayawan lokal menyebutkan bahwa legenda Kuyang adalah bagian dari tradisi lisan yang diwariskan turun-temurun, memperlihatkan bagaimana masyarakat menjelaskan rasa takut terhadap kematian dan dunia gaib. Dalam budaya populer modern, Kuyang sering muncul dalam film horor, cerita daring, dan bahkan viral di media sosial. Sosoknya yang unik menjadikannya salah satu ikon mistis khas Kalimantan."
  }
};

function showLegend(key) {
  const legend = legends[key];
  if (!legend) return;

  defaultArtikel.style.display = "none";
  detailArtikel.style.display = "block";

  const imgElement = document.getElementById('legendImg');
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.src = legend.img;
    document.getElementById('legendTitle').innerText = legend.title;
    document.getElementById('legendText').innerText = legend.text;
    imgElement.style.opacity = 1;
    imgElement.style.transition = "opacity 0.5s ease";
  }, 100);

  showRelated(key);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showRelated(current) {
  const list = document.getElementById('relatedList');
  list.innerHTML = "";
  Object.keys(legends)
    .filter(k => k !== current)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .forEach(k => {
      list.innerHTML += `
        <div class="related-item" onclick="showLegend('${k}')">
          <img src="${legends[k].img}" style="width:100px; height:130px; object-fit:cover;">
          <p>${legends[k].title}</p>
        </div>
      `;
    });
}

function performSearch() {
  const key = input.value.toLowerCase().trim();

  if (key === "") {
    detailArtikel.style.display = "none";
    defaultArtikel.style.display = "block";
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

searchBtn.addEventListener('click', performSearch);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch();
  }
});