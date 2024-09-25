import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm.jsx";
import { useNavigate } from "react-router-dom";


function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [inputState, setInputState] = useState("Show");
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate(); // navigate hook returns a navigate function


    function getMapping(inputValue) {
        let mapping = {};
        let originalWord = inputValue.split("").map((char) => char.toUpperCase());
        for (const char of originalWord) {
            if (mapping.hasOwnProperty(char)) {
                mapping[char] += 1;
            } else {
                mapping[char] = 1;
            }
        }
        return mapping;
    }

    function handleFormSubmit() {
        if (inputValue.length > 0) {
            let mappingObj = getMapping(inputValue);
            let stateData = {
                inputValue: inputValue,
                mappingObj: mappingObj
            }
            navigate(`/executeGameContainer`, { state: stateData });
        }
    }

    function onHandleTextInput(event) {
        setInputValue(event.target.value);
    }

    function showHideDetails() {
        if (inputType === "text") {
            setInputType("password")
            setInputState("Show");
        } else {
            setInputType("text");
            setInputState("Hide");
        }
    }

    // useEffect(() => {
    //     console.log("Component mounted Everytime");
    // });

    // useEffect(() => {
    //     console.log("Component with firstLoad mounted Once");
    // }, [])

    // useEffect(() => {
    //     console.log("Component with firstLoad and mounted with input value");
    // }, [inputValue])

    return (
        <>
            <TextInputForm
                onFormSubmit={handleFormSubmit}
                onHandleTextInput={onHandleTextInput}
                showHideDetails={showHideDetails}
                inputType={inputType}
                inputState={inputState}
            />
        </>
    );
}


export default TextInputFormContainer;