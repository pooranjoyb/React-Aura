import React, { useState } from "react";

export const Alert = ({ alertMessage, status }) => {
  const [open, setOpen] = useState(true);

  // Define your alertMessage and status variables
  //   const alertMessage = "A simple info alert"; // You can change this message as needed
  //   const status = "info"; // Change this to "success", "danger", or "warning" as needed

  function closeAlert(event) {
    event.preventDefault();
    setOpen(false);
  }

  // Define a function to set the alert color and border color based on the status
  function getAlertStyles() {
    switch (status) {
      case "success":
        return {
          alertColor: "bg-green-50 text-green-800 dark:text-green-400",
          borderColor: "border-green-400",
        };
      case "danger":
        return {
          alertColor: "bg-red-50 text-red-800 dark:text-red-400",
          borderColor: "border-red-400",
        };
      case "warning":
        return {
          alertColor: "bg-yellow-50 text-yellow-800 dark:text-yellow-300",
          borderColor: "border-yellow-400",
        };
      default:
        return {
          alertColor: "bg-blue-50 text-blue-800 dark:text-blue-400",
          borderColor: "border-blue-400",
        };
    }
  }

  // Define a function to set the close button color based on the status
  function getCloseButtonColor() {
    switch (status) {
      case "success":
        return "bg-green-200 text-green-600 dark:bg-green-400 dark:text-green-800";
      case "danger":
        return "bg-red-200 text-red-600 dark:bg-red-400 dark:text-red-800";
      case "warning":
        return "bg-yellow-200 text-yellow-600 dark:bg-yellow-400 dark:text-yellow-800";
      default:
        return "bg-blue-200 text-blue-600 dark:bg-blue-400 dark:text-blue-800";
    }
  }

  const { alertColor, borderColor } = getAlertStyles();

  return (
    <>
      {open && (
        <div
          id="alert-border-1"
          className={`flex items-center p-4 mb-4 text-sm font-medium ${alertColor} border-l-4 border-solid ${borderColor} dark:bg-gray-800 dark:${borderColor} dark:${alertColor}} animation-fade-in z-10 `}
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ml-3">{alertMessage}</div>
          <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:scale-125 inline-flex items-center justify-center h-8 w-8 ${getCloseButtonColor()} `}
            data-dismiss-target="#alert-border-1"
            aria-label="Close"
            onClick={closeAlert}
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
