export const metadata = { title: "Projects | Your Name" };

const projects = [
  { id: 1, name: "Gym Project", description: "A simple gym management system." },
  { id: 2, name: "School Project", description: "A simple attendance system." },
  { id: 3, name: "Billings", description: "A simple billing automated system." },
];

export default function ProjectsPage() {
return (
<main className="p-8">
<h1 className="text-3xl font-bold" color="blue">
Projects Page
</h1>
<br/>
{projects.map((project) => (
<div key={project.id} className="mb-4">
<h2 className="text-xl font-bold">{project.name}</h2>
<p>{project.description}</p>
</div>
))}

</main>
);
}