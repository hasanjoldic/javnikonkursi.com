import React from "react";
import { useField, FieldConfig, useFormikContext } from "formik";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  FormLabel,
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";

type TInputProps = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any>;

type TFileUploadProps = TInputProps & {
  label: string;
};

const FileUpload = (props: TFileUploadProps) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const hasError = meta.touched === true && meta.error != null;
  const helperText = hasError ? meta.error : null;

  return (
    <FormControl>
      <div
        style={{
          padding: "20px 15px",
          border: `1px solid ${grey[400]}`,
          borderRadius: 4,
        }}
      >
        <FormLabel>{props.label}</FormLabel>
        <br />
        <input
          type="file"
          onChange={(event) => {
            const fileReader = new FileReader();
            fileReader.onload = (_event) => {
              const arr = (_event.target.result as string).split(",");
              const base64 = arr[1];
              setFieldValue(field.name, base64);
            };
            fileReader.readAsDataURL(event.target?.files?.[0]);
          }}
          accept=".jpg,.jpeg,.png,,.pdf"
        />
      </div>

      <FormHelperText error={hasError}>{helperText}</FormHelperText>
      {/* <img src={field.value} /> */}
    </FormControl>
  );
};

export default FileUpload;