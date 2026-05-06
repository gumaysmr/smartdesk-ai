import axios from "axios";
import type { AiResult, WorkflowItem } from "@/lib/types";
import { aiResult, workflowItems } from "@/lib/mock-data";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api",
  timeout: 15000
});

export async function fetchWorkflowItems(): Promise<WorkflowItem[]> {
  if (process.env.NEXT_PUBLIC_USE_MOCKS !== "false") {
    return workflowItems;
  }

  const response = await apiClient.get<WorkflowItem[]>("/workflows");
  return response.data;
}

export async function fetchLatestAiResult(): Promise<AiResult> {
  if (process.env.NEXT_PUBLIC_USE_MOCKS !== "false") {
    return aiResult;
  }

  const response = await apiClient.get<AiResult>("/ai/latest-result");
  return response.data;
}
