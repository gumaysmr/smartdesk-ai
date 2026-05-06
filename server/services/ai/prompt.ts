import type { AiAnalysisRequest } from '../../../src/shared/types';

export function buildAnalysisPrompt(request: AiAnalysisRequest) {
  return [
    'SmartDeskAI icin ofis workflow analizi yap.',
    'Yalnizca su JSON alanlarini dondur: summary, category, priority, tasks, replyDraft.',
    'priority degeri low, medium, high veya urgent olmali.',
    'tasks dizisindeki her kayit id, title ve priority icermeli.',
    `Kullanici girdisi:\n${request.input}`,
  ].join('\n\n');
}
