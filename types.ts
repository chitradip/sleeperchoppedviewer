export interface SleeperUser {
  username: string;
  user_id: string;
  display_name: string;
  avatar: string | null;
  metadata?: {
    team_name?: string;
  };
  is_bot?: boolean;
}
