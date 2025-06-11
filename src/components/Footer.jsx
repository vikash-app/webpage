export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-darkSurface text-center py-6 mt-10">
      <p className="text-gray-500">&copy; {new Date().getFullYear()} vikash.app &mdash; Travel, Share, Inspire.</p>
    </footer>
  );
}