import React, { ReactElement, FC } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import BounceLoader from "react-spinners/BounceLoader";

type LoaderProp = {
  loading: boolean;
};

const Loader: FC<LoaderProp> = ({ loading }): ReactElement => {
  return (
    <LoadingOverlay
      active={loading}
      spinner={<BounceLoader />}
    ></LoadingOverlay>
  );
};

export default Loader;
