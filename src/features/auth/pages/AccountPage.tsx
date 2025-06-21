import { useUser } from "@/features/auth/hooks/useUser";
import { useSession } from "@/features/auth/hooks/useSession";
import { supabase } from "@/app/supabaseClient";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useState } from "react";

export default function AccountPage() {
  const user = useUser();
  const session = useSession();

  const [newPassword, setNewPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage("");

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password updated successfully");
      setNewPassword("");
    }

    setIsUpdating(false);
  };

  return (
    <div className="max-w-xl mx-auto py-12 space-y-6">
      <h1 className="text-2xl font-bold">Test Auth Page</h1>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">User Info</h2>
        <pre className="text-sm bg-muted p-4 rounded">{JSON.stringify(user, null, 2)}</pre>
        <h2 className="text-lg font-semibold">Session</h2>
        <pre className="text-sm bg-muted p-4 rounded">{JSON.stringify(session, null, 2)}</pre>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <Input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={isUpdating || !newPassword}>
            {isUpdating ? "Updating..." : "Update Password"}
          </Button>
        </form>
        {message && <p className="text-sm">{message}</p>}
      </section>

      <section>
        <Button variant="destructive" onClick={handleLogout}>
          🔓 Logout
        </Button>
      </section>
    </div>
  );
}
