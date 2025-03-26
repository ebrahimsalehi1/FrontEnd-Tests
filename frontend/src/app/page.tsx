import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Welcome to the Next.js application!</p>
      </main>
    </div>
  );
}
