const Header = () => {

    const handleTheme = (event) => {
        localStorage.setItem("theme", event.target.value)
        document.body.setAttribute("data-theme", localStorage.getItem("theme"))
    }

    return ( 
        <header>
            <h1>P</h1>
            <select onChange={ handleTheme } defaultValue={ localStorage.getItem("theme") }>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </header>
     );
}
    
export default Header;