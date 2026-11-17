// DOT311 — 2. Hafta Ders Notu Bölüm 9'daki Ödev / Alıştırma Çözümü

console.log("==================================================");
console.log("DOT311 — Hafta 2: JavaScript (ES6+) Alıştırmaları");
console.log("==================================================\n");

const oyuncular = [
  { isim: "Ayşe", puan: 40 },
  { isim: "Veli", puan: 15 },
  { isim: "Zeynep", puan: 70 },
  { isim: "Mehmet", puan: 55 },
];

console.log("Kaynak Dizi:");
console.log(oyuncular);
console.log("\n--------------------------------------------------");

// 1) Sadece isimlerden oluşan bir dizi çıkar (map)
console.log("1) map() ile sadece isimlerden oluşan dizi:");
const sadeceIsimler = oyuncular.map((o) => o.isim);
console.log(sadeceIsimler);
// Çıktı: [ 'Ayşe', 'Veli', 'Zeynep', 'Mehmet' ]

console.log("\n--------------------------------------------------");

// 2) Puanı 30'dan büyük oyuncuları filtrele (filter)
console.log("2) filter() ile puanı 30'dan büyük oyuncular:");
const puaniOtuzdanBuyukler = oyuncular.filter((o) => o.puan > 30);
console.log(puaniOtuzdanBuyukler);

console.log("\n--------------------------------------------------");

// 3) Her oyuncu için `${isim}: ${puan} puan` metni yazdır (forEach + template literal)
console.log("3) forEach() ve template literal ile biçimlendirilmiş liste:");
oyuncular.forEach((o, index) => {
  console.log(`${index + 1}. ${o.isim}: ${o.puan} puan`);
});

console.log("\n--------------------------------------------------");
// Ekstra Alıştırma: Toplam puan (reduce) ve Lider oyuncu
const toplamPuan = oyuncular.reduce((toplam, o) => toplam + o.puan, 0);
const lider = oyuncular.reduce((enIyi, o) => (o.puan > enIyi.puan ? o : enIyi), oyuncular[0]);

console.log(`Toplam Puan: ${toplamPuan}`);
console.log(`Lider Oyuncu: ${lider.isim} (${lider.puan} puan)`);
console.log("\nAlıştırmalar başarıyla tamamlandı!");
