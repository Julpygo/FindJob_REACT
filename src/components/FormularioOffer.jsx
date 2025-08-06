import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

export default function FormularioOffer(){
    const [company_name, setCompanyName] = useState('')
    try {
        const response = await fetch("http://localhost:3005/api/offers/Create",{
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
    }
}