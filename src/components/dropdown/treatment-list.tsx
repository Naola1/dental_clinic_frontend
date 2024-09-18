"use client";

import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Interface for items in the select dropdown
interface IItem {
  key: string;
  value: number;
}

// Props for the SelectForm component
interface SelectFormProps<TFormValues extends FieldValues> {
  control: Control<TFormValues> | undefined;
  label: string;
  placeholder: string;
  name: Path<TFormValues>;
  type?: React.HTMLInputTypeAttribute | undefined;
  items: IItem[];
}

// SelectForm Component
export const SelectForm = <TFormValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  items,
}: SelectFormProps<TFormValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item, index) => (
                <SelectItem value={item.value.toString()} key={index}>
                  {item.key}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
