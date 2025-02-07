import Hello from './components/Hello';

export default function Home() {
  console.log('what am I server or client?');
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 text-center mt-8">
        Next.js 15 + TypeScript + Tailwind CSS 🚀
      </h1>
      <Hello />
    </>
  );
}
