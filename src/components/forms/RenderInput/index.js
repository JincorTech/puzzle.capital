import React from 'react';

import Input from '../../common/Input';

const RenderInput = (props) => {
  const {
    input,
    meta,
    icon,
    ...restProps
  } = props;

  return (
    <div>
      <Input meta={meta} {...input} {...restProps}/>
    </div>
  );
};

export default RenderInput;
