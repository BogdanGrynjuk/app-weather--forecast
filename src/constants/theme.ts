import { ITheme } from "types";

const breakpoints: [string, string, string] = ['320px', '768px', '1280px'];

export const theme: ITheme = Object.freeze({
  color: {
    // Основні
    textPrimaryLight: 'rgba(255, 255, 255, 1)', // Текст на темному фоні
    textPrimaryDark: 'rgba(33, 34, 39, 1)', // Текст на світлому фоні
    textSecondary: 'rgba(168, 203, 255, 1)', // Другорядний текст

    // Основні кольори фону
    bgDark: 'rgba(33, 34, 39, 0.5)',
    bgLight: 'rgba(255, 255, 255, 0.5)',
    bgLoader: 'rgba(33, 34, 39, 0.8)',
    bgDropdownOptions: 'rgba(33, 34, 39, 0.8)',
    bgBtnSearch: 'rgba(220, 20, 60, 1)',
    bgBtnClose: 'rgba(33, 34, 39, 1)',
    bgInputSearch: 'rgba(220, 20, 60, 1)',

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
    s: '12px',
    m: '18px',
    l: '24px',
    xl: '30px',
  },

  
  // @media screen and(${ p => p.theme.mq.tablet}) {
  //    font-size: ${p => p.theme.fs.l};
  // }
  mq: {
    mobile: `min-width: ${breakpoints[0]}`,
    tablet: `min-width: ${breakpoints[1]}`,
    desktop: `min-width: ${breakpoints[2]}`,
  },
});
