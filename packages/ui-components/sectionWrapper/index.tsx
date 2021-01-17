import * as React from 'react';
import style from './style.scss';

interface SectionWrapperInterface {
}

function SectionWrapper(props: React.PropsWithChildren<SectionWrapperInterface>) {
  const { children } = props;
  return (
    <div className={style.sectionWrapper}>
      <h1>Section Wrapped!</h1>
      {children}
    </div>
  );
}

export default SectionWrapper;
