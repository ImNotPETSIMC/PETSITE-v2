import Image from "next/image"
import Link from 'next/link';

export type NavItemProps = {
    url: string,
    name: string,
    icon: {
        src: string,
        alt: string
    }
}

export const NavItem = (props: NavItemProps) => {
    return (
        <Link href={props.url} className="font-ps2p text-xs">
            <div className='bg-[#E1E2E9] dark:bg-[#32333E] hover:bg-w95-grey dark:hover:bg-[#32333E80] p-2 gap-4 flex flex-col items-center'>
                <div className="relative h-8 w-8">
                    <Image
                        fill
                        {...props.icon}
                    />
                </div>
                <p>{props.name}</p>
            </div>
        </Link>
    )
}

