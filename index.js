ReactDOM.render(<h1>Hi Argho!!</h1>, document.getElementById('root'))
ReactDOM.render(<p>This is supposed to be a paragraph but I don't want to waste time writing a paragraph of text.</p>, document.querySelector("#root1"))
ReactDOM.render(
    <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
    </ul>,
    document.getElementById('root2')
)

function TheBody() {
    return (
        <h1>Hello There!!</h1>
        
    )
}

ReactDOM.render(
    <div>
        <TheBody/>
    </div>,
    document.getElementById('body')
)