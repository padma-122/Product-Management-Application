import { AlertTriangle, X } from "lucide-react";

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message,confirmText = "Confirm", type = "danger",}) => {
    if (!isOpen) {
        return null;
    }

  const isDanger = type === "danger";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <div className="flex items-start justify-between">
          <button type="button" onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
            <X size={18} />
          </button>
        </div>

        <h2 className="mt-4 text-lg font-semibold text-[#172B3A]">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#718292]">
          {message}
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium text-white transition ${
              isDanger
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#18232C] hover:bg-[#263640]"
            }`}
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmModal;