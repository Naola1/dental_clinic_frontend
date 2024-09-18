import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

// Props for the DialogComponent
interface DialogComponenetProps {
  btnName?: string;
  title: string;
  children: ReactNode;
  iconButton?: ReactNode;
}

// DialogComponent to display a dialog with optional button and content
export function DialogComponent({
  btnName,
  title,
  children,
  iconButton,
}: DialogComponenetProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {iconButton ?? <Button variant="outline">{btnName}</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
