import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Avator from '../components/avatar'
import Card from '../components/card'

import {
    MenuAlt2Icon,
    XIcon,
    ViewGridIcon,
    ShieldCheckIcon,
    ChipIcon,
    OfficeBuildingIcon,
    UserCircleIcon,
    DocumentTextIcon,
    LogoutIcon
    
} from '@heroicons/react/outline'
import Logo from '../components/logo'
import Hero from '../components/hero'

const navigation = [
    { name: 'Overview', href: '/', icon: ViewGridIcon, current: false},
    { name: 'Policy', href: '/', icon: ShieldCheckIcon, current: false },
    { name: 'Reports', href: '/', icon: ChipIcon, current: true },
    { name: 'Company', href: '/', icon: OfficeBuildingIcon, current: false },
    { name: 'User Account', href: '/', icon: UserCircleIcon, current: false },
    { name: 'History', href: '/', icon: DocumentTextIcon, current: false },
]
const userNavigation = [
    { name: 'Overview', href: '/', icon: ViewGridIcon, current: false },
    { name: 'Policy', href: '/', icon: ShieldCheckIcon, current: false },
    { name: 'Reports', href: '/', icon: ChipIcon, current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const data = [
    {
        total: 1000,
        claim: 40,
        policy: 80,
        policyValue: 400,
        claimValue: 800,
        claimColor: 'purple',
        policyColor: 'green',

    },
    {
        total: 2500,
        claim: 50,
        policy: 70,
        policyValue: 1100,
        claimValue: 1400,
        claimColor: 'purple',
        policyColor: 'green',
    },
    {
        total: 2500,
        claim: 50,
        policy: 70,
        policyValue: 1100,
        claimValue: 1400,
        claimColor: 'purple',
        policyColor: 'green',
    }
]



export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
      
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4 flex-col mt-3">
                                        <Logo/>
                                        <Avator/>
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-purple-700'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                        'group flex items-center pl-24 py-2 text-base font-medium rounded-md justify-items-center'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500',
                                                            'mr-4 flex-shrink-0 h-6 w-6'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <span className='group flex items-center pl-24 py-2 text-base font-medium rounded-md justify-items-center' >
                                        <LogoutIcon className={classNames(
                                            'mr-4 flex-shrink-0 h-6 w-6'
                                        )}
                                            aria-hidden="true"/>
                                        Logout
                                    </span>
                                   
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4 flex-col mt-3">
                            <Logo />
                            <Avator />
                        </div>
                        <div className="mt-5 flex-grow flex flex-col">
                            <nav className="flex-1 px-2 pb-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'text-purple-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center pl-14 py-2 text-sm font-medium rounded-md justify-items-center'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-purple-700' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <span className='group flex items-center pl-16 py-2 text-base font-medium rounded-md justify-items-center text-gray-500' >
                            <LogoutIcon className={classNames(
                                'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                                aria-hidden="true" />
                            Logout
                        </span>
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                {userNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'text-purple-700 underline' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 ',
                                            'group flex items-center pl-14 py-2 text-sm font-medium rounded-md justify-items-center '
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <Hero/>
                                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1' >
                                  {
                                      data.map((item) => {
                                          return (
                                              <Card total={item.total} claim={item.claim} policy={item.policy} policyValue={item.policyValue} claimValue={item.claimValue} policyColor={item.policyColor} claimColor={item.claimColor}/>
                                          )
                                      })
                                  }
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
