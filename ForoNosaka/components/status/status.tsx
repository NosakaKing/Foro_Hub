import { Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface StatusProps {
  status?: string;
}

export const TopicStatus = ({ status }: StatusProps) => {
  if (status === "NO_RESPONDIDO") {
    return (
      <Tooltip>
        <TooltipTrigger>
          <Check className="text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Este tema no ha sido respondido</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  if (status === "SOLUCIONADO") {
    return (
      <Tooltip>
        <TooltipTrigger>
          <Check />
        </TooltipTrigger>
        <TooltipContent>
          <p>Este tema ha sido solucionado</p>
        </TooltipContent>
      </Tooltip>
    );
  }


};
