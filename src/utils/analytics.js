// Configuração para Google Analytics
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Substitua pelo seu ID do GA4

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Rastrear evento de página
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Rastrear evento customizado
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Rastrear cliques em links externos
export const trackExternalLink = (url, label) => {
  event({
    action: 'click',
    category: 'External Link',
    label: label || url,
  });
};

// Rastrear downloads
export const trackDownload = (filename) => {
  event({
    action: 'download',
    category: 'File',
    label: filename,
  });
};

// Rastrear envio de formulário
export const trackFormSubmission = (formName) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
}; 