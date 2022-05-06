export interface FeedbackCreateProps {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackCreateProps) => Promise<void>;
}
