import React from 'react';

import Textarea from '../../common/Textarea';

const RenderTextarea = (props) => {
  const {
    input,
    meta,
    icon,
    ...restProps
  } = props;

  return (
    <div>
      <Textarea meta={meta} {...input} {...restProps}/>
    </div>
  );
};

export default RenderTextarea;
