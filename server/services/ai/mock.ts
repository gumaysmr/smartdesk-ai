import type { AiAnalysisResult } from '../../../src/shared/types';

export function createMockAnalysis(input: string): AiAnalysisResult {
  const trimmed = input.trim();

  return {
    summary: trimmed.length > 140 ? `${trimmed.slice(0, 137)}...` : trimmed,
    category: 'general-workflow',
    priority: 'medium',
    tasks: [
      {
        id: 'task-1',
        title: 'Girdiyi incele ve gerekli aksiyonlari netlestir',
        priority: 'medium',
      },
    ],
    replyDraft:
      'Merhaba, talebinizi aldik. Gerekli incelemeyi tamamlayip aksiyon planini sizinle paylasacagiz.',
    provider: 'mock',
  };
}
