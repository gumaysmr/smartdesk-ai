"use client";

import { BarChart3, Inbox, LayoutDashboard, Sparkles } from "lucide-react";
import { useDashboardStore } from "@/store/dashboard-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "overview" as const, label: "Genel Bakış", icon: LayoutDashboard },
  { id: "workflows" as const, label: "İş Akışları", icon: Inbox },
  { id: "analytics" as const, label: "Analitik", icon: BarChart3 }
];

export function Sidebar() {
  const activeView = useDashboardStore((state) => state.activeView);
  const setActiveView = useDashboardStore((state) => state.setActiveView);

  return (
    <aside className="flex min-h-full w-full flex-col border-r border-border bg-white/88 px-4 py-5 backdrop-blur lg:w-72">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Sparkles size={20} />
        </div>
        <div>
          <p className="text-base font-bold">SmartDeskAI</p>
          <p className="text-xs text-muted-foreground">Burak arayüz çalışma alanı</p>
        </div>
      </div>

      <nav className="grid gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeView === item.id;

          return (
            <Button
              key={item.id}
              className={cn(
                "justify-start",
                active && "bg-slate-900 text-white hover:bg-slate-800"
              )}
              variant={active ? "default" : "ghost"}
              onClick={() => setActiveView(item.id)}
            >
              <Icon size={18} />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-lg border border-border bg-muted p-4">
        <p className="text-sm font-semibold">Arayüz kapsamı</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Panel, iş akışı görüntüleme, analitik, yapay zeka sonuç ekranı ve
          etkileşim durumları.
        </p>
      </div>
    </aside>
  );
}
