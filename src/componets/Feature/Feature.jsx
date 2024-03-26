import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <AiFillCheckCircle className="text-green-500 mr-2" /> {feature}
      </p>
    </div>
  );
};
Feature.propType = {
  feature: PropTypes.string,
};

export default Feature;
