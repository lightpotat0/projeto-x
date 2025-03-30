export const enviarParaWhatsApp = () => {
  const telefone = '559999999999'; // Número no formato internacional (DDI + DDD + Número)

  const url = `https://wa.me/${telefone}`;

  window.open(url, '_blank');
};
