"use client";

import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { checkLoginAction } from "../actions/login";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, isPending] = useActionState(checkLoginAction, null);
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">LOGIN</h1>
        <form action={formAction} className="flex flex-col gap-4">
          <Input placeholder="email" name="email" required error={!!state?.error} />
          <Input
            placeholder="password"
            name="password"
            required
            type="password"
            error={!!state?.error}
            helperText={state?.error}
          />
          <Button label="LOGIN" primary disabled={isPending} />
        </form>
      </div>
    </div>
  );
}
