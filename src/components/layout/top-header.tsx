"use client";

export function TopHeader() {
  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    window.location.href = "/login";
  };

  return (
    <header className="flex items-center justify-between border-b border-black/10 bg-white px-6 py-4">
      <div>
        <h2 className="text-xl font-semibold text-zinc-900">Dashboard</h2>
        <p className="text-sm text-zinc-500">Welcome to Umber Canada internal operations.</p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-85"
      >
        Logout
      </button>
    </header>
  );
}
