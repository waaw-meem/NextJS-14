export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode; // Change type to React.ReactNode
}) {
  const isLoggedIn = false; // Set to false for testing

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div>{children}</div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
          </div>
        </div>
      ) : (
         login // Render the login component here
      )}
    </>
  );
}
