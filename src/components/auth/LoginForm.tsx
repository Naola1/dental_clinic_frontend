import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LoginSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Form } from "../ui/form";
import { InputForm } from "../input-form/input";
import { useLogin } from "@/hooks/use-auth";
import Loading from "../loading/Loading";

export function LoginForm() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useLogin();

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    await login.mutateAsync(data);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[350px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Login into your account</CardTitle>
              <CardDescription>Lily dental clinic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <InputForm
                control={form.control}
                label={"Email"}
                placeholder={"Enter your email"}
                name={"email"}
              />

              <InputForm
                control={form.control}
                label={"Password"}
                placeholder={"Enter your password"}
                name={"password"}
              />
            </CardContent>
            <div className="flex flex-col justify-end px-6 py-3">
              <Button disabled={login.isPending} className="flex items-center">
                {login.isPending ? <Loading /> : "Login"}
              </Button>
            </div>

            <div className="flex justify-center items-center my-6 gap-2">
              Don&apos;t you have an account{" "}
              <Button variant="link" onClick={() => navigate("/register")}>
                Register
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
