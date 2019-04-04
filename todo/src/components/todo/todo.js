import React, { Component } from "react";
import "./style.css";

class Todo extends Component {
  state = {
    tasks: [],
    showAddForm: false,
    edit: {
      status: false,
      taskIndex: 0
    }
  };

  showAddForm = (action, i) => {
    if (action === "edit")
      this.setState({
        showAddForm: true,
        edit: {
          status: true,
          taskIndex: i
        }
      });
    else
      this.setState(
        {
          showAddForm: true,
          edit: { ...this.state.edit, status: false }
        },
        () => console.log(this.state)
      );
  };

  task = "";

  handleChange = e => {
    if (!this.state.edit.status) this.task = e.target.value;
    else {
      let tasks = this.state.tasks;
      let taskIndex = this.state.edit.taskIndex;
      tasks[taskIndex] = e.target.value;
      this.setState({
        tasks
      });
    }
  };

  addTask = e => {
    e.preventDefault();
    if (!this.state.edit.status && this.task.length > 0) {
      let tasks = [...this.state.tasks, this.task];
      this.setState({
        tasks: tasks,
        showAddForm: false
      });

      this.task = "";
    } else {
      this.setState({
        showAddForm: false,
        edit: {
          ...this.state.edit,
          status: false
        }
      });
    }
  };

  deleteTask = i => {
    let tasks = this.state.tasks;
    tasks.splice(i, 1);
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div>
        <button className="logout" onClick={this.props.toggleAuth}>
          Logout
        </button>
        <div className="tasks">
          <h1 className="my-tasks">My tasks</h1>
          <button onClick={this.showAddForm} className="add-task-btn">
            + Add a new task
          </button>
          {(() => {
            if (this.state.showAddForm)
              return (
                <form className="addform" onSubmit={this.addTask}>
                  <input
                    autoFocus
                    input="text"
                    className="input-task"
                    placeholder="Enter task"
                    onChange={this.handleChange}
                  />
                  <input type="submit" value="Save" />
                </form>
              );
          })()}
          <table className="active-tasks">
            {this.state.tasks.map((task, i) => {
              return (
                <tr>
                  <td className="task">{task}</td>
                  <td
                    className="fas fa-pencil-alt edit-icon"
                    onClick={() => this.showAddForm("edit", i)}
                  />
                  <td
                    className="fas fa-trash trash-icon"
                    onClick={() => this.deleteTask(i)}
                  />
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Todo;
