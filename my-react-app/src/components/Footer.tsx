export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,5%)] text-[hsl(0,0%,60%)] py-8 border-t border-[hsl(0,0%,15%)]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <p>&copy; {new Date().getFullYear()} Sarah Angwen. All rights reserved.</p>
      </div>
    </footer>
  );
}
