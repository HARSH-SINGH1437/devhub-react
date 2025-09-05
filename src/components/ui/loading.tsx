import { cn } from "@/lib/utils"

interface LoadingSpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg"
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md", className, ...props }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", sizes[size], className)}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}
