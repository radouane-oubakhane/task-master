import React, { PropsWithChildren } from "react";

const PlatformLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default PlatformLayout;
