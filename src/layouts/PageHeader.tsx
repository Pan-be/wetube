import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import logo from '../assets/logo.png'
import { Button } from '../components/Button'
import { useState } from 'react'
import { useSidebarContext } from '../contexts/SidebarContext'

export function PageHeader() {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    return (
        <div className="w-full flex gap-10 lg:gap-20 justify-between pt-2 mb-6 px-4">
        <PageHeaderFirstSection hidden={showFullWidthSearch} />
        <form action="" 
        className={`gap-4 flex-grow justify-center 
        ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
            {showFullWidthSearch && (<Button onClick={() => setShowFullWidthSearch(false)} type="button" size="icon" className='flex-shrink-0' variant='ghost'>
                <ArrowLeft />
            </Button>)}
            <div className='flex flex-grow max-w-[600px]'>
                <input type='search' placeholder='Search'
                    className='border rounded-l-full border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none' />
                <Button className='py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0'>
                    <Search />
                </Button>
            </div>
            <Button type="button" size="icon" className='flex-shrink-0'>
                <Mic />
            </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>

            <Button onClick={() => setShowFullWidthSearch(true)} variant="ghost" size="icon" className='md:hidden'>
                <Search />
            </Button>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <Mic />
            </Button>
            <Button variant="ghost" size="icon">
                <Upload />
            </Button>
            <Button variant="ghost" size="icon">
                <Bell />
            </Button>
            <Button variant="ghost" size="icon">
                <User />
            </Button>
        </div>
    </div>
    )
}

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

export function PageHeaderFirstSection({hidden = false}: PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext()

    return (
    <div className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
            <Button onClick={toggle} variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} alt="a logo" className='w-auto h-6' />
            </a>
        </div>
    )
}