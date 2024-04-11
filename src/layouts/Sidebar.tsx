import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { ElementType, ReactNode } from "react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge"
import React from "react";


export function Sidebar() {
    return (
        <>
            <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
                <SmallSidebarItem Icon={Home} title='Home' url='/' />
                <SmallSidebarItem Icon={Repeat} title='Shorts' url='/shorts' />
                <SmallSidebarItem Icon={Clapperboard} title='Subscriptions' url='/subscription' />
                <SmallSidebarItem Icon={Library} title='Library' url='/library' />
            </aside>
            <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col gap-2 px-2">
                <LargeSidebarSection visibleItemCount={1} title="Hi">
                    <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
                    <LargeSidebarItem Icon={Home} title="Home" url="/" />
                </LargeSidebarSection>
            </aside>
        </>)
}

type SmallSidebarProps = {
    Icon: ElementType,
    title: string,
    url: string
}

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarProps) => {
    return <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), "py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
        <Icon className="h-6 w-6" />
        <div className="text-sm">{title}</div>
    </a>
}

type LargeSidebarSection = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
}

const LargeSidebarSection = ({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: LargeSidebarSection) => {
    const childrenArray = React.Children.toArray(children).flat()
    const visibleChildren = childrenArray.slice(0, visibleItemCount)
    return <div>
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {visibleChildren}
    </div>
}

type LargeSidebarProps = {
    Icon: ElementType,
    title: string,
    url: string,
    isActive?: boolean
}

const LargeSidebarItem = ({ Icon, title, url, isActive = false }: LargeSidebarProps) => {
    return <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
        <Icon className="w-6 h-6" />
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
        </div>
    </a>
}