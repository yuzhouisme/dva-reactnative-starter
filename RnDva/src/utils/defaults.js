import { Dim } from './config';

module.exports = {
  lineIcoStyle: {
    width: 20*Dim.Factor,
    height: 20*Dim.Factor,
    marginLeft: 10*Dim.Factor
  },
  lineDividerStyle: {
    height: 0.5,
    width: Dim.Width,
    backgroundColor: '#ddd'
  },
  inputTitleStyle: {
    fontSize: 16*Dim.Factor,
    color: '#432f2f'
  },
  inputStyle: {
    flex: 1,
    height: 46*Dim.Factor,
    fontSize: 16*Dim.Factor,
    color: '#432f2f',
    textAlign: 'left'
  },
}
