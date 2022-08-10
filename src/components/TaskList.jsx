import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";
function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <>
      <div className="w-full h-full flex flex-col py-8 items-center">
        <header>
          <h1 className="text-5xl text-white font-bold">
            Pend works {tasks.length}{" "}
          </h1>
          <Link
            to="/create-task"
            className="bg-blue-500 font-semibold rounded-md text-lg py-1 px-2 text-white block text-center mt-8"
          >
            Create Task
          </Link>
        </header>
        <div className="grid grid-cols-3 justify-center gap-x-32 mt-2 px-12">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-neutral-600 px-6 py-4 text-white rounded-sm mt-6 flex flex-col justify-between "
            >
              <h1 className="text-xl font-bold">{task.title}</h1>
              <h2 className="">{task.description}</h2>
              <div>
                <Link
                  to={`/edit-task/${task.id}`}
                  className="py-1 px-4 bg-blue-600 rounded-md font-semibold"
                >
                  Edit
                </Link>
                <button
                  className="py-1 px-4 bg-red-600 rounded-md ml-4 mt-4 font-semibold"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
