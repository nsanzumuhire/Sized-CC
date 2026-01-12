import { LucideProps } from "lucide-react";

export const HangingSign = (props: LucideProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 22V2" />
        <path d="M4 6h16" />
        <path d="M12 6v4" />
        <path d="M16 6v4" />
        <rect x="8" y="10" width="12" height="8" rx="1" />
    </svg>
);
