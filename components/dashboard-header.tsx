"use client";

import { Bell, RefreshCcw, Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-border bg-white/74 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
          <p className="text-sm font-medium text-muted-foreground">SmartDeskAI</p>
        <h1 className="text-2xl font-bold tracking-normal md:text-3xl">
          Mail ve evrak otomasyon paneli
        </h1>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
        <label className="focus-within:focus-ring flex h-10 min-w-0 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-muted-foreground sm:w-72">
          <Search size={16} />
          <input
            className="min-w-0 flex-1 border-0 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            placeholder="İş akışı ara"
          />
        </label>
        <div className="flex gap-2">
          <Button
            aria-label="Yenile"
            size="icon"
            variant="outline"
            onClick={() => toast.success("Panel verileri yenilendi")}
            title="Yenile"
          >
            <RefreshCcw size={17} />
          </Button>
          <Button aria-label="Bildirimler" size="icon" variant="outline" title="Bildirimler">
            <Bell size={17} />
          </Button>
        </div>
      </div>
    </header>
  );
}
