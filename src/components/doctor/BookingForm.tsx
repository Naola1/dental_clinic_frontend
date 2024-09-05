import { Button } from "@/components/ui/button";

import { BookingSchema } from "@/schema/doctors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { InputForm } from "../input-form/input";
import Loading from "../loading/Loading";
import { useState } from "react";
import { AlertMessage } from "../alert/Alert";
import { useBooking } from "@/hooks/use-doctor";
import moment from "moment";

interface BookingFormSchema {
  id: number;
}

export function BookingForm({ id }: BookingFormSchema) {
  const [error, setError] = useState(undefined);

  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      appointment_date: new Date(Date.now()),
    },
  });

  const book = useBooking();

  async function onSubmit(data: z.infer<typeof BookingSchema>) {
    setError(undefined);
    await book.mutateAsync({
      id: id,
      data: {
        appointment_date: moment(data.appointment_date).format("yyyy-mm-dd"),
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <InputForm
          control={form.control}
          label={"Appointment date"}
          placeholder={"Pick your appointment date"}
          name={"appointment_date"}
          type="date"
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

        <Button disabled={book.isPending} className="flex items-center">
          {book.isPending ? <Loading /> : "Book"}
        </Button>
      </form>
    </Form>
  );
}
