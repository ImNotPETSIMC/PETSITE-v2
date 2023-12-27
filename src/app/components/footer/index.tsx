import Image from "next/image"

export const Footer = () => {

    return (
        <div className="w-full h-14 bg-w95-darker-grey flex items-center px-2 font-ps2p gap-2 mt-32">
            <a href="#">
                <div className="h-10 flex items-center gap-2 bg-w95-grey border-w95-dark-grey border-4 border-solid text-xs px-2">
                    <Image 
                        src= "/images/home_icon.png"
                        alt="Home Icon"
                        width={24}
                        height={24}/>
                    Start
                </div>
            </a>
            <div className="h-12 min-w-40 flex items-center gap-2 bg-w95-grey border-w95-dark-grey border-4 border-solid text-xs px-2">
                <Image 
                    src= "/images/pet_logo.png"
                    alt="PET-SIMC Logo"
                    width={24}
                    height={24}/>
                PET-SIMC
            </div>
            <a href="https://ufu.br">
                <div className="h-12 min-w-40 flex items-center gap-2 bg-w95-grey border-w95-dark-grey border-4 border-solid text-xs px-2">
                    <Image 
                        src= "/images/ufu_logo.png"
                        alt="UFU Logo"
                        width={24}
                        height={24}/>
                    UFU
                </div>
            </a>
            <a href="https://facom.ufu.br">
                <div className="h-12 min-w-40 flex items-center gap-2 bg-w95-grey border-w95-dark-grey border-4 border-solid text-xs px-2">
                    <Image 
                        src= "/images/facom_logo.png"
                        alt="FACOM Logo"
                        width={24}
                        height={24}/>
                    FACOM
                </div>
            </a>
        </div>
    )

}