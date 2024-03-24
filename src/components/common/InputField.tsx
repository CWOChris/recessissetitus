import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
    label: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, type, onChange }) => {
    return (
        <TextField
            fullWidth
            margin="normal"
            label={label}
            value={value}
            type={type}
            variant="outlined"
            onChange={onChange}
        />
    );
}

export default InputField;