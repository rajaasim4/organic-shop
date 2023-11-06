import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'

//Icons
import { IoClose, IoMailOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"
import { BiMessageDetail } from "react-icons/bi"

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
                                    <div className="mt-2">
                                        <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                            <span className="text-2xl">
                                                <AiOutlineUser />
                                            </span>
                                            <input
                                                name="name"
                                                type="text"
                                                className="h-full w-full outline-none pl-3 bg-transparent"
                                                placeholder="Enter Your Name"
                                            />
                                        </div>
                                        <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                            <span className="text-2xl">
                                                <IoMailOutline />
                                            </span>
                                            <input
                                                name="name"
                                                type="text"
                                                className="h-full w-full outline-none pl-3 bg-transparent"
                                                placeholder="Enter Your Email"
                                            />
                                        </div>
                                        <div className="shadow-md  px-3 pl-6 rounded-lg h-44 border border-gray-500  mt-6 flex pt-3 items-start">
                                            <span className="text-2xl">
                                                < BiMessageDetail />
                                            </span>
                                            <textarea name="name"
                                                type="text"
                                                className="h-full resize-none  w-full outline-none pl-3 "
                                                placeholder="Enter Your Message" cols="30" rows="10"></textarea>
                                            {/* <input
                                                name="name"
                                                type="text"
                                                className="h-full bg-red-300 w-full outline-none pl-3 "
                                                placeholder="Enter Your Message"
                                            /> */}
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <button

                                            className={`rounded-xl text-white w-40 h-12 mt-4 mx-auto  bg-btn_bg cursor-pointer  hover:bg-slate-800 duration-300 flex justify-center items-center `}
                                            type="submit"

                                            onClick={closeModal}
                                        >
                                            Submit Feedback

                                        </button>
                                    </div>
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