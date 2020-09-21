const Fonts = {
  Roboto: {
    Regular: 'Roboto-Regular',
    RegularItalic: 'Roboto-Italic',
    Bold: 'Roboto-Bold',
    BoldItalic: 'Roboto-BoldItalic',
    Light: 'Roboto-Light',
    LightItalic: 'Roboto-LightItalic',
  },
};

// eslint-disable-next-line no-sparse-arrays
const fontMaps = [
  {[Fonts.Roboto.Regular]: require('assets/Fonts/Roboto-Regular.ttf')},
  {[Fonts.Roboto.RegularItalic]: require('assets/Fonts/Roboto-Italic.ttf')},
  {[Fonts.Roboto.Bold]: require('assets/Fonts/Roboto-Bold.ttf')},
  {[Fonts.Roboto.BoldItalic]: require('assets/Fonts/Roboto-BoldItalic.ttf')},
  {[Fonts.Roboto.Light]: require('assets/Fonts/Roboto-Light.ttf')},
  {[Fonts.Roboto.LightItalic]: require('assets/Fonts/Roboto-LightItalic.ttf')},
  ,
];

export {fontMaps};
export default Fonts;
