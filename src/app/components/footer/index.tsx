import Image from "next/image"
import Link from 'next/link';
import { useEffect, useState } from "react";

export const Footer = () => {
    const [today, setToday] = useState<Date>(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() =>  {
            setToday(new Date())
        }, 1000);
    
        return () => clearInterval(timeInterval);
    }, [])

    return (
        <div className="h-14 bg-w95-darker-grey dark:bg-black/80 dark:text-white flex items-center p-2 font-ps2p justify-between">
            <div className="flex gap-2 items-center min-w-fit">
                <Link href="#" className="h-10 flex items-center gap-2 bg-w95-grey dark:bg-white/20 hover:bg-w95-darker-grey hover:dark:bg-white/30 border-w95-dark-grey border-4 border-solid text-xs px-2">
                    <Image 
                        src= "/images/home_icon.png"
                        alt="Home Icon"
                        width={24}
                        height={24}
                        style={{height: "auto", width: "auto"}}/>
                    Start
                </Link>
                <Link href="#" className="h-12 min-w-40 flex items-center gap-2 bg-w95-grey dark:bg-white/20 hover:bg-w95-darker-grey hover:dark:bg-white/40 border-w95-dark-grey border-4 border-solid text-xs px-2">
                    <Image 
                        src= "/images/pet_logo.png"
                        alt="PET-SIMC Logo"
                        width={24}
                        height={24}
                        className="dark:bg-white rounded-full"
                        style={{height: "auto", width: "auto"}}/>
                    PET-SIMC
                </Link>
                <Link href="https://ufu.br" className="h-12 min-w-40 flex items-center gap-2 bg-w95-grey dark:bg-white/20 hover:bg-w95-darker-grey hover:dark:bg-white/40 border-w95-dark-grey border-4 border-solid text-xs px-2">
                    <Image 
                        src= "/images/ufu_logo.png"
                        alt="UFU Logo"
                        width={24}
                        height={24}
                        style={{height: "auto", width: "auto"}}/>
                    UFU
                </Link>
                <Link href="https://facom.ufu.br" className="h-12 min-w-40 flex items-center gap-2 bg-w95-grey dark:bg-white/20 hover:bg-w95-darker-grey hover:dark:bg-white/40 border-w95-dark-grey border-4 border-solid text-xs px-2">
                        <Image 
                            src= "/images/facom_logo.png"
                            alt="FACOM Logo"
                            width={24}
                            height={24}
                            style={{height: "auto", width: "auto"}}/>
                        FACOM

                </Link>
            </div>
            <div suppressHydrationWarning className="h-10 min-w-20 flex items-center gap-2 bg-w95-grey dark:bg-white/20 border-w95-dark-grey border-4 border-solid text-xs px-2">
                {(today.getHours().toString().length == 1 ? "0" : "") + today.getHours() + ":" + (today.getMinutes().toString().length == 1 ? 0 : "") + today.getMinutes()}
            </div>  
        </div> 
    )

}