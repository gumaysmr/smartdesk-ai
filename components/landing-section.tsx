"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDashboardStore } from "@/store/dashboard-store";

export function LandingSection() {
  const setActiveView = useDashboardStore((state) => state.setActiveView);

  return (
    <section className="grid min-h-[420px] gap-8 border-b border-border bg-slate-950 px-5 py-10 text-white md:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-center"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.45 }}
      >
        <Badge className="mb-5 w-fit bg-white/12 text-white" tone="neutral">
          Yapay zeka iş akışı paneli
        </Badge>
        <h2 className="max-w-3xl text-4xl font-bold tracking-normal md:text-6xl">
          SmartDeskAI
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          Mail ve evrak süreçlerini tek ekranda izleyen, yapay zeka çıktısını
          okunur kartlara dönüştüren arayüz deneyimi.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => setActiveView("workflows")}>
            İş akışlarını görüntüle <ArrowRight size={17} />
          </Button>
          <Button
            className="border-white/20 bg-white/10 text-white hover:bg-white/16"
            variant="outline"
            onClick={() => setActiveView("analytics")}
          >
            Analitiği aç
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="grid content-center gap-4"
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ delay: 0.1, duration: 0.45 }}
      >
        {[
          { icon: Mail, title: "Mail ön inceleme", text: "Özet, öncelik ve cevap taslağı" },
          { icon: FileText, title: "Evrak inceleme", text: "Evrak kontrolü ve görev çıkarımı" }
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="rounded-lg border border-white/12 bg-white/8 p-5 backdrop-blur"
              key={item.title}
            >
              <Icon className="mb-4 text-amber-300" size={24} />
              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
