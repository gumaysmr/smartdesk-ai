export type TeamMember = 'Umay' | 'Burak' | 'Emre';

export type ModuleStatus = 'planned' | 'in-progress' | 'blocked' | 'done';

export type AiProvider = 'openai' | 'claude' | 'mock';

export type WorkflowPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface SystemModule {
  id: string;
  owner: TeamMember;
  title: string;
  status: ModuleStatus;
}

export interface WorkflowTask {
  id: string;
  title: string;
  priority: WorkflowPriority;
  assignee?: TeamMember;
  dueDate?: string;
}

export interface AiAnalysisRequest {
  input: string;
  provider?: Exclude<AiProvider, 'mock'>;
}

export interface AiAnalysisResult {
  summary: string;
  category: string;
  priority: WorkflowPriority;
  tasks: WorkflowTask[];
  replyDraft: string;
  provider: AiProvider;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
