import React from 'react';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { addTodo } from './states/actionDispatchers'
import './App.css';
import { connect } from 'tls';
import { TodoForm } from './components/TodoForm';

// STEP 1: FIGURE OUT THE STATE THE APP NEEDS! { todos, markComplete }
// The less state the better. Avoid redundant slices, like slices
// that could be computed from other slices!

export default function App(){
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  )
}


// export class App extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       newTodo: '',
//     };
//     this.addTodo = this.addTodo.bind(this);
//   }

//   addTodo(event){
//     debugger;
//     event.preventDefault();
//     this.props.addTodo({
//       value: this.state.newTodo,
//       complete: false,
//     });
//     this.setState({
//       newTodo:''
//     });
//   }
//   updateNewTodo(e) {
//     this.setState({
//       newTodo: e.target.value
//     });
//   }

//   render() {
//     return (
//       <div className="App"> 
//         <form conSubmit={this.addTodo}>
//           <input
//           onChange={this.updateNewTodo}
//             placeholder='Add Todo'
//             value={this.state.newTodo}
//           />
//         </form>
//         <button onSubmit={this.addTodo}>Add todo</button>
//         <TodoList todos={this.props.todos} />
//       </div>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

// export default connect( mapStateToProps, { addTodo })(App);