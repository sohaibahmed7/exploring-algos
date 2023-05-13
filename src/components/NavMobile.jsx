import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom'
import { navigation } from '../data'

export const NavMobile = () => (
  <div className='fixed top-8 right-8'>
    <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="flex items-center justify-center bg-[#3DA5D9] rounded-2xl h-12 w-12 shadow-md">
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-white px-5 py-3 rounded-lg shadow-md duration-300 mr-8" sideOffset={5}>
            {navigation.map((item, index) => {
              return (
                <DropdownMenu.Item className= 'mb-1 capitalize' key={index}>
                  <Link to={item.href}>{item.name}</Link>
                  </DropdownMenu.Item>
              )
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
);
