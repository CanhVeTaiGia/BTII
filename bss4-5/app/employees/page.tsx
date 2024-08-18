import Link from "next/link";
import React from "react";

interface Employee {
  id: number;
  name: string;
  age: number;
  projects: [string];
}
const Employees = () => {
  const employees: Employee[] = [
    {
      id: 1,
      name: "David",
      age: 20,
      projects: ['Facebook']
    },
    {
      id: 2,
      name: "Linda",
      age: 22,
      projects: ['Instagram']
    },
    {
      id: 3,
      name: "Kavin",
      age: 18,
      projects: ['WhatsApp']
    },
  ];
  return (
    <div>
      <h2>Bài 9</h2>
      {employees.map((item: Employee) => {
        return (
          <ul key={item.id}>
            <li>Id: {item.id}</li>
            <li>Id: {item.name}</li>
            <li>Id: {item.age}</li>
            <Link href={`/employees/${item.id}`}></Link>
          </ul>
        );
      })}
    </div>
  );
};

export default Employees;
