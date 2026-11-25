import Link from "next/link";


export default function Home() {
return (
<main className="p-8">
<h1 className="text-3xl font-bold">
Hello, My name is Franz
</h1>
<p className="mt-2">
I am Franz. The one and only Franz.
</p>

<Link href="/about" className="mt-4 inline-block underline">
About Me
</Link>
<br/>
<Link href="/projects" className="mt-4 inline-block underline">
See my projects
</Link>


</main>
);
}