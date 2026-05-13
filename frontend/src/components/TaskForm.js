import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;