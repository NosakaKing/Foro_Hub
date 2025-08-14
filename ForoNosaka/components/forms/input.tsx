import React from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Control, FieldValues, Path} from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface FormInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  description?: string;
  readOnly?: boolean;
  defaultValue?: string;
  type: string;
  placeholder: string;
}
const FormInputField = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  readOnly = false,
  type,
  placeholder,
}: FormInputFieldProps<T>) => {
	return(
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem>
				{label && <FormLabel>{label}</FormLabel>}
				<FormControl className="mb-1.5">
					{type === "textarea" ? (
						<Textarea placeholder={placeholder} {...field} />
					) : (
						<Input type={type} placeholder={placeholder} disabled={readOnly} {...field} />
					)}
				</FormControl>
				{description && <FormDescription>{description}</FormDescription>}
				<FormMessage />
			</FormItem>
		)}
	/>
	);
};

export default FormInputField;
