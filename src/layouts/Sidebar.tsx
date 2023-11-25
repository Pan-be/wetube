import { Home } from "lucide-react";
import { ElementType } from "react";
import { buttonStyles } from "../components/Button";

export function Sidebar() {
    return <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title='Home' url='/' />
    </aside>
}

type SmallSidebarProps = {
    Icon: ElementType,
    title: string,
    url: string
}

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarProps) => {
    return <a href={url} className={buttonStyles({ variant: "ghost" })}>
        <Icon className="h-6 w-6" />
        <div className="text-sm">{title}</div>
    </a>
}