import React from "react";
import { useField, FieldConfig, useFormikContext } from "formik";
import { DatePicker, DatePickerProps } from "@material-ui/pickers";

type TInputProps = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any>;

type TDateInputProps = TInputProps & {
  datePickerProps: Omit<DatePickerProps, "value" | "onChange">;
};

const DateInput = (props: TDateInputProps) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const hasError = meta.touched === true && meta.error != null;
  const helperText = hasError ? meta.error : null;
  const inputProps = { ...props };
  delete inputProps.datePickerProps;
  return (
    <DatePicker
      {...props.datePickerProps}
      {...field}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      inputProps={inputProps}
      error={hasError}
      helperText={helperText}
      format="DD.MM.yyyy"
    />
  );
};

export default DateInput;
