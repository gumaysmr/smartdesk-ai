# SmartDesk AI Mimari Yapısı

## Genel Bakış
SmartDesk AI, yapay zekâ destekli mail ve evrak süreç otomasyon asistanıdır. Proje, kullanıcıların her gün tekrar ettiği mail okuma, evrak inceleme, görev çıkarma ve cevap hazırlama süreçlerini hızlandırmak amacıyla geliştirilmiştir.

## Sistem Akışı
Kullanıcı Girdisi → Ön Yüz → Arka Uç API → Yapay Zeka Analiz Servisi → JSON Yanıtı → Sonuç Kartları

## Temel Modüller

### 1. Girdi Modülü
Kullanıcıdan mail veya evrak metni alınır.

### 2. Yapay Zeka Analiz Modülü
Girilen metin yapay zekâ tarafından analiz edilir. Bu modül:
- kısa özet çıkarır,
- kategori belirler,
- öncelik seviyesini tespit eder,
- yapılacak görevleri listeler,
- profesyonel cevap taslağı oluşturur.

### 3. Sonuç Gösterim Modülü
Yapay zeka tarafından üretilen çıktılar kullanıcıya anlaşılır kart yapıları halinde gösterilir.

### 4. Hata Yönetimi
Boş giriş, API hatası veya eksik yapay zeka yanıtı gibi durumlar kontrol edilir.

## Kullanılan Teknolojiler
- React + Vite
- Node.js / Express
- Yapay zeka API entegrasyonu
- GitHub Flow

## Yapay Zeka Ajanı Kullanımı
- Planlama ajanı: Proje mimarisi, MVP kapsamı ve geliştirme yol haritası için kullanılmıştır.
- Yetenek ajanı: İstem mühendisliği, JSON çıktı formatı ve hata kontrolü önerileri için kullanılmıştır.

## Manuel Geliştirilen Kısımlar
- GitHub depo kurulumu
- Dal koruma ayarları
- Arayüz kararları
- Demo akışı
- Pull Request ve kod inceleme süreci

## Gelecek Geliştirmeler
- Gmail entegrasyonu
- PDF yükleme
- OCR desteği
- Gerçek mail gönderme
- Kullanıcı giriş sistemi
