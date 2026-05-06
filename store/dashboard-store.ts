"use client";

import { create } from "zustand";
import type { WorkflowItem } from "@/lib/types";
import { workflowItems } from "@/lib/mock-data";

type DashboardView = "overview" | "workflows" | "analytics";

type DashboardState = {
  activeView: DashboardView;
  selectedWorkflowId: string;
  workflows: WorkflowItem[];
  setActiveView: (view: DashboardView) => void;
  selectWorkflow: (id: string) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  activeView: "overview",
  selectedWorkflowId: workflowItems[0]?.id ?? "",
  workflows: workflowItems,
  setActiveView: (activeView) => set({ activeView }),
  selectWorkflow: (selectedWorkflowId) => set({ selectedWorkflowId })
}));
