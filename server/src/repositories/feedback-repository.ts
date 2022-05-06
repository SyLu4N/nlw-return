export interface FeedbackCreateProps {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  // eslint-disable-next-line no-unused-vars
  create: (data: FeedbackCreateProps) => Promise<void>;
}
