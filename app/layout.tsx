export const metadata = {
  title: "Volunteer Homeworks | Handyman & Property Repair",
  description: "Reliable handyman services in Middle Tennessee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
