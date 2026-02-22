import type { CSSProperties } from "react";

/* ── Estilos base compartidos por los botones ─────────── */
const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 48,
  padding: "0 24px",
  borderRadius: 12,
  fontWeight: 700,
  fontSize: 15,
  textDecoration: "none",
  cursor: "pointer",
  border: "2px solid transparent",
};

const btnPrimary: CSSProperties = {
  ...btnBase,
  background: "#FF5100",
  color: "#ffffff",
  border: "2px solid #FF5100",
};

const btnSecondary: CSSProperties = {
  ...btnBase,
  background: "#ffffff",
  color: "#FF5100",
  border: "2px solid #FF5100",
};

const btnGhost: CSSProperties = {
  ...btnBase,
  background: "transparent",
  color: "#FF5100",
  border: "2px solid transparent",
};

export default function Home() {
  return (
    <div style={{ color: "var(--color-text-primary)", background: "var(--color-bg-default)" }}>

      {/* ── Nav ── */}
      <nav style={{
        borderBottom: "1px solid var(--color-border-default)",
        background: "var(--color-bg-default)",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#FF5100" }}>
            Kalis
          </span>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {["Producto", "Precios", "Empresa"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
            <a href="#" style={{ ...btnSecondary, height: 40, fontSize: 14, padding: "0 20px" }}>
              Iniciar sesión
            </a>
            <a href="#" style={{ ...btnPrimary, height: 40, fontSize: 14, padding: "0 20px" }}>
              Abrí tu cuenta
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background: "var(--color-bg-subtle)",
        padding: "96px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{
            display: "inline-block",
            background: "var(--color-brand-emphasis)",
            color: "#FF5100",
            fontSize: 12,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 20,
            marginBottom: 24,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}>
            Fintech para PYMES
          </span>
          <h1 style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: 24,
            color: "var(--color-text-primary)",
          }}>
            Tu plata, bajo{" "}
            <span style={{ color: "#FF5100" }}>tu control</span>
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "var(--color-text-secondary)",
            maxWidth: 520,
            margin: "0 auto 40px",
          }}>
            Enviá dinero, pagá servicios y gestioná tu negocio desde una sola app. Sin comisiones ocultas.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {/* Primario */}
            <a href="#" style={btnPrimary}>
              Comenzar gratis
            </a>
            {/* Secundario */}
            <a href="#" style={btnSecondary}>
              Ver demo
            </a>
            {/* Terciario / Ghost */}
            <a href="#" style={btnGhost}>
              Saber más →
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "96px 24px", background: "var(--color-bg-subtle)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 16,
            letterSpacing: "-0.5px",
          }}>
            Todo lo que necesitás en un lugar
          </h2>
          <p style={{
            textAlign: "center",
            color: "var(--color-text-secondary)",
            fontSize: 16,
            marginBottom: 64,
          }}>
            Diseñado para que los equipos trabajen más rápido y con más claridad.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}>
            {[
              {
                icon: "💸",
                title: "Enviá y recibí dinero",
                desc: "Transferencias instantáneas sin costo entre cuentas Kalis. Tu equipo cobra en segundos.",
                color: "var(--color-brand-subtle)",
              },
              {
                icon: "🧾",
                title: "Pagá servicios",
                desc: "Impuestos, proveedores y servicios desde la app. Sin filas, sin papeles.",
                color: "var(--color-success-50)",
              },
              {
                icon: "📊",
                title: "Control de gastos",
                desc: "Visualizá tus movimientos en tiempo real. Categorizá y tomá mejores decisiones.",
                color: "var(--color-warning-50)",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: f.color,
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 10,
                  color: "var(--color-text-primary)",
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{
        background: "var(--color-bg-inverse)",
        padding: "80px 24px",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48,
          textAlign: "center",
        }}>
          {[
            { value: "+50K", label: "Usuarios activos" },
            { value: "$0", label: "Costo de apertura" },
            { value: "24/7", label: "Soporte disponible" },
            { value: "99.9%", label: "Uptime garantizado" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#FF5100",
                marginBottom: 8,
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 14,
                color: "var(--color-neutral-400)",
                fontWeight: 600,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "96px 24px",
        textAlign: "center",
        background: "var(--color-bg-default)",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 16,
            letterSpacing: "-0.5px",
          }}>
            Empezá hoy, gratis
          </h2>
          <p style={{
            color: "var(--color-text-secondary)",
            fontSize: 16,
            marginBottom: 36,
            lineHeight: 1.7,
          }}>
            Sin tarjeta de crédito. Sin letra chica. Tu cuenta lista en menos de 5 minutos.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ ...btnPrimary, fontSize: 16, padding: "0 36px" }}>
              Abrí tu cuenta gratis →
            </a>
            <a href="#" style={{ ...btnGhost, fontSize: 16 }}>
              Ver planes
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: "1px solid var(--color-border-default)",
        padding: "32px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1120,
        margin: "0 auto",
      }}>
        <span style={{ fontWeight: 800, color: "#FF5100", fontSize: 18 }}>
          Kalis
        </span>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
          © 2026 Kalis. Todos los derechos reservados.
        </span>
      </footer>

    </div>
  );
}
