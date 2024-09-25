import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/TextInput.jsx";

function TextInputForm({ onFormSubmit, onHandleTextInput, showHideDetails, inputType, inputState }) {

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <TextInput
                    label={"Enter the text or phrase"}
                    type={inputType}
                    onchangeHandler={onHandleTextInput}
                />
            </div>

            <div>
                <Button type={"button"} text={inputState} onClickHandler={showHideDetails} buttonstyleName={"primary"} />
                <Button type={"button"} text={"Submit"} onClickHandler={onFormSubmit} buttonstyleName={"Submit"} />
            </div>
        </form>
    );
}

export default TextInputForm;