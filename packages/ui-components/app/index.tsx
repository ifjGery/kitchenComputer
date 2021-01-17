import * as React from 'react';
import SectionWrapper from 'Components/SectionWrapper';
import style from './style.scss';

function App() {
  return (
    <div className={style.app}>
      <h1> Hello, World! </h1>
      <SectionWrapper>
        <span>Hello there</span>
      </SectionWrapper>
    </div>
  );
}

export default App;
