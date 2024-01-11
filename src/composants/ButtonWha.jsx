import React from "react";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleWhatsAppCall = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return <button onClick={handleWhatsAppCall}>Call on WhatsApp</button>;
};

export default WhatsAppButton;
