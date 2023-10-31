import { Bell, Menu, Mic, Upload, User } from 'lucide-react'
import logo from '../assets/logo.png'
import { Button } from '../components/Button'

export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} alt="a logo" className='w-auto h-6' />
            </a>
        </div>
        <form action="" className="flex gap-4 flex-grow justify-center">
            <div className='flex flex-grow max-w-[600px'></div>
            <Button type="button" size="icon">
                <Mic />
            </Button>
        </form>
        <div className="flex flex-shrink-0 md:gap-2">

            <Button variant="ghost" size="icon">
                <Upload></Upload>
            </Button>
            <Button variant="ghost" size="icon">
                <Bell />
            </Button>
            <Button variant="ghost" size="icon">
                <User />
            </Button>
        </div>
    </div>
}