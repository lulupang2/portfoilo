import Head from "next/head";
import "../styles/styles.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-+JLgHOmG+5vzvzjHgTQJ9iVzrJx6Z7tqKvLlZt+3yj5jWd7f5q3k6X9x6mX8nWYKjvMw6UJQwU0QbW7gFVY9A=="
          crossOrigin="anonymous"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
