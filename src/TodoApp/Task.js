import React, { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState(["demo", "test", "demo 3"]);
  const [formData, setFormData] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [selectTask, setSelectask] = useState([]);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setTasks([...tasks, formData]);
    } else {
      const edit = [...tasks];
      edit[editIndex] = formData;
      setTasks(edit);
    }
    setEditIndex(null);
    setFormData("");
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, id) => id !== index);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(tasks[index]);
  };

  const handleSelect = (index) => {
    const selectedIndex = selectTask.indexOf(index);
    if (selectedIndex === -1) {
      setSelectask([...selectTask, index]);
    } else {
      const newSelectedTasks = [...selectTask];
      newSelectedTasks.splice(selectedIndex, 1);
      setSelectask(newSelectedTasks);
    }
  };

  const handleMultiDelete = () => {
    const newTask = tasks.filter((task, index) => !selectTask.includes(index));
    setTasks(newTask);
    setSelectask([]);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='todo'>Add Task: </label>
              <input
                className='form-control'
                id='todo'
                type='text'
                value={formData}
                onChange={(e) => handleChange(e)}
              />
              <button type='submit' className='btn btn-primary float-start mt-3'>
                save
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='container'>
        {selectTask.length ? (
          <button className='btn btn-secondary' onClick={handleMultiDelete}>
            Delete multi
          </button>
        ) : (
          ""
        )}
        <table className='table'>
          <thead>
            <tr>
              <td></td>
              <td>Task</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      checked={selectTask.includes(index)}
                      onChange={(e) => handleSelect(index)}
                    />
                  </td>
                  <td>{task}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className='btn btn-primary me-2'
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
