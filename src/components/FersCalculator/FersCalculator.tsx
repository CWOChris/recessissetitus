import React from 'react';
import { TextField, Typography, Button } from "@mui/material";

interface FersCalculatorProps {
}

interface FersCalculatorState {
    high3Salary: number;
    yearsOfService: number;
    retirementPay: number;
}

class FersCalculator extends React.Component<FersCalculatorProps, FersCalculatorState> {
    constructor(props: FersCalculatorProps) {
        super(props);
        this.state = {
            high3Salary: 0,
            yearsOfService: 0,
            retirementPay: 0
        };

        // Binding this to event handlers
        this.handleHigh3SalaryChange = this.handleHigh3SalaryChange.bind(this);
        this.handleYearsOfServiceChange = this.handleYearsOfServiceChange.bind(this);
        this.calculateRetirementPay = this.calculateRetirementPay.bind(this);
    }

    handleHigh3SalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ high3Salary: parseFloat(event.target.value) });
    }

    handleYearsOfServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ yearsOfService: parseFloat(event.target.value) });
    }

    calculateRetirementPay = () => {
        // Implement your calculation logic here
        const { high3Salary, yearsOfService } = this.state;
        const retirementPay = high3Salary * yearsOfService * 0.01; // Example calculation
        this.setState({ retirementPay });
    }

    render() {
        const { high3Salary, yearsOfService, retirementPay } = this.state;

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
                <Button onClick={this.calculateRetirementPay}>Calculate Retirement Pay</Button>
                <Typography variant="h6">Estimated Retirement Pay: ${retirementPay}</Typography>
            </div>
        );
    }
}

export default FersCalculator;