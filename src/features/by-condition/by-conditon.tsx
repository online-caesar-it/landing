import { ReactNode } from "react";

const ByCondition = ({
  children,
  fallback,
  condition,
}: {
  children: ReactNode;
  fallback: ReactNode;
  condition: boolean;
}) => {
  return <>{condition ? children : fallback}</>;
};

export default ByCondition;
