var Task = React.createClass({
  getInitialState: function() {
    return {tasks: this.props.tasks};
  },
  componentDidMount: function() {
    $.ajax({
      url: '/tasks.json',
      dataType: 'json',
      success: function(res) {
        this.setState({tasks: res})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render: function() {
    return (
      <TaskList tasks={this.state.tasks}></TaskList>
    )
  }
})

var TaskList = React.createClass({
  render: function() {
    var task_list = this.props.tasks.map(function (task) {
      return (
        <tr>
          <td>{task.name}</td>
          <td>edit</td>
          <td>delete</td>
        </tr>
      )
    })
    return (
      <table>
        <tbody>
          {task_list}
        </tbody>
      </table>
    )
  }
})
