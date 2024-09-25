function Header({ headerText, headerStyle }) {
    return (
        <>
            <div>
                <h1 className={headerStyle}>{headerText}</h1>
            </div>
        </>
    );
}


export default Header;