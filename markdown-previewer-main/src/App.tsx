import './App.css';
import React, { useState } from 'react';
import {marked} from 'marked'

const App: React.FC = () => {
  const [code, setCode] = useState<string>('## Hello');
  const [compiled, setCompiled] = useState<string>('<h2 id="hello">Hello</h2>');
  const [hide, hidePreview] = useState<boolean>(true);

  const openMD = () => {
    console.log(0);
    hidePreview(true);
  };

  const openPreview = () => {
    console.log(0);
    hidePreview(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    setCompiled(marked(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
        </div>
        {hide ? (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        ) : (
          <div>
            <div dangerouslySetInnerHTML={{ __html: compiled }} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
