import React from 'react';
import tw from 'twin.macro';

const style = tw`flex flex-col py-2`;

const titleStyle = tw`font-sans text-xl text-white pb-2`;

interface ListGroupProps {
  title?: string;
}

const ListGroup: React.FC<ListGroupProps> = ({ children, title }) => {
  return (
    <div css={style}>
      {title && <h4 css={titleStyle}>{title}</h4>}
      {children}
    </div>
  );
};

export default ListGroup;
