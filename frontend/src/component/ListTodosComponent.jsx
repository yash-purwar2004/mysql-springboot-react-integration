export function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());

  const todos = [
    { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    { id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate },
    { id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate },
  ];

  return (
    <div className="ListTodosComponent p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Things You Want To Do!</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 border-b border-gray-300 text-center text-sm font-medium text-gray-700">Id</th>
              <th className="py-3 px-4 border-b border-gray-300 text-center text-sm font-medium text-gray-700">Description</th>
              <th className="py-3 px-4 border-b border-gray-300 text-center text-sm font-medium text-gray-700">Is Done?</th>
              <th className="py-3 px-4 border-b border-gray-300 text-center text-sm font-medium text-gray-700">Target Date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-300 text-center">{todo.id}</td>
              <td className="py-3 px-4 border-b border-gray-300 text-center">{todo.description}</td>
              <td className="py-3 px-4 border-b border-gray-300 text-center">{todo.done.toString()}</td>
              <td className="py-3 px-4 border-b border-gray-300 text-center">{todo.targetDate.toDateString()}</td>
            </tr>            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
