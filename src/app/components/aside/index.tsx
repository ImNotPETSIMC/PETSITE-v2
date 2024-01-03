import { useTheme } from "next-themes";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export const Aside = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])



    return (
        <div className='text-black sticky lg:top-4 z-10 font-ps2p flex lg:flex-col flex-row gap-4 text-[0.5rem] items-center w-fit h-fit p-2'>
            <div className='flex flex-col items-center text-center border-white border border-solid bg-white/20 h-fit w-fit'>
                <Link className='relative h-20 w-20 p-2' href='https://www.youtube.com/@petsimc3135'>
                    <Image
                        src="/images/youtube_logo.png"
                        fill
                        alt="Youtube's Logo"
                        style={{ padding: "1rem" }}
                    />
                </Link>
                <div className='bg-white w-full px-2'>Youtube</div>
            </div>

            <div className='flex flex-col items-center text-center border-white border border-solid bg-white/20 h-fit w-fit'>
                <Link className='relative h-20 w-20 p-2' href='https://open.spotify.com/show/390mvapHgaoTZFQoeusC7z?si=92010368c3744da7'>
                    <Image
                        src="/images/spotify_logo.png"
                        fill
                        alt="Spotify's Logo"
                        style={{ padding: "1rem" }}
                    />
                </Link>
                <div className='bg-white w-full px-2'>Spotify</div>
            </div>

            <div className='flex flex-col items-center text-center border-white border border-solid bg-white/20 h-fit w-fit'>
                <Link className='relative h-20 w-20 p-2' href='https://www.instagram.com/petsimc/'>
                    <Image
                        src="/images/instagram_logo.png"
                        fill
                        alt="Instagram's Logo"
                        style={{ padding: "1rem" }}
                    />
                </Link>
                <div className='bg-white w-full px-2'>Instagram</div>
            </div>

            <div className='flex flex-col items-center text-center border-white border border-solid bg-white/20 h-fit w-fit'>
                <Link className='relative h-20 w-20 p-2' href='#'>
                    <Image
                        src="/images/petcast_logo.png"
                        fill
                        alt="PETCast's Logo"
                        className='dark:drop-shadow-[2px_4px_6px_white]'
                        style={{ padding: "1rem" }}
                    />
                </Link>
                <div className='bg-white w-full px-2'>PETCast</div>
            </div>

            {!mounted ?
                <></>
                :
                <div className='flex flex-col items-center text-center border-white border border-solid bg-white/20 h-fit w-fit'>
                    <button className='relative h-20 w-20 p-2' onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                        <Image
                            src={theme == "dark" ? "/images/sun.svg" : "/images/moon.svg"}
                            fill
                            alt="Opposite Theme's Logo"
                            style={{ padding: "1rem" }}
                        />
                    </button>
                    <div className='bg-white w-full px-2'>{theme == "dark" ? "Light Mode" : "Dark Mode"}</div>
                </div>
            }
        </div>
    )
}