import type { ReactNode } from "react";

type CenterLayoutProps = {
  children: ReactNode;
};

const CenterLayout = ({ children }: CenterLayoutProps) => {
  return <div className="flex justify-center">{children}</div>;
};

export default CenterLayout;
