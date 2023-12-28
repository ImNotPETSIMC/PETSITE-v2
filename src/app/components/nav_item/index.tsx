import Image from "next/image"
import Link from 'next/link';

export type NavItemProps = {
    url: string,
    name: string,  
    icon: { 
        src: string,  
        alt: string, 
        width: number, 
        height: number 
    }
}

export const NavItem = (props: NavItemProps) => {
    return (
        <Link href={props.url}>
            <div className='bg-[#E1E2E9] flex gap-4 p-2 font-ps2p text-xs items-center w-48 h-16 drop-shadow-md'>
                    <Image 
                        {...props.icon}
                    />
                    {props.name}
            </div>
        </Link>
    )
}

