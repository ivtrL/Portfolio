import React from "react";

interface ILayout extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = (props: ILayout) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
      {...restProps}
    />
  );
};

export default Layout;
