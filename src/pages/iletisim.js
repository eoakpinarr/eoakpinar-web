// src/pages/contact.js
import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import { Phone, Email, WhatsApp, GitHub, LinkedIn, Twitter, Instagram, Facebook } from "@mui/icons-material";

const Iletisim = () => {
  return (
    <Container maxWidth="sm" sx={{
      textAlign: 'center', padding: 5, marginY: 5, borderRadius: '8px',
      border: 1, boxShadow: "0 4px 8px rgba(0, 0, 255, 0.8) "
    }}>
      <Typography variant="h4" gutterBottom>
        Bize Ulaşın
      </Typography>

      <Box sx={{ mt: 4 }}>
        {/* Telefon Numarası ve E-posta Bölümü */}
        <Box
          component="a" href="tel:+905539482424"
          sx={{
            backgroundColor: 'white',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
            border: "1px solid",
            borderColor: "grey.100",
            borderRadius: 2,
            mb: 4,
            boxShadow: "0 4px 8px rgba(0, 0, 255, 0.2)", // Beyaz gölge
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.1)", // Hover'da büyüme
              boxShadow: "0 8px 16px rgba(0, 0, 255, 0.8)", // Hover'da beyaz gölge artışı
            },
          }}
        >
          {/* Telefon Numarası */}
          <IconButton color="secondary">
            <a href="tel:+905539482424" target="_blank" rel="noopener noreferrer">
              <Phone fontSize="large" />
            </a>
          </IconButton>
          <Typography variant="body1">Etem Oğulcan AKPINAR</Typography>
          <Typography variant="body1">+90 553 948 24 24</Typography>
        </Box>

        {/* Sosyal Medya Linkleri */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2, // Aralarındaki boşluk
            flexWrap: "wrap", // Küçük ekranlarda alt satıra geçme
          }}
        >
          {[
            { icon: <Email fontSize="large" />, href: "mailto:eoakpinar@icloud.com", label: "Mail" },
            { icon: <GitHub fontSize="large" />, href: "https://github.com/eoakpinarr", label: "GitHub" },
            { icon: <LinkedIn fontSize="large" />, href: "https://www.linkedin.com/in/etem-o%C4%9Fulcan-akpinar-2018532a3/", label: "LinkedIn" },
            { icon: <Twitter fontSize="large" />, href: "https://twitter.com/eoakpinarr", label: "Twitter" },
            { icon: <Instagram fontSize="large" />, href: "https://instagram.com/eoakpinar", label: "Instagram" },
            { icon: <Facebook fontSize="large" />, href: "https://www.facebook.com/share/ULmRVfCS22HdikjU/?mibextid=LQQJ4d", label: "Facebook" },
            { icon: <WhatsApp fontSize="large" />, href: "https://wa.me/+905539482424", label: "WhatsApp" },
          ].map((social, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'white',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 1,
                border: "1px solid",
                borderColor: "grey.100",
                borderRadius: 1,
                boxShadow: "0 4px 8px rgba(0, 0, 255, 0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.1)", // Hover'da büyüme
                  boxShadow: "0 8px 16px rgba(0, 0, 255, 0.8)",
                },
              }}
            >
              <IconButton component="a" href={social.href} target="_blank" color="secondary">
                {social.icon}
              </IconButton>
              <Typography variant="body2">{social.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Iletisim;

export const Head = () => <title>İletişim</title>;
