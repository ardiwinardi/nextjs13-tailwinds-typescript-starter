import React from 'react';
import NavBarComponent from './NavBarComponent';

type Props = {
  children: React.ReactNode;
};

export default function LayoutComponent(props: Props) {
  return (
    <div className="light">
      <NavBarComponent />
      <div className="md:w-10/12 mx-auto px-2 md:px-0 my-5">
        {props.children}
      </div>
    </div>
  );
}
