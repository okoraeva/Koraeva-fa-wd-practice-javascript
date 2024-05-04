class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: [...state.items, newItem],
            text: ''
        }));
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter todo item"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById("app")
)