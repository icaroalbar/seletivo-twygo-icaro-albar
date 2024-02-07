import { ReactElement } from "react";
import { useTheme } from "../components/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Switch } from "../components/ui/switch";

export function Nav(): ReactElement {
  const { theme, setTheme } = useTheme();
  return (
    <nav className=" bg-secondary py-3 border-b border-border">
      <div className="container flex justify-between items-center">
        <img src="logo.png" alt="Logo Twygo" width={90} />

        <div className="flex gap-x-3 items-center">
          <Switch
            onCheckedChange={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          />
          <p className="text-sm text-muted-foreground capitalize">usuário</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
