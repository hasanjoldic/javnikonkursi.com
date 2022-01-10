import React from "react";

import { Chip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import SearchSelect, {
  ReactSelectMaterialUiProps,
} from "react-select-material-ui";

interface IMultipleSearchSelectInputProps extends ReactSelectMaterialUiProps {}

const MultipleSearchSelectInput = ({
  SelectProps,
  ...props
}: IMultipleSearchSelectInputProps) => {
  const classes = useStyles();

  return (
    <SearchSelect
      {...props}
      SelectProps={{
        ...SelectProps,
        isMulti: true,
        renderValue: (selected) => (
          <div className={classes.chips}>
            {(selected as string[]).map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        ),
      }}
    />
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
  })
);

export default MultipleSearchSelectInput;
