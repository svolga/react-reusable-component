import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.text,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function Button({
  text,
  icon,
  size = "medium",
  variant = "primary",
  fullWidth = false,
  isDisabled = false,
  onClick,
  children,
}) {
  return (
    <button
      className={`button ${size}  ${variant} ${fullWidth ? "full-width" : ""} ${isDisabled ? "disabled" : ""} `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
