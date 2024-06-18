import { useMediaQuery } from "react-responsive";
import Error from "../Error/Error";
const WidthCheckup = (Component) => {
  const isMobile = useMediaQuery({
    query: "(max-width:900px)",
  });

  if (isMobile) {
    return <Error message={"Please use desktop!"} />;
  }

  return <Component />;
};

export default WidthCheckup;
