"use client";
import { Combobox, Transition } from '@headlessui/react'
import { searchManufacturerProps } from '@/types'
import Image from 'next/image';

const SearchManufacturer = ({manufacturer, setManufacturer}: searchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='Car Logo'
                        />

                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                    />
                </div>
            </Combobox>
    </div>
  )
}

export default SearchManufacturer