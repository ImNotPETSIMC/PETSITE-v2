import Image from "next/image"
import { Window } from "../window"
import Link from "next/link"

export const Header = () => {
    return (
        <>
            <div className='flex gap-5 -translate-x-2 max-w-screen-2xl basis-full justify-between'>
                <div className="flex gap-5">
                    <Window>
                        <div className='font-monoton 2xl:py-28 2xl:px-52 py-20 px-16 text-8xl text-w95-blue text-center'> PET-SIMC </div>
                    </Window>

                    <div className='translate-y-14'>
                        <Window>
                            <div className='p-10'>
                                <Image
                                    src="/images/pet_logo.png"
                                    width={300}
                                    height={300}
                                    alt="PET-SIMC's Logo"
                                    className="dark:drop-shadow-[2px_4px_6px_#FFFFFF40]"
                                    style={{height: "auto", width: "auto"}}
                                />
                            </div>
                        </Window>
                    </div>
                </div>

                <div className='translate-y-10 font-ps2p flex flex-col gap-4'>
                    <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid bg-white/20 h-fit'>
                        <Link className='p-2' href='https://www.youtube.com/@petsimc3135'>
                            <Image
                                src="/images/youtube_logo.png"
                                width={60}
                                height={60}
                                alt="Youtube's Logo"
                                style={{height: "auto", width: "auto"}}
                            />
                        </Link>
                        <div className='bg-white w-full px-2'>Youtube</div>
                    </div>

                    <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid bg-white/20 h-fit'>
                        <Link className='p-2' href='https://open.spotify.com/show/390mvapHgaoTZFQoeusC7z?si=92010368c3744da7'>
                            <Image
                                src="/images/spotify_logo.png"
                                width={60}
                                height={60}
                                alt="Spotify's Logo"
                                style={{height: "auto", width: "auto"}}
                            />
                        </Link>
                        <div className='bg-white w-full px-2'>Spotify</div>
                    </div>

                    <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid h-fit bg-white/20'>
                        <Link className='p-2' href='https://www.instagram.com/petsimc/'>
                            <Image
                                src="/images/instagram_logo.png"
                                width={60}
                                height={60}
                                alt="Instagram's Logo"
                                className='mix-blend-multiply'
                                style={{height: "auto", width: "auto"}}
                            />
                        </Link>
                        <div className='bg-white w-full px-2'>Instagram</div>
                    </div>

                    <div className='flex flex-col items-center text-[0.5rem] text-center border-white border border-solid h-fit bg-white/20'>
                        <Link className='p-2' href='#'>
                            <Image
                                src="/images/petcast_logo.png"
                                width={60}
                                height={60}
                                alt="PETCast's Logo"
                                className='mix-blend-multiply dark:drop-shadow-[2px_4px_6px_white]'
                                style={{height: "auto", width: "auto"}}
                            />
                        </Link>
                        <div className='bg-white w-full px-2'>PETCast</div>
                    </div>
                </div>
            </div>
            <div className="basis-full"></div>
        </>
    )
}