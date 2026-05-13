function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "10px" }}>
          <span
            onClick={() => toggleTask(task)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;