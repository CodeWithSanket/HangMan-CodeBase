import getButtonStyle from "./getButtonStyle.js";



function Button({ type, text, onClickHandler, buttonstyleName }) {
    return (
        <button
            type={type}
            onClick={onClickHandler}
            className={getButtonStyle(buttonstyleName)}>{text}
        </button>
    );
}



export default Button;