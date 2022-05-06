import { SubmitFeedbackUseCase } from './submit-feedback-use-cases';
/* eslint-disable no-undef */

describe('Submit feedback', () => {
  it('should be able submt a feeback', async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} },
    );

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'BUGO ALI Ó',
    })).resolves.not.toThrow();
  });
});
