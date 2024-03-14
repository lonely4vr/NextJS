
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Landing Page</title>
        <meta name="description" content="My description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* Header */}
        <h1>This is my Header</h1>
      </header>

      <main>
        {/* Main */}
        <section>
          <h2>This is another Header</h2>
          <p>This is a paragraph section</p>
        </section>
        <section>
          <h2>This is the third header</h2>
          <p>This is another paragraph section</p>
        </section>
      </main>

      <footer>
        {/* Footer */}
        <p>This is my footer section</p>
      </footer>
    </div>
  );
}
