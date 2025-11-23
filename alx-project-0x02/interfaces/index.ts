// Card Props
export interface CardProps {
  title: string;
  content: string;
}

// Button Props
export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

// Post Modal Props
export interface PostProps {
  title: string;
  content: string;
  userId?: number;
}
