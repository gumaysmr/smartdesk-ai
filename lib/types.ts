export type WorkflowStatus = "queued" | "in_progress" | "review" | "done";

export type Priority = "low" | "medium" | "high";

export type WorkflowItem = {
  id: string;
  title: string;
  source: "mail" | "document";
  status: WorkflowStatus;
  priority: Priority;
  owner: string;
  updatedAt: string;
  summary: string;
};

export type AiResult = {
  summary: string;
  category: string;
  priority: Priority;
  tasks: string[];
  replyDraft: string;
};

export type AnalyticsPoint = {
  day: string;
  processed: number;
  automated: number;
};
