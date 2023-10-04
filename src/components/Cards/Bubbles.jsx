import PropTypes from "prop-types";

function Bubbles({icon, value}) {
  return (
    <div className="w-20 h-7 bg-secondWhite opacity-80 rounded-lg justify-center flex mt-3">
      <p className="text-black flex grow gap-1 my-auto px-1 text-sm font-light">
        <img src={icon} alt="" className="h-4 w-4 my-auto " />
        {value}
      </p>
    </div>
  );
}
Bubbles.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default Bubbles;
