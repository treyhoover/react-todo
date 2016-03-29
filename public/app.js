import appStyles from './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

var TodoList = React.createClass({
   render: function () {
       var createItem = function (item) {
          return <li key={item.id}>{item.text}</li>;
       };
       return <ul>{this.props.items.map(createItem)}</ul>;
   }
});

var TodoApp = React.createClass({
    getInitialState: function (items = []) {
        return {items: items, text: ''};
    },
    onChange: function (e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        this.setState({items: nextItems, text: ''});
    },
    render: function () {
        return (
            <div>
                <h3>React Todo</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('app'));