export default function FormLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT - FORM */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{subtitle}</p>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            {children}
          </div>
        </div>

        {/* RIGHT - INFO PANEL */}
        <div className="space-y-6">

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold mb-2">Why HireNest?</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ 120+ Verified Vendors</li>
              <li>✔ 500+ Consultants</li>
              <li>✔ 24-hour Talent Matching</li>
              <li>✔ PAN India Hiring</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p className="text-sm text-gray-600">info@hirenestworkforce.com</p>
            <p className="text-sm text-gray-600">+91 9392894748</p>
            <p className="text-sm text-gray-600">Hyderabad, India</p>
          </div>

        </div>

      </div>
    </div>
  );
}
