import { ITheme } from "types";

const breakpoints: [string, string, string] = ['320px', '834px', '1440px'];

export const theme: ITheme = Object.freeze({  
  color: {
    // Основні

    textPrimary: 'rgba(255, 255, 255, 1)', 
    textSecondary: 'rgba(33, 34, 39, 1)',

    // Основні кольори фону
    bgPrimary: 'rgba(33, 34, 39, 0.5)',
    bgSecondary: 'rgba(255, 255, 255, 0.5)',

    // Кольори для позначення
    success: '#3CBC81', // зелений правильно
    error: '#E74A3B', // червоний помилка
    
   
  },  
  ff: {
    inconsolata: "'Inconsolata', monospace",
  }, 
  fw: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },  
  fs: {
    s: '16px',
    m: '18px',
    l: '24px',
    xl: '30px',
  },

  
  // @media screen and(${ p => p.theme.mq.tablet}) {
  //    font-size: ${p => p.theme.fs.l};
  // }
  mq: {
    mobile: `min-width: ${breakpoints[0]}px`, 
    tablet: `min-width: ${breakpoints[1]}px`,
    desktop: `min-width: ${breakpoints[2]}px`,
  },
});
