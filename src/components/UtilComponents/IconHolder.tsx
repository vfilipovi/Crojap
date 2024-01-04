import { FC } from "react";

type IconComponentProps = {
  size?: number;
  color?: string;
  className?: string;
};

type IconHolderProps = {
  Icon: FC<IconComponentProps>;
  size?: number;
  color?: string;
  className?: string;
};

const IconHolder: FC<IconHolderProps> = ({ Icon, size = 22, className }) => {
  return <Icon className={className} size={size} />;
};

export default IconHolder;
