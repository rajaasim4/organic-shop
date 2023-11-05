// import { Fragment, useState } from 'react'
// import { Combobox, Transition } from '@headlessui/react'


// const people = [
//     { id: 1, name: 'Wade Cooper' },
//     { id: 2, name: 'Arlene Mccoy' },
//     { id: 3, name: 'Devon Webb' },
//     { id: 4, name: 'Tom Cook' },
//     { id: 5, name: 'Tanya Fox' },
//     { id: 6, name: 'Hellen Schmidt' },
// ]

// const SearchCategory = () => {
//     const [selected, setSelected] = useState(people[0])
//     const [query, setQuery] = useState('')

//     const filteredPeople =
//         query === ''
//             ? people
//             : people.filter((person) =>
//                 person.name
//                     .toLowerCase()
//                     .replace(/\s+/g, '')
//                     .includes(query.toLowerCase().replace(/\s+/g, ''))
//             )


//     return (
//         <div className="z-40 h-max">
//             <Combobox value={selected} onChange={setSelected}>
//                 <div className="relative mt-1">
//                     <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
//                         <Combobox.Input
//                             className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
//                             displayValue={(person) => person.name}
//                             onChange={(event) => setQuery(event.target.value)}
//                         />
//                         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//                             {/* <ChevronUpDownIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               /> */}
//                         </Combobox.Button>
//                     </div>
//                     <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                         afterLeave={() => setQuery('')}
//                     >
//                         <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                             {filteredPeople.length === 0 && query !== '' ? (
//                                 <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
//                                     Nothing found.
//                                 </div>
//                             ) : (
//                                 filteredPeople.map((person) => (
//                                     <Combobox.Option
//                                         key={person.id}
//                                         className={({ active }) =>
//                                             `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
//                                             }`
//                                         }
//                                         value={person}
//                                     >
//                                         {({ selected, active }) => (
//                                             <>
//                                                 <span
//                                                     className={`block truncate ${selected ? 'font-medium' : 'font-normal'
//                                                         }`}
//                                                 >
//                                                     {person.name}
//                                                 </span>
//                                                 {selected ? (
//                                                     <span
//                                                         className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
//                                                             }`}
//                                                     >
//                                                         {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
//                                                     </span>
//                                                 ) : null}
//                                             </>
//                                         )}
//                                     </Combobox.Option>
//                                 ))
//                             )}
//                         </Combobox.Options>
//                     </Transition>
//                 </div>
//             </Combobox>
//         </div>
//     )
// }

// export default SearchCategory

import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri"
const SearchCategory = () => {

    const [showcategory, setShowCategory] = useState(false);
    const [category, setCategory] = useState("All")
    const handleSelectSortValue = (e) => {
        setCategory(e.target.value);
        setShowCategory((prev) => !prev);
    }

    return (
        <div className="min-h-[60px] mb-8 z-[60]  w-full flex justify-end items-center relative ">
            <div className={`${showcategory ? "h-[300px]" : "h-12"}  duration-300 overflow-hidden   w-full  absolute right-3 top-2 rounded-lg z-[60]`}>
                <button className=" w-full flex justify-between px-2 items-center h-12 mb-0 rounded-lg  text-white" onClick={() => setShowCategory((prev) => !prev)}>{category} <RiArrowDownSLine /> </button>

                <button className="text-white duration-300 w-full h-10 hover:bg-white bg-primary_bg hover:text-black text-left pl-5" value={"Default"} onClick={handleSelectSortValue} >Default </button>
                <button className="text-white duration-300 w-full h-10 hover:bg-white bg-primary_bg hover:text-black text-left pl-5" value={"Low Price"} onClick={handleSelectSortValue}> Low Price</button>
                <button className="text-white duration-300 w-full h-10 hover:bg-white bg-primary_bg hover:text-black text-left pl-5" value={"High Price"} onClick={handleSelectSortValue}> High Price</button>
                <button className="text-white duration-300 w-full h-10 hover:bg-white bg-primary_bg hover:text-black text-left pl-5" value={"Ascending"} onClick={handleSelectSortValue}> Ascending </button>
                <button className="text-white duration-300 w-full h-10 hover:bg-white bg-primary_bg hover:text-black text-left pl-5 " value={"Descending"} onClick={handleSelectSortValue}>Descending </button>
            </div>
        </div>
    )
}

export default SearchCategory