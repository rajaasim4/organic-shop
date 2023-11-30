import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, } from 'react'

//Icons
import { IoClose, } from "react-icons/io5"

import FeedbackForm from '../../Forms/FeedbackForm/FeedbackForm'

const Feedback = ({ show, closeModal }) => {

    return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-[70]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center pb-3 border-b border-gray-400"
                                    >
                                        Give Feedback to Organic Shop
                                    </Dialog.Title>

                                    <span className='text-xl absolute top-4 right-4 cursor-pointer w-7 h-7 rounded-full bg-primary_dark_green text-white grid place-items-center' onClick={closeModal}>
                                        <IoClose />
                                    </span>

                                    <FeedbackForm closeModal={closeModal} />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Feedback