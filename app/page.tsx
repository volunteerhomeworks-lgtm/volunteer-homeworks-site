export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", margin: 0 }}>
      
      <section style={{
        background: "#091a36",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Reliable Handyman Services in Middle Tennessee
        </h1>

        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto 30px" }}>
          Professional, dependable home repairs and property maintenance.
          Serving homeowners across Middle Tennessee.
        </p>

        <a href="tel:6156135169" style={{
          background: "#d8a33d",
          color: "#000",
          padding: "14px 24px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Call 615-613-5169
        </a>
      </section>

    </main>
  );
}
