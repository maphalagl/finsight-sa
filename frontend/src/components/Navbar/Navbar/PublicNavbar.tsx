function Navbar() {
  return (
    <header className="border-b border-(--color-border) bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-(--color-primary)">
          FinSight SA
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-(--color-primary)"
          >
            Features
          </a>

          <a
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-(--color-primary)"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-lg bg-(--color-primary) px-4 py-2 text-sm font-semibold text-white hover:bg-(--color-primary-dark)"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
