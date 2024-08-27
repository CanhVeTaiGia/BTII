import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface CombinedData {
  todoId: number;
  title: string;
  completed: boolean;
  userName: string;
  userEmail: string;
}

const fetchData = async () => {
  try {
    const [usersRes, todosRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/todos')
    ]);

    const users: User[] = await usersRes.json();
    const todos: Todo[] = await todosRes.json();

    const combinedData: CombinedData[] = todos.map(todo => {
      const user = users.find(user => user.id === todo.userId);
      return {
        todoId: todo.id,
        title: todo.title,
        completed: todo.completed,
        userName: user ? user.name : 'Unknown',
        userEmail: user ? user.email : 'Unknown'
      };
    });

    return combinedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const CombinedDataPage: React.FC = async () => {
  const combinedData = await fetchData();

  return (
    <div>
      <h1>Combined Data</h1>
      <ul>
        {combinedData.map(item => (
          <li key={item.todoId}>
            <h2>{item.title}</h2>
            <p>Status: {item.completed ? 'Completed' : 'Not Completed'}</p>
            <p>User: {item.userName}</p>
            <p>Email: {item.userEmail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CombinedDataPage;