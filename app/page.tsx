import Link from "next/link";


export default function Home() {
return (
<main className="p-8">
<h1 className="text-3xl font-bold">
Home Page
</h1>
<br/>
<p className="mt-2">
I am Franz Cumba. This is the home page, click the links below to navigate through my site.
I am an IT Student, 20 yrs old, and I am currently learning Next.js. This is my first Next.js project using the App Router.
</p>
<br/>
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