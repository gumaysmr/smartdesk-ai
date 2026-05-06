"use client";

import { ClipboardCheck, Copy, MessageSquareText, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { aiResult } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AiResultPanel() {
  const priorityLabels = {
    low: "Düşük",
    medium: "Orta",
    high: "Yüksek"
  };

  return (
    <Card>
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold">Yapay zeka sonucu</h2>
          <p className="text-sm text-muted-foreground">
            Özet, kategori, görevler ve cevap taslağı.
          </p>
        </div>
        <Badge tone="danger">{priorityLabels[aiResult.priority]} öncelik</Badge>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="rounded-lg bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Sparkles size={16} />
            Özet
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{aiResult.summary}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">Çıkarılan görevler</p>
          <div className="grid gap-2">
            {aiResult.tasks.map((task) => (
              <div className="flex items-start gap-3 rounded-md border border-border p-3" key={task}>
                <ClipboardCheck className="mt-0.5 text-teal-600" size={17} />
                <span className="text-sm leading-6">{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MessageSquareText size={16} />
              Cevap taslağı
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => toast.success("Cevap taslağı kopyalandı")}
            >
              <Copy size={15} />
              Kopyala
            </Button>
          </div>
          <p className="text-sm leading-6 text-slate-700">{aiResult.replyDraft}</p>
        </div>
      </CardContent>
    </Card>
  );
}
