import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';

const baslangicOyuncular = [
  { id: 1, isim: 'Ayse', puan: 40, seviye: 3 },
  { id: 2, isim: 'Veli', puan: 15, seviye: 1 },
  { id: 3, isim: 'Zeynep', puan: 70, seviye: 5 },
  { id: 4, isim: 'Mehmet', puan: 55, seviye: 4 },
];

const envanter = [
  { id: 1, ad: 'Kilic', tur: 'silah', deger: 150, nadir: true },
  { id: 2, ad: 'Kalkan', tur: 'zirh', deger: 90, nadir: false },
  { id: 3, ad: 'Iksir', tur: 'sarf', deger: 20, nadir: false },
  { id: 4, ad: 'Asa', tur: 'silah', deger: 300, nadir: true },
];

export default function App() {
  const [filtreAktif, setFiltreAktif] = useState(false);

  // filter & map kullanimi
  const gosterilenOyuncular = filtreAktif
    ? baslangicOyuncular.filter((o) => o.puan > 30)
    : baslangicOyuncular;

  // reduce kullanimi (toplam puan hesaplama)
  const toplamPuan = gosterilenOyuncular.reduce((acc, curr) => acc + curr.puan, 0);

  // Silahlari filtreleme
  const silahlar = envanter.filter((item) => item.tur === 'silah');
  const toplamEnvanter = envanter.reduce((acc, curr) => acc + curr.deger, 0);

  return (
    <ScrollView style={styles.ekran} contentContainerStyle={styles.icerik}>
      <Text style={styles.anaBaslik}>DOT311 — 2. Hafta</Text>
      <Text style={styles.altBaslik}>JavaScript (ES6+) Temelleri & Liste Isleme</Text>

      {/* 1. Bolum: Skor Tablosu (map, filter, template literals) */}
      <View style={styles.kart}>
        <View style={styles.kartBaslikSatir}>
          <Text style={styles.kartBaslik}>🏆 Skor Tablosu</Text>
          <Pressable
            style={[styles.filtreButon, filtreAktif && styles.filtreButonAktif]}
            onPress={() => setFiltreAktif(!filtreAktif)}
          >
            <Text style={[styles.filtreYazi, filtreAktif && styles.filtreYaziAktif]}>
              {filtreAktif ? 'Filtre: > 30 Puan ✓' : 'Tumunu Goster'}
            </Text>
          </Pressable>
        </View>

        {gosterilenOyuncular.map((oyuncu, index) => (
          <View key={oyuncu.id} style={styles.oyuncuSatir}>
            <Text style={styles.oyuncuSira}>{index + 1}.</Text>
            <View style={styles.oyuncuBilgi}>
              <Text style={styles.oyuncuIsim}>{oyuncu.isim}</Text>
              <Text style={styles.oyuncuSeviye}>Seviye {oyuncu.seviye}</Text>
            </View>
            <Text style={styles.oyuncuPuan}>{`${oyuncu.puan} Puan`}</Text>
          </View>
        ))}

        <View style={styles.ozetKutu}>
          <Text style={styles.ozetYazi}>
            Listelenen Oyuncularin Toplam Puani: <Text style={styles.vurgu}>{toplamPuan}</Text>
          </Text>
        </View>
      </View>

      {/* 2. Bolum: Envanter Filtreleme (filter, reduce) */}
      <View style={styles.kart}>
        <Text style={styles.kartBaslik}>🎒 Envanter Istatistikleri</Text>
        <Text style={styles.aciklama}>Silahlar (filter ile filtrelendi):</Text>
        
        {silahlar.map((silah) => (
          <View key={silah.id} style={styles.envanterSatir}>
            <Text style={styles.envanterAd}>⚔️ {silah.ad} {silah.nadir ? '(Nadir)' : ''}</Text>
            <Text style={styles.envanterDeger}>{`${silah.deger} Altin`}</Text>
          </View>
        ))}

        <View style={styles.ozetKutu}>
          <Text style={styles.ozetYazi}>
            Tum Envanter Toplam Degeri: <Text style={styles.vurgu}>{toplamEnvanter} Altin</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  icerik: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  anaBaslik: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  altBaslik: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 20,
  },
  kart: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  kartBaslikSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  kartBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  filtreButon: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#e2e8f0',
  },
  filtreButonAktif: {
    backgroundColor: '#2563eb',
  },
  filtreYazi: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
  },
  filtreYaziAktif: {
    color: '#ffffff',
  },
  oyuncuSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  oyuncuSira: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#94a3b8',
    width: 28,
  },
  oyuncuBilgi: {
    flex: 1,
  },
  oyuncuIsim: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  oyuncuSeviye: {
    fontSize: 12,
    color: '#64748b',
  },
  oyuncuPuan: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  ozetKutu: {
    marginTop: 14,
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    alignItems: 'center',
  },
  ozetYazi: {
    fontSize: 13,
    color: '#475569',
  },
  vurgu: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  aciklama: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
    marginTop: 4,
  },
  envanterSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  envanterAd: {
    fontSize: 15,
    color: '#334155',
  },
  envanterDeger: {
    fontSize: 15,
    fontWeight: '600',
    color: '#d97706',
  },
});
