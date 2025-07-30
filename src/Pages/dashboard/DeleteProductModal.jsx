import { X, Trash2 } from "lucide-react";

export default function DeleteProductModal({ product, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30">
      {/* Slide panel */}
      <div className="w-full sm:max-w-sm bg-white shadow-xl p-6 transform animate-slideIn transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-red-600">Delete Product</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete <strong>{product.name}</strong>? This
          action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 text-sm flex items-center gap-1"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
