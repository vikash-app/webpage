function Footer() {
  const handleContact = () => {
    const user = "Contact";
    const domain = "vikash.app";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
   <footer className="bg-gradient-to-r from-cyan-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center py-8 mt-10 border-t border-pink-100 dark:border-gray-700">
      <p className="text-sm text-gray-400 italic mb-2">Discover stories behind remarkable journeys.</p>
      <p className="text-gray-500">&copy; {new Date().getFullYear()} <span className="font-bold text-pink-600">vikash.app</span> &mdash; Travel, Share, Inspire.</p>
      <button
        type="button"
        onClick={handleContact}
        className="mt-3 text-sm text-pink-600 hover:text-cyan-500 transition underline cursor-pointer bg-transparent border-none p-0 font-inherit"
        aria-label="Send an email"
      >
        Contact me
      </button>
    </footer>
  );
}
export default Footer;