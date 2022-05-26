/* This example requires Tailwind CSS v2.0+ */
import {  PlusIcon} from '@heroicons/react/solid'

export default function Button() {
    return (
        <>
            <button
                type="button"
                className=" mt-3 inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-purple-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-xs"
            >
                 Create New Plan
                <PlusIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
            </button>
        </>
    )
}