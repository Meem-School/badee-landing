import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface Props extends Omit<ButtonProps, "asChild"> {
  label?: string;
}

export function WhatsAppButton({
  label = "احجز عبر واتساب",
  className,
  size = "lg",
  variant = "whatsapp",
  ...props
}: Props) {
  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(className)}
      {...props}
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (يفتح واتساب في نافذة جديدة)`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </Button>
  );
}
