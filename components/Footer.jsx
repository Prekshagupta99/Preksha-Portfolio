export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-rose-100 text-rose-700 text-center py-6 mt-16 border-t border-rose-200 shadow-inner">
      <p className="text-sm font-medium tracking-wide">
        © {new Date().getFullYear()} <span className="italic font-semibold text-rose-900">Preksha Gupta</span> All rights reserved.
      </p>
    </footer>
  );
}
