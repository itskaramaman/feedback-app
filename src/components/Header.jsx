import PropTypes from 'prop-types';



function Header(props) {

    const headerStyles = {
        backgroundColor: props.bgColor,
        color: props.textColor
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <p style={{fontWeight: 'bold', fontSize: 24}}>{props.text}</p>
            </div>
        </header>
    )
}

// default props
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// prop validation
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header;
