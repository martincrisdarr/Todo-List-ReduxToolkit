import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else if (tasks.length < 9) {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };
  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className=" bg-black/70 px-16 py-12 flex flex-col gap-8 justify-center items-center rounded-sm"
        >
          <input
            autoFocus
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={task.title}
            className="w-64 py-2 pl-6 rounded-md"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={task.description}
            className="w-64 py-2 pl-6 rounded-md"
          ></textarea>
          <button
            className="w-64 bg-blue-600 rounded-md py-2 font-semibold text-lg"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
