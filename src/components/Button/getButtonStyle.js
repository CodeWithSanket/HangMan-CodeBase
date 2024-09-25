
function getButtonStyle(buttonstyleName) {
    if (buttonstyleName === "primary") {
        return 'bg-blue-500 text-white px-3 py-2 mx-2 my-4 rounded border-none cursor';
    }
    else if (buttonstyleName === "Submit") {
        return 'bg-green-500 text-white px-4 py-2 mx-2 my-4 rounded border-none cursor';
    }
    else if (buttonstyleName === "Reset") {
        return 'bg-red-500 text-white px-5 py-2 mx-2 my-4 rounded border-none cursor';
    }
    else {
        return 'bg-yellow-700 text-white px-3 py-2 mx-2 my-4 rounded-md border-none cursor';
    }
}

export default getButtonStyle;