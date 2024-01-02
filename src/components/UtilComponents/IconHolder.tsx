import React, { FC, ReactElement } from "react";

type IconComponentProps = {
  size?: number;
  color?: string;
  className?: string;
};

type IconHolderProps = {
  Icon: ReactElement<IconComponentProps> | FC<IconComponentProps>;
  size?: number;
  color?: string;
  className?: string;
};

const IconHolder: FC<IconHolderProps> = ({
  Icon,
  size = 22,
  color = "black",
  className,
}) => {
  // If Icon is a component, render it, else assume it's a React element
  const renderedIcon = React.isValidElement(Icon) ? (
    React.cloneElement(Icon, { className: className })
  ) : (
    <Icon className={className} />
  );

  return (
    <div className={className} style={{ fontSize: size, color: color }}>
      {renderedIcon}
    </div>
  );
};

export default IconHolder;
