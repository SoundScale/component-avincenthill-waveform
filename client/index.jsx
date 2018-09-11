const React = require('react');
const ReactDOM = require('react-dom');
const WaveformPlayer = require('./components/WaveformPlayer.jsx');

const App = () => (
  <WaveformPlayer />
);

ReactDOM.render(<App />, document.getElementById('app'));
