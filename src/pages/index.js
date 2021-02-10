import React from 'react';
import AjaxButton from '../imports/ajaxButton';
import DisqusInserter from '../imports/disqus';
import "../styles/global.css";

function App() {
  return (
    <div className="App">
      <AjaxButton />
      <DisqusInserter />
    </div>
  );
}

export default App;
