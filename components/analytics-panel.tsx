"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { analyticsData } from "@/lib/mock-data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AnalyticsPanel() {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold">Haftalık işlem hacmi</h2>
          <p className="text-sm text-muted-foreground">
            İşlenen mail ve evrak hacmi.
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer height="100%" width="100%">
              <AreaChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Area
                  dataKey="processed"
                  fill="#14b8a6"
                  fillOpacity={0.18}
                  stroke="#0f766e"
                  strokeWidth={2}
                  type="monotone"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold">Otomasyon dağılımı</h2>
          <p className="text-sm text-muted-foreground">
            Günlere göre yapay zekanın ele aldığı işler.
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="automated" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
