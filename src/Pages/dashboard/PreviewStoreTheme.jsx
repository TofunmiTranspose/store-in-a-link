export default function PreviewStoreTheme({ form }) {
  return (
    <div className="rounded-xl shadow border overflow-hidden">
      {/* Banner */}
      <div className="relative h-40 bg-gray-200">
        {form.banner ? (
          <img
            src={form.banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No banner
          </div>
        )}

        {/* Logo */}
        {form.logo && (
          <img
            src={form.logo}
            alt="Logo"
            className="w-20 h-20 rounded-full border-4 border-white absolute -bottom-10 left-6 object-cover shadow"
          />
        )}
      </div>

      {/* Store Info */}
      <div
        className="pt-14 px-6 pb-4"
        style={{ borderTopColor: form.themeColor }}
      >
        <h2 className="text-xl font-bold">{form.name || "Your Store Name"}</h2>
        <p className="text-sm text-gray-600 mt-1">
          {form.bio || "Your store bio will show here."}
        </p>

        <div className="flex gap-4 mt-3 text-sm">
          {form.whatsapp && (
            <a
              href={`https://wa.me/${form.whatsapp}`}
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          )}
          {form.instagram && (
            <a
              href={`https://instagram.com/${form.instagram}`}
              className="text-pink-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
