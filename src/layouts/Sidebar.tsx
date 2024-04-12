import { ChevronDown, ChevronUp, Clapperboard, Clock, Home, Library, PlaySquare, Repeat, History, ListVideo, Flame, ShoppingBag, Music2, Radio, Newspaper, Film, Gamepad2, Trophy, Lightbulb, Shirt, Podcast } from "lucide-react";
import { ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge"
import React from "react";
import { playlists, subscriptions } from "../data/sidebar";


export function Sidebar() {
    return (
        <>
            <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
                <SmallSidebarItem Icon={Home} title='Home' url='/' />
                <SmallSidebarItem Icon={Repeat} title='Shorts' url='/shorts' />
                <SmallSidebarItem Icon={Clapperboard} title='Subscriptions' url='/subscription' />
                <SmallSidebarItem Icon={Library} title='Library' url='/library' />
            </aside>
            <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 lg:flex hidden flex-col gap-2 px-2">
                <LargeSidebarSection>
                    <LargeSidebarItem isActive IconOrUrl={Home} title="Home" url="/" />
                    <LargeSidebarItem IconOrUrl={Clapperboard} title='Subscriptions' url='/subscription' />
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection visibleItemCount={5}>
                    <LargeSidebarItem
                        IconOrUrl={Library}
                        title="Library"
                        url="/library"
                    />
                    <LargeSidebarItem
                        IconOrUrl={History}
                        title="History"
                        url="/history"
                    />
                    <LargeSidebarItem
                        IconOrUrl={PlaySquare}
                        title="Your Videos"
                        url="/your-videos"
                    />
                    <LargeSidebarItem
                        IconOrUrl={Clock}
                        title="Watch Later"
                        url="/playlist?list=WL"
                    />
                    {playlists.map(playlist => (
                        <LargeSidebarItem key={playlist.id} title={playlist.name} IconOrUrl={ListVideo} url={`/playlist?list=${playlist.id}`} />
                    ))}
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection title="Subscription">
                    {subscriptions.map(subscription => (
                        <LargeSidebarItem IconOrUrl={subscription.imgUrl} key={subscription.id} title={subscription.channelName} url={`/@${subscription.id}`} />
                    ))}
                </LargeSidebarSection>
                <hr />
                <LargeSidebarSection title="Explore">
                    <LargeSidebarItem
                        IconOrUrl={Flame}
                        title="Trending"
                        url="/trending"
                    />
                    <LargeSidebarItem
                        IconOrUrl={ShoppingBag}
                        title="Shopping"
                        url="/shopping"
                    />
                    <LargeSidebarItem IconOrUrl={Music2} title="Music" url="/music" />
                    <LargeSidebarItem
                        IconOrUrl={Film}
                        title="Movies & TV"
                        url="/movies-tv"
                    />
                    <LargeSidebarItem IconOrUrl={Radio} title="Live" url="/live" />
                    <LargeSidebarItem
                        IconOrUrl={Gamepad2}
                        title="Gaming"
                        url="/gaming"
                    />
                    <LargeSidebarItem IconOrUrl={Newspaper} title="News" url="/news" />
                    <LargeSidebarItem
                        IconOrUrl={Trophy}
                        title="Sports"
                        url="/sports"
                    />
                    <LargeSidebarItem
                        IconOrUrl={Lightbulb}
                        title="Learning"
                        url="/learning"
                    />
                    <LargeSidebarItem
                        IconOrUrl={Shirt}
                        title="Fashion & Beauty"
                        url="/fashion-beauty"
                    />
                    <LargeSidebarItem
                        IconOrUrl={Podcast}
                        title="Podcasts"
                        url="/podcasts"
                    />
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
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = React.Children.toArray(children).flat()
    const showExpandButton = childrenArray.length > visibleItemCount
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown
    return <div>
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {visibleChildren}
        {showExpandButton &&
            <Button
                onClick={() => setIsExpanded(e => !e)}
                variant="ghost" className="w-full flex items-center rounded-lg gap-4 p-3">
                <ButtonIcon className="w-6 h-6" />
                <div>{isExpanded ? "Show Less" : "Show More"}</div>
            </Button>
        }
    </div>
}

type LargeSidebarProps = {
    IconOrUrl: ElementType | string,
    title: string,
    url: string,
    isActive?: boolean
}

const LargeSidebarItem = ({ IconOrUrl, title, url, isActive = false }: LargeSidebarProps) => {
    return <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
        {typeof IconOrUrl === "string" ? <img src={IconOrUrl} className="w-6 h-6 rounded-full" /> : (
            <IconOrUrl className="w-6 h-6" />)}
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
        </div>
    </a>
}