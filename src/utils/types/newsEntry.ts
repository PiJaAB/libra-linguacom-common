export type G_NewsEntry<Timestamp> = {
  title: string;
  notificationSent: boolean;
  publishedAt: Timestamp | null;
  published: boolean;
  text: string;
};