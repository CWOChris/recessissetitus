import React from "react";
import { Typography } from "@mui/material";

interface FersResultProps {
    retirementPay: number;
}

const FersResult: React.FC<FersResultProps> = ({ retirementPay }) => {
    const formattedPay = isNaN(retirementPay) ? "0.00" : retirementPay.toFixed(2);

    return (
        <div>
            <Typography variant="h4">
                Retirement Pay: ${formattedPay}
            </Typography>
        </div>
    );
}

export default FersResult;