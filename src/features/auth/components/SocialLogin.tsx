import { Button } from "@/shared/ui/button";
import { Github } from "lucide-react";

export function SocialLogin() {
  const handleGithubLogin = async () => {
    // ➕ Supabase social auth here
    console.log("GitHub login");
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={handleGithubLogin}
        className="w-full"
        variant="outline"
      >
        <Github className="w-4 h-4 mr-2" />
        Continue with GitHub
      </Button>
    </div>
  );
}
