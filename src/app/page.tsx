export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-cream)",
        gap: "1rem",
      }}
    >
      <h1 style={{ color: "var(--color-deep)" }}>Sinaen</h1>
      <p style={{ color: "var(--color-clay)", letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.9rem" }}>
        Yoga · Pilates · Bien-être holistique
      </p>
    </main>
  );
}
