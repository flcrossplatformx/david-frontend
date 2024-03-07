"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AppBar, Toolbar, Typography, IconButton, Chip, Box, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout'; // Asegúrate de instalar @mui/icons-material
import { format } from 'date-fns'; // Asegúrate de instalar date-fns si aún no lo has hecho
import styles from '../../styles/Capture.module.css';
import {MenuItem} from "@mui/material";


export default function CapturePage() {

    const fechaActual = format(new Date(), 'dd/MM/yyyy');

    const [user, setUser] = useState('');
    const [identificacion, setIdentificacion] = useState('');
    const [nombre, setNombre] = useState('');
    const [nroTransaccion, setNroTransaccion] = useState('');
    const [licencia, setLicencia] = useState('');
    const [tipoTransaccion, setTipoTransaccion] = useState('');
    const [status, setStatus] = useState('');
    const logout = () => {
        console.log('Ejecutando logout...');
    };

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', height: '62px', borderBottom: '1px solid #D3D3D3'}}>
                <Toolbar>
                    <div style={{ marginLeft: '50px', marginRight: '20px', height: '56px', position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Image
                            src="/dtop-logo.png"
                            alt="DTOP Logo"
                            className="dark:invert"
                            width={96}
                            height={56}
                            priority
                        />
                    </div>
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                        Captura de Datos
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 'auto', marginRight: 3 }}>
                            <Typography variant="caption" sx={{ color: 'black', lineHeight: 1.5, fontSize: 12, fontWeight: 'bold' }}>
                                Fecha
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', lineHeight: 1.5, fontSize: 12 }}>
                                {fechaActual}
                            </Typography>
                        </Box>
                        <Chip
                            label="Juan Pérez"
                            onClick={logout}
                            icon={<LogoutIcon />}
                            sx={{ bgcolor: 'green', color: 'white', marginRight: 2 }}
                        />

                        <IconButton onClick={logout} sx={{ marginLeft: 'auto' }}>
                            <Image src="/assets/logout-button.png"
                                   alt="logout"
                                   width={24}
                                   height={24}
                                   priority />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="div" sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 600, fontSize: 20, textAlign: 'center' }}>
                    Módulo de Captura de Datos
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginTop: 8, marginLeft: 10, marginRight: 10 }}>
                    <TextField
                        label="Identificación"
                        variant="outlined"
                        fullWidth
                        InputProps={{ className: styles.textField,
                            placeholder: "Ingrese identificación aquí"}}
                        InputLabelProps={{ shrink: true }}
                        required={true}
                        onChange={(e) => setIdentificacion(e.target.value)}
                    />
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        InputProps={{ className: styles.textField,
                            placeholder: "Ingrese nombre aquí"}}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField
                        label="Número de Transacción"
                        variant="outlined"
                        fullWidth
                        InputProps={{ className: styles.textField,
                            placeholder: "Ingrese número de transacción aquí"}}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setNroTransaccion(e.target.value)}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginTop: 2, marginLeft: 10, marginRight: 10 }}>
                    <TextField
                        label="Licencia / ID"
                        variant="outlined"
                        fullWidth
                        InputProps={{ className: styles.textField,
                            placeholder: "Ingrese Licencia / ID aquí"}}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setLicencia(e.target.value)}
                    />
                    <TextField
                        label="Tipo de transacción"
                        variant="outlined"
                        fullWidth
                        select
                        InputProps={{ className: styles.textField}}
                        InputLabelProps={{ shrink: true }}
                        SelectProps={{
                            displayEmpty: true,
                            MenuProps: {
                                className: styles.menu,
                            },
                        }}
                        value=""
                        onChange={(e) => setTipoTransaccion(e.target.value)}
                    >
                            <MenuItem value="" disabled sx={{color: 'blue'}}>
                                Seleccione tipo de transacción
                            </MenuItem>
                        {}
                    </TextField>
                    <TextField
                        label="Estatus"
                        variant="outlined"
                        fullWidth
                        InputProps={{ className: styles.textField,
                            placeholder: "Ingrese estatus aquí"}}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </Box>
            </Box>
        </>
    );
}