import { Clock3, FileCheck2, Gauge, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    label: "Bugün işlenen",
    value: "42",
    change: "+18%",
    icon: FileCheck2
  },
  {
    label: "Otomasyon oranı",
    value: "73%",
    change: "+9%",
    icon: Zap
  },
  {
    label: "Ortalama yanıt süresi",
    value: "2,4 dk",
    change: "-31%",
    icon: Clock3
  },
  {
    label: "Yüksek öncelikli",
    value: "8",
    change: "canlı",
    icon: Gauge
  }
];

export function DashboardCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <Card key={metric.label}>
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <p className="mt-3 text-3xl font-bold">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold text-emerald-600">{metric.change}</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                <Icon size={21} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
