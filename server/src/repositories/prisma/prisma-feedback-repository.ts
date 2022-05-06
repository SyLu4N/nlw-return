import { prisma } from '../../prisma';
import { FeedbackCreateProps, FeedbackRepository } from '../feedback-repository';

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateProps) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
