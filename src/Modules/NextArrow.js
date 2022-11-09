import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon 
        icon={faAnglesRight}
        className={className}
        onClick={onClick}
        style={{...style, color:"#000000", right: "-6%", transform: "scale(1.4, 1.4)"}}
        />
    );
}

export default NextArrow;