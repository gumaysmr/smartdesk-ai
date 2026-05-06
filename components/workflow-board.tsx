"use client";

import { FileText, Mail, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useDashboardStore } from "@/store/dashboard-store";
import type { Priority, WorkflowStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusLabels: Record<WorkflowStatus, string> = {
  queued: "Sırada",
  in_progress: "Devam ediyor",
  review: "İncelemede",
  done: "Tamamlandı"
};

const priorityLabels: Record<Priority, string> = {
  low: "Düşük",
  medium: "Orta",
  high: "Yüksek"
};

const priorityTone: Record<Priority, "success" | "warning" | "danger"> = {
  low: "success",
  medium: "warning",
  high: "danger"
};

export function WorkflowBoard() {
  const workflows = useDashboardStore((state) => state.workflows);
  const selectedWorkflowId = useDashboardStore((state) => state.selectedWorkflowId);
  const selectWorkflow = useDashboardStore((state) => state.selectWorkflow);

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold">İş akışı görüntüleme</h2>
          <p className="text-sm text-muted-foreground">
            Yapay zeka analizinden gelen işler arayüz tarafında izlenir.
          </p>
        </div>
        <Button size="sm" variant="outline">
          <MoreHorizontal size={16} />
          Görünümü yönet
        </Button>
      </CardHeader>
      <CardContent className="grid gap-3">
        {workflows.map((workflow) => {
          const Icon = workflow.source === "mail" ? Mail : FileText;
          const selected = selectedWorkflowId === workflow.id;

          return (
            <button
              className={cn(
                "focus-ring grid gap-4 rounded-lg border border-border bg-white p-4 text-left transition hover:border-teal-300 hover:bg-teal-50/40 md:grid-cols-[auto_1fr_auto]",
                selected && "border-teal-500 bg-teal-50"
              )}
              key={workflow.id}
              onClick={() => selectWorkflow(workflow.id)}
              type="button"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                <Icon size={20} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{workflow.title}</h3>
                  <Badge tone={priorityTone[workflow.priority]}>
                    {priorityLabels[workflow.priority]}
                  </Badge>
                  <Badge tone="info">{statusLabels[workflow.status]}</Badge>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {workflow.summary}
                </p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                <p>{workflow.owner}</p>
                <p>{workflow.updatedAt}</p>
              </div>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
