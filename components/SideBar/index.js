import {RiDashboardLine} from "react-icons/ri"
import {MdOutlineReviews, MdAttachMoney} from "react-icons/md"
import {CgNotes} from "react-icons/cg";
import { HiUsers } from "react-icons/hi";
import { BiRestaurant } from "react-icons/bi"
import SideBarItem from "./SidebarItem";

const SideBar = ()=>{


    const items = [
        {
          icon: RiDashboardLine,
          label: 'Dashboard',
          href: '/',
        },
        {
          icon: CgNotes,
          label: 'Orders',
          href: '/orders'
        },
        {
          icon: MdAttachMoney,
          label: 'Earnings',
          href: '/earnings'
        },
        {
            icon: BiRestaurant,
            label: 'Menu',
            href: '/menu'
        },
        {
            icon: HiUsers,
            label: 'Customers',
            href: '/customers'
        },
        {
            icon: MdOutlineReviews,
            label: 'Reviews',
            href: '/reviews'
        },
      ]

    return (
        <div className="col-span-1 h-full drop-shadow-lg ">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
          {items.map((item) => (
              <SideBarItem
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    )
}

export default SideBar