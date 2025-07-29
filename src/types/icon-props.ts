export interface IconProps {
    className?: string;
    size?: number | string;
    strokeWidth?: number; // ✅ Add this line
    [key: string]: any;   // Optional: for additional flexibility
  }
  