import Link from 'next/link';
import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header />
      <main className="max-w-3xl p-8 bg-white dark:bg-gray-900 rounded-lg shadow m-auto mt-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About MapleLine</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            MapleLine helps you visualize routes and locations with ease. This
          placeholder about page gives you a starting point to explain your
          product, team, or goals.
        </p>
        <div className="flex gap-3">
          <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700">
            Back Home
          </Link>
        </div>
      </main>
    </div>
  );
}
