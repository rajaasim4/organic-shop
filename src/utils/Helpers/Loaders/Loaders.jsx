import { Oval } from "react-loader-spinner";

export const OvalLoader = (props) => {
  return (
    <Oval
      height={props.height}
      width={props.width}
      color={props.primaryColor}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={props.secondaryColor}
      strokeWidth={props.strokeWidth}
      strokeWidthSecondary={props.strokeWidthSecondary}
    />
  );
};
