import tw from 'twin.macro';
import React from 'react';

const style = tw`flex font-sans text-white text-xl my-1`;

const imgContainer = tw`my-1.5 mr-2 `;

const ListItem: React.FC = ({ children }) => {
  return (
    <div css={style}>
      <div css={imgContainer}>
        <img src="/images/ListItemIcon.svg" />
      </div>
      {children}
    </div>
  );
};

export default ListItem;
