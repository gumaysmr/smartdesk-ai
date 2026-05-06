import type { AiResult, AnalyticsPoint, WorkflowItem } from "@/lib/types";

export const workflowItems: WorkflowItem[] = [
  {
    id: "wf-1042",
    title: "Tedarik sözleşmesi yenileme talebi",
    source: "document",
    status: "in_progress",
    priority: "high",
    owner: "Burak",
    updatedAt: "Bugün 10:20",
    summary: "Yenileme tarihi yaklaşan sözleşme için onay ve fiyat kontrolü gerekli."
  },
  {
    id: "wf-1038",
    title: "Müşteri destek maili",
    source: "mail",
    status: "review",
    priority: "medium",
    owner: "Burak",
    updatedAt: "Bugün 09:45",
    summary: "Geciken teslimat hakkında net cevap taslağı hazırlandı."
  },
  {
    id: "wf-1033",
    title: "IK izin formu kontrolu",
    source: "document",
    status: "queued",
    priority: "low",
    owner: "Burak",
    updatedAt: "Dün 17:15",
    summary: "Eksik imza ve tarih alanları otomatik işaretlendi."
  },
  {
    id: "wf-1029",
    title: "Finans ödeme hatırlatması",
    source: "mail",
    status: "done",
    priority: "high",
    owner: "Burak",
    updatedAt: "Dün 14:10",
    summary: "Ödeme takibi için görev listesi ve cevap metni oluşturuldu."
  }
];

export const aiResult: AiResult = {
  summary:
    "Müşteri, geciken teslimat için yeni tarih ve resmi bilgilendirme talep ediyor.",
  category: "Müşteri Operasyonu",
  priority: "high",
  tasks: [
    "Lojistik ekibinden güncel teslimat tarihi al",
    "Müşteriye net tarih içeren cevap gönder",
    "Gecikme sebebini CRM kaydına ekle"
  ],
  replyDraft:
    "Merhaba, teslimat sürecindeki gecikme için üzgünüz. Lojistik ekibimizden aldığımız güncel bilgiye göre teslimatınız için en yakın net tarihi sizinle paylaşacağız."
};

export const analyticsData: AnalyticsPoint[] = [
  { day: "Pzt", processed: 18, automated: 12 },
  { day: "Sali", processed: 26, automated: 17 },
  { day: "Cars", processed: 22, automated: 16 },
  { day: "Pers", processed: 31, automated: 23 },
  { day: "Cuma", processed: 28, automated: 21 },
  { day: "Cmt", processed: 14, automated: 9 },
  { day: "Paz", processed: 10, automated: 6 }
];
