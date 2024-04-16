import Link from "next/link"

export default function ResumeBox() {
  return (
    <div className="mt-5">
      <div className="rounded-md bg-gray-50/50 dark:bg-gray-900/70 px-6 py-5 sm:flex sm:items-start sm:justify-between">
        <h4 className="sr-only">PDF</h4>
        <div className="sm:flex sm:items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>

          <div className="mt-3 sm:ml-4 sm:mt-0">
            <div className="text-sm font-medium text-gray-900 dark:text-slate-200">
              Himanshu singh.pdf (~93kb)
            </div>
            <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
              <div className="dark:text-slate-200">Full-Stack Engineer</div>
              <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                &middot;
              </span>
              <div className="mt-1 sm:mt-0 dark:text-slate-200">Software Engineer</div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
         
          <Link
            href="https://drive.google.com/file/d/1hYyXZpa6X8RhWfapiWA8IDdY1ouFHAhL/view"
            target="_blank"
          >
            <button
              type="button"
              className="ml-2 inline-flex items-center rounded-md bg-slate-100/30 dark:bg-gray-900/60 dark:text-slate-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Download
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
