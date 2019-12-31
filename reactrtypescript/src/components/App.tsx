import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class App extends React.Component<AppProps, AppState> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  deleteItem = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.deleteItem(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
  todos: state.todos
});

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
