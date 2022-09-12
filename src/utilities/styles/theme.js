export const theme = {
  palette: {
    primary: '#00040f',
    secondary: '#00f6ff',
    triadic: '#ffffff',
    dimWhite: 'rgba(255, 255, 255, 0.7)',
    dimBlue: 'rgba(9, 151, 124, 0.1)',
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'],
  },
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px',
  },
  padding: {
    padding: '6px',
    paddingSm: '16px',
    section: '90px',
    sectionSm: '45px',
  },
  bgGradients: {
    blueGradient:
      'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
    blackGradient: 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
    blackGradientSecondary:
      'linear-gradient(-168.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
    grayGradient: 'linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%)',
    lightBlueGradient:
      'linear-gradient(90deg, rgba(26, 41, 128, 0.5) 0%, rgba(38, 208, 206, 0.5) 100%)',
    whiteGradient: 'rgba(255, 255, 255, 0.6)',
    navyGradient: 'linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)',
    pinkGradient: 'linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)',
    discountGradient: 'linear-gradient(125.17deg, #272727 0%, #11101d 100%)',
    textGradient:
      'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
  },
  shadows: {
    basicShadow: '0 20px 100px -10px rgba(66, 71, 91, 0.1)',
    cardShadow: '0 20px 100px -10px rgba(66, 71, 91, 0.1)',
    buttonShadow: '0 0 24px white',
  },
  roundRadius: '20px',
  sideBar: {
    animation: 'slide-top 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    keyFrames:
      '@keyframes slide-top {0% { transform: translateY(100px); } 100% { transform: translateY(0); }}',
  },
  transitions: {
    timeFunction: '0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  typography: {
    paragraph: '18px',
    paragraphSm: '16px',
    title: '48px',
    titleSm: '38px',
  },
};
