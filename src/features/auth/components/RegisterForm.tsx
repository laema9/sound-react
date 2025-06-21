"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Loader2, LockIcon } from "lucide-react";
import { supabase } from "@/app/supabaseClient";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        setErrorMsg(error.message);
      } else {
        navigate("/login");
      }
    } catch (err: any) {
      setErrorMsg("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {errorMsg && (
        <div className="text-sm text-red-500 border border-red-200 p-2 rounded-md bg-red-50 dark:bg-red-950 dark:border-red-800">
          {errorMsg}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
          <Input
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            disabled={isLoading}
            className="pl-10 h-12"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="password"
            name="password"
            placeholder="Choose a strong password"
            required
            disabled={isLoading}
            className="pl-10 h-12"
          />
        </div>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full h-12 text-base">
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}
