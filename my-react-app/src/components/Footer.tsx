export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-footer)] text-[var(--color-text-muted)] py-8 border-t border-[var(--color-border-light)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <p>&copy; {new Date().getFullYear()} Sarah Angwen. All rights reserved.</p>
      </div>
    </footer>
  );
}
