"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Modal({ isOpenEvent, setIsOpenEvent }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit", e);
    setIsOpenEvent(false);
  };
  return (
    <div>
      <Dialog
        open={isOpenEvent}
        onClose={setIsOpenEvent}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Add Event{" "}
                    </DialogTitle>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="w-full  px-4 py-3  sm:px-6 sm:ml-4">
                  <div className=" py-2">
                    <label htmlFor="" className="block py-1">
                      Title:
                    </label>
                    <input
                      type="text"
                      value={title}
                      name="title"
                      id="title"
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter event title"
                      className="border border-gray-300 outline-none rounded-xl p-2 w-[90%]"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="" className="block py-1">
                      Start Date:
                    </label>
                    <input
                      type="date"
                      value={start}
                      name="start"
                      id="start"
                      onChange={(e) => setStart(e.target.value)}
                      className="border border-gray-300 outline-none rounded-xl p-2 w-[90%]"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="" className="block py-1">
                      End Date:
                    </label>
                    <input
                      type="date"
                      value={end}
                      name="end"
                      id="end"
                      onChange={(e) => setEnd(e.target.value)}
                      className="border border-gray-300 outline-none rounded-xl p-2 w-[90%]"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    // onClick={() => setIsOpenEvent(false)}
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setIsOpenEvent(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
