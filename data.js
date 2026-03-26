const SALON_ADI = "Okey";

const EKRANLAR = {

  kahve: {
    baslik: "Kahveler",
    ikon: "☕",
    kategoriler: [
      {
        ad: "Sıcak Kahve",
        urunler: [
          {ad:"Filtre Kahve", fiyat:"120"},
          {ad:"Latte", fiyat:"140"},
          {ad:"Americano", fiyat:"220"},
          {ad:"White Mocha", fiyat:"150"},
          {ad:"Mocha", fiyat:"250"},
          {ad:"Caramel Latte", fiyat:"150"},
          {ad:"Türk Kahvesi", fiyat:"120"},
          {ad:"Dibek & Menengiç K.", fiyat:"120"},
          {ad:"Chai Latte", fiyat:"130"},
        ]
      },
      {
        ad: "Soğuk Kahve",
        urunler: [
          {ad:"Ice Latte", fiyat:"160"},
          {ad:"Ice Americano", fiyat:"150"},
          {ad:"Ice White Mocha", fiyat:"180"},
          {ad:"Ice Caramel Macchiato", fiyat:"180"},
        ]
      }
    ]
  },

  icecek: {
    baslik: "İçecekler",
    ikon: "🥤",
    kategoriler: [
      {
        ad: "Sıcak İçecekler",
        urunler: [
          {ad:"Çay", fiyat:"50"},
          {ad:"Oralet", fiyat:"60"},
          {ad:"Salep", fiyat:"130"},
          {ad:"Sıcak Çikolata", fiyat:"130"},
          {ad:"Milkshake", aciklama:"Çikolata · Çilek · Böğürtlen", fiyat:"200"},
        ]
      },
      {
        ad: "Soğuk & Dolap",
        urunler: [
          {ad:"Su", fiyat:"35"},
          {ad:"Soda", fiyat:"40"},
          {ad:"Fanta", fiyat:"80"},
          {ad:"Ayran", fiyat:"50"},
          {ad:"Meyve Suyu", fiyat:"60"},
          {ad:"Soda-Limon", fiyat:"70"},
          {ad:"Meyveli Soda", fiyat:"50"},
        ]
      }
    ]
  },

  yiyecek: {
    baslik: "Atıştırmalık",
    ikon: "🍽️",
    kategoriler: [
      {
        ad: "Atıştırmalık",
        urunler: [
          {ad:"Gözleme", aciklama:"Patates·Kaşar·Peynir 200 / Menü 250", fiyat:"210"},
          {ad:"Bazlama Tost", fiyat:"210"},
          {ad:"Tost", aciklama:"Kaşarlı 180 · Sucuklu 200 · Karışık 230", fiyat:"210"},
          {ad:"Sıcak Sepeti", fiyat:"250"},
          {ad:"Makarna", fiyat:"280"},
          {ad:"Wrap", fiyat:"280"},
          {ad:"Hamburger", fiyat:"295"},
          {ad:"Patates Tabağı", fiyat:"170"},
          {ad:"Tavuk Menü", fiyat:"305"},
          {ad:"Pizza Karışık", fiyat:"280"},
        ]
      },
      {
        ad: "Tatlılar",
        urunler: [
          {ad:"Sütlaç", fiyat:"150"},
          {ad:"Profiterol", fiyat:"180"},
          {ad:"Sufle", fiyat:"200"},
        ]
      }
    ]
  }
};

const MASALAR = [
  {ad:"Standart Masa", fiyat:"50", sure:"Saat Başı / Kişi"},
  {ad:"VIP Masa", fiyat:"80", sure:"Saat Başı / Kişi"},
  {ad:"Turnuva Masası", fiyat:"60", sure:"Saat Başı / Kişi"},
  {ad:"Öğrenci Masası", fiyat:"35", sure:"Saat Başı / Kişi"},
];
