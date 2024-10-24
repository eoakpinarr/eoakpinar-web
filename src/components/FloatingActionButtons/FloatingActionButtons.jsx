import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // react-icons kütüphanesinden WhatsApp ikonu
import { BiPhone } from 'react-icons/bi'; // react-icons kütüphanesinden WhatsApp ikonu

export default function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1, position: 'fixed', gap: 4, background: "white" } }}>
            <Fab variant="extended" sx={{ right: 0, top: '10vh' }}>
                <a href="https://wa.me/+905539482424" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={32} color="#25D366" />
                </a>
            </Fab>
            <Fab variant="extended" sx={{ right: 0, top: '15vh' }}>
                <a href="https://www.instagram.com/eoakpinar" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} color="#E1306C" />
                </a>
            </Fab>
            <Fab variant="extended" sx={{ right: 0, top: '20vh' }}>
                <a href="tel:+905539482424" target="_blank" rel="noopener noreferrer">
                    <BiPhone size={32} color="#6F42C1 " />
                </a>
            </Fab>

        </Box>
    );
}