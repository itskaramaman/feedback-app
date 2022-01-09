import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
    console.log(isDisabled);
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

// default props
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

// prop types
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;
