import Dimensions from 'Dimensions';

var debug = true;
var needCheckVersion = false;

var { height, width } = Dimensions.get('window');

module.exports = {
  Dim: {
    Width: width,
    Height: height,
    Factor: width/375
  }
};
