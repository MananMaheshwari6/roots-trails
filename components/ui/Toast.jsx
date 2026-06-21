"use client";

import { Toaster, toast } from "react-hot-toast";

/**
 * Global toast provider. Mount once near the app root (e.g. layout).
 *
 * @param {Object} props
 * @param {"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"} [props.position="top-right"] - Toast placement.
 */
export function ToastProvider({ position = "top-right" }) {
  return (
    <Toaster
      position={position}
      toastOptions={{
        duration: 4000,
        className:
          "!bg-surface !text-foreground !border !border-primary/10 !shadow-md !rounded-lg !text-sm !font-medium",
        success: {
          iconTheme: {
            primary: "#546B41",
            secondary: "#FFF8EC",
          },
        },
        error: {
          iconTheme: {
            primary: "#b91c1c",
            secondary: "#FFF8EC",
          },
        },
      }}
    />
  );
}

/**
 * Reusable toast wrapper around react-hot-toast.
 *
 * @param {Object} props
 * @param {string} props.message - Toast message text.
 * @param {"default" | "success" | "error" | "loading"} [props.type="default"] - Toast style/type.
 * @param {number} [props.duration=4000] - Display duration in milliseconds.
 * @returns {string} Toast id from react-hot-toast.
 */
export function Toast({ message, type = "default", duration = 4000 }) {
  const options = { duration };

  switch (type) {
    case "success":
      return toast.success(message, options);
    case "error":
      return toast.error(message, options);
    case "loading":
      return toast.loading(message, options);
    default:
      return toast(message, options);
  }
}

export { toast };
