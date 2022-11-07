import { useNavigate } from "react-router-dom";

const HeaderMade = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <>
            <header>
                <div className='home-logo' onClick={goHome}>
                    <h1>FASHIONARY</h1>
                </div>
            </header>
        </>
    );
}
 
export default HeaderMade;