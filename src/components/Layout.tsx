import React from "react";

interface ILayout extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = (props: ILayout) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-slate-950 p-32 ${className}`}
      {...restProps}
    />
  );
};

export default Layout;
