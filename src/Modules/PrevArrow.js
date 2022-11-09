import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon 
        icon={faAnglesLeft}
        className={className}
        onClick={onClick}
        style={{...style, color:"#000000", left: "-6%", transform: "scale(1.4, 1.4)"}}
		  />
    );
  }

export default PrevArrow;