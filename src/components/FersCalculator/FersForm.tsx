import React from'react';
import { TextField, Button } from "@mui/material";

interface FersFormProps {
    onCalculate: (high3Salary: number, yearsOfService: number) => void;
}

interface FersFormState {
    high3Salary: number;
    yearsOfService: number;
}

class FersForm extends React.Component<FersFormProps, FersFormState> {
    constructor(props: FersFormProps) {
        super(props);
        this.state = {
            high3Salary: 0,
            yearsOfService: 0
        };

        this.handleHigh3SalaryChange = this.handleHigh3SalaryChange.bind(this);
        this.handleYearsOfServiceChange = this.handleYearsOfServiceChange.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
    }

    handleHigh3SalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ high3Salary: parseFloat(event.target.value) || 0 });
    }

    handleYearsOfServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ yearsOfService: parseFloat(event.target.value) });
    }

    handleCalculate = () => {
        const { high3Salary, yearsOfService } = this.state;
        this.props.onCalculate(high3Salary, yearsOfService);
    }

    render() {
        const { high3Salary, yearsOfService } = this.state;

        return (
            <div>
                <TextField 
                    label="High 3 Salary" 
                    value={high3Salary} 
                    onChange={this.handleHigh3SalaryChange} 
                    type="number" />
                <TextField 
                    label="Years of Service" 
                    value={yearsOfService} 
                    onChange={this.handleYearsOfServiceChange} 
                    type="number" />
                <Button onClick={this.handleCalculate}>Calculate Retirement Pay</Button>
            </div>
        );
    }
}

export default FersForm;