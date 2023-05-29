export const Task = (props) => {
  return (
    <div
      className="task"
      style={{
        backgroundColor: props.task.complete ? "lightgreen" : "transparent",
      }}
    >
      <h1>{props.task.taskName}</h1>
      <button onClick={() => props.completeTask(props.task.id)}>
        Complete
      </button>
      <button onClick={() => props.removeTask(props.task.id)}>X</button>
    </div>
  );
};
