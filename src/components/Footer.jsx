function Footer() {
  return (
   <footer className="bg-gradient-to-r from-cyan-50 via-white to-pink-50 text-center py-8 mt-10 border-t border-pink-100">
      <p className="text-sm text-gray-400 italic mb-2">Discover stories behind remarkable journeys.</p>
      <p className="text-gray-500">&copy; {new Date().getFullYear()} <span className="font-bold text-pink-600">vikash.app</span> &mdash; Travel, Share, Inspire.</p>
    </footer>
  );
}
export default Footer;