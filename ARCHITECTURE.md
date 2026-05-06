# SmartDesk AI Mimari Yapısı

## Genel Bakış
SmartDesk AI, yapay zekâ destekli mail ve evrak süreç otomasyon asistanıdır. Proje, kullanıcıların her gün tekrar ettiği mail okuma, evrak inceleme, görev çıkarma ve cevap hazırlama süreçlerini hızlandırmak amacıyla geliştirilmiştir.

## Sistem Akışı
Kullanıcı Girdisi → Frontend → Backend API → AI Analiz Servisi → JSON Yanıtı → Sonuç Kartları

## Temel Modüller

### 1. Girdi Modülü
Kullanıcıdan mail veya evrak metni alınır.

### 2. AI Analiz Modülü
Girilen metin yapay zekâ tarafından analiz edilir. Bu modül:
- kısa özet çıkarır,
- kategori belirler,
- öncelik seviyesini tespit eder,
- yapılacak görevleri listeler,
- profesyonel cevap taslağı oluşturur.

### 3. Sonuç Gösterim Modülü
AI tarafından üretilen çıktılar kullanıcıya anlaşılır kart yapıları halinde gösterilir.

### 4. Hata Yönetimi
Boş giriş, API hatası veya eksik AI yanıtı gibi durumlar kontrol edilir.

## Kullanılan Teknolojiler
- React + Vite
- Node.js / Express
- AI API entegrasyonu
- GitHub Flow

## AI Agent Kullanımı
- Plan Agent: Proje mimarisi, MVP kapsamı ve geliştirme yol haritası için kullanılmıştır.
- Skills Agent: Prompt engineering, JSON çıktı formatı ve hata kontrolü önerileri için kullanılmıştır.

## Manuel Geliştirilen Kısımlar
- GitHub repository kurulumu
- Branch protection ayarları
- UI kararları
- Demo akışı
- Pull Request ve Code Review süreci

## Gelecek Geliştirmeler
- Gmail entegrasyonu
- PDF yükleme
- OCR desteği
- Gerçek mail gönderme
- Kullanıcı giriş sistemi
