import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTask() {
    const taskTitle = title.trim();
    const taskDescription = description.trim();

    if (!taskTitle && !taskDescription) return;

    onAddTaskSubmit(taskTitle, taskDescription);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="flex flex-col gap-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert(
              "Por favor, preencha todos os campos antes de adicionar a tarefa.",
            );
          onAddTaskSubmit(title.trim(), description.trim());
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium w-full"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
