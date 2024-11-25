import "../globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
      <body>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      </body>
    </html>
    );
}