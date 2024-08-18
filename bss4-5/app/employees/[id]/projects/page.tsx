import Link from "next/link";
import React from "react";

interface Employee {
  id: number;
  name: string;
  age: number;
  projects: [string];
}
interface PropType {
  params: {
    id: string;
  };
}
const Projects = (props: PropType) => {
  const { id }: { id: string } = props.params;
  const employees: Employee[] = [
    {
      id: 1,
      name: "David",
      age: 20,
      projects: ["Facebook"],
    },
    {
      id: 2,
      name: "Linda",
      age: 22,
      projects: ["Instagram"],
    },
    {
      id: 3,
      name: "Kavin",
      age: 18,
      projects: ["WhatsApp"],
    },
  ];
  const foundEmployee: Employee[] = employees.filter((item: Employee) => {
    return item.id === parseInt(id);
  });
  return (
    <div>
      <nav>
        <Link href={`/employees/${foundEmployee[0].id}`}>Employees detail's</Link>
        <Link href={`/employees/${foundEmployee[0].id}/projects`}>Employees project</Link>
      </nav>
      <h2>Bài 9</h2>
      {foundEmployee[0].projects.map((item: string) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default Projects;
