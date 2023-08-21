import React from "react";

interface IAnimatedText extends React.HTMLAttributes<HTMLTextAreaElement> {
  text: string;
}

const AnimatedText = (props: IAnimatedText) => {
  const { text, className, ...restProps } = props;

  return <div>AnimatedText</div>;
};

export default AnimatedText;
