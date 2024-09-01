import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Form } from "../ui/form";
import { InputForm } from "../input-form/input";
import Loading from "../loading/Loading";
import { useRegister } from "@/hooks/use-auth";

export function RegisterForm() {
  const navigate = useNavigate();

  const register = useRegister();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: z.infer<typeof RegisterSchema>) {
    await register.mutateAsync(data);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-[350px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Register a new account</CardTitle>
              <CardDescription>Lily dental clinic</CardDescription>
            </CardHeader>
            <CardContent>
              <InputForm
                control={form.control}
                label={"username"}
                placeholder={"Enter your username"}
                name={"username"}
              />

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

              <InputForm
                control={form.control}
                label={"Confirm password"}
                placeholder={"Enter your confirm password"}
                name={"confirmPassword"}
              />
            </CardContent>
            <div className="flex flex-col justify-end px-6 py-3">
              <Button
                disabled={register.isPending}
                className="flex items-center"
              >
                {register.isPending ? <Loading /> : "Register"}
              </Button>
            </div>

            <div className="flex justify-center items-center my-6 gap-2">
              Already have an account{" "}
              <Button variant="link" onClick={() => navigate("/login")}>
                Login
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
