import { AlertCircle } from "lucide-react"; //Icon for alerts

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Alert components

// Props for the AlertMessage component
interface AlertMessageProps {
  message: string;
  variant: "default" | "destructive" | null | undefined;
  header: string;
}

// Component to display an alert message
export function AlertMessage({ message, variant, header }: AlertMessageProps) {
  return (
    <Alert variant={variant}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{header}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
