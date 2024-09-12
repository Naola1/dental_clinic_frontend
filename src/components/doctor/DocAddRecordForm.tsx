import { AlertMessage } from "@/components/alert/Alert";
import { InputForm } from "@/components/input-form/input";
import Loading from "@/components/loading/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useDocAddRecord } from "@/hooks/use-auth";
import { DocAddRecord } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

interface DocAddRecordFormProps {
  patient: number;
}

const DocAddRecordForm = ({ patient }: DocAddRecordFormProps) => {
  const navigate = useNavigate();

  const [error, setError] = useState(undefined);

  const addRecord = useDocAddRecord();

  const form = useForm<z.infer<typeof DocAddRecord>>({
    resolver: zodResolver(DocAddRecord),
    defaultValues: {
      patient,
      treatment: 1,
      treatment_date: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof DocAddRecord>) {
    setError(undefined);
    await addRecord.mutateAsync(data);
  }

  useEffect(() => {
    if (addRecord.isSuccess) {
      navigate("/doctor/patient-records");
    }
  }, [addRecord.isSuccess]);

  return (
    <div className="flex flex-col items-center justify-center py-10 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <InputForm
            control={form.control}
            label={"Description"}
            placeholder={"Enter description"}
            name={"description"}
          />

          {error && (
            <div className="px-6">
              <AlertMessage
                message={error ?? ""}
                variant={"destructive"}
                header={"Error"}
              />
            </div>
          )}

          <div className="flex flex-col justify-end  py-3">
            <Button
              disabled={addRecord.isPending}
              className="flex items-center"
            >
              {addRecord.isPending ? <Loading /> : "Add record"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DocAddRecordForm;
