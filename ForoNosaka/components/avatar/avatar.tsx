import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarUserProps {
  name: string | undefined;
  avatarUrl?: string; 
}

export function AvatarUser({ name, avatarUrl}: AvatarUserProps) {
  const seed = encodeURIComponent(name || "usuario");
  const fallbackInitials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <Avatar
      className="h-6 w-6 rounded-lg">
      <AvatarImage
        src={avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${seed}`}
        alt={name || "Usuario"}
      />
      <AvatarFallback className="rounded-lg">
        {fallbackInitials}
      </AvatarFallback>
    </Avatar>
  );
}
