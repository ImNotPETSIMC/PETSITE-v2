import { Window } from "../window"
import Image from "next/image"

export const Header = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 items-center p-2">
                <div>
                    <Window>
                        <div className='font-monoton p-20 px-40 text-8xl text-w95-blue text-center'> PET-SIMC </div>
                    </Window>
                </div>

                <div className="lg:translate-y-20">
                    <Window>
                        <div className='p-10 h-80 w-80 relative'>
                            <Image
                                src="/images/pet_logo.png"
                                fill={true}
                                alt="PET-SIMC's Logo"
                                className="dark:drop-shadow-[0px_0px_0.1px_white]"
                            />
                        </div>
                    </Window>
                </div>
            </div>
        </>
    )
}