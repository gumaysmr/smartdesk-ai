"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AiResultPanel } from "@/components/ai-result-panel";
import { AnalyticsPanel } from "@/components/analytics-panel";
import { DashboardCards } from "@/components/dashboard-cards";
import { DashboardHeader } from "@/components/dashboard-header";
import { LandingSection } from "@/components/landing-section";
import { Sidebar } from "@/components/sidebar";
import { ToastProvider } from "@/components/ui/toast-provider";
import { WorkflowBoard } from "@/components/workflow-board";
import { useDashboardStore } from "@/store/dashboard-store";

const viewTitles = {
  overview: "Genel Bakış",
  workflows: "İş Akışı Panosu",
  analytics: "Analitik"
};

export default function Home() {
  const activeView = useDashboardStore((state) => state.activeView);

  return (
    <main className="min-h-screen">
      <ToastProvider />
      <div className="grid min-h-screen lg:grid-cols-[18rem_1fr]">
        <Sidebar />
        <div className="min-w-0">
          <DashboardHeader />
          <LandingSection />

          <section className="px-5 py-6 lg:px-8">
            <div className="mb-5 flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">Geçerli görünüm</p>
              <h2 className="text-2xl font-bold">{viewTitles[activeView]}</h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-5"
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: 8 }}
                key={activeView}
                transition={{ duration: 0.22 }}
              >
                {activeView === "overview" && (
                  <>
                    <DashboardCards />
                    <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
                      <WorkflowBoard />
                      <AiResultPanel />
                    </div>
                    <AnalyticsPanel />
                  </>
                )}

                {activeView === "workflows" && (
                  <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                    <WorkflowBoard />
                    <AiResultPanel />
                  </div>
                )}

                {activeView === "analytics" && (
                  <>
                    <DashboardCards />
                    <AnalyticsPanel />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </div>
    </main>
  );
}
