/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef*/

import App from './App';

beforeAll(() => {
  const div = document.createElement('div');
  div.setAttribute('id', 'root');
  window.domNode = div;
  document.body.appendChild(div);
});

it('renders', () => {
  let app = shallow(<App />);
  expect(app).toMatchSnapshot();
});