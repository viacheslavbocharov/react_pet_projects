const App = ({ initialButtonText, initialClassList }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [classesList, setClassesList] = React.useState(initialClassList)

    const onButtonClic = () => {
        setButtonText('Hello from react')
        setClassesList('green-btn')
    }


    return (
        (
            <div className="div app">
                <button className={classesList} onClick={onButtonClic}>
                    {buttonText}
                </button>
            </div>
        )
    )
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassList="" />)