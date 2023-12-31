import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

export type Tutor = {
    name: string;
    photo?: string;
    admission_year?: number;
    place_of_birth?: string;
    area?: string;
    disciplines?: string[];
    email?: string;
    status?: string;
    github_url?: string;
    instagram_url?: string;
    linkedin_url?: string;
    lattes_url?: string;
}

export type TutorCardProps = {
    member: Tutor,
    onClickLeft?: MouseEventHandler<HTMLButtonElement>,
    onClickRight?: MouseEventHandler<HTMLButtonElement>,
}

export const TutorCard = (props: TutorCardProps) => {
    return ( 
        <div className='flex font-ps2p py-8 gap-8 p-4 dark:bg-black'>
            <div className="flex justify-center items-center">
                <button onClick={props.onClickLeft} className='h-60 w-12 flex justify-center items-center bg-w95-light-grey hover:bg-w95-light-grey/60 border-8 border-solid border-w95-grey'>
                    <Image 
                        src="/images/left_arrow.svg" 
                        alt="Previous Member Icon"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            <div className="flex flex-col items-center grow justify-between gap-4">
                <div className="flex flex-col items-center gap-8 grow">
                    <div className="text-center">
                        <h1 className='text-2xl'>{props.member.name ? props.member.name : "Membro Não Definido"}</h1>
                        <h2 className='text-sm text-black/50 dark:text-white/50'>{props.member.status ? (props.member.status + " do PET-SIMC") : "undefined" }</h2>
                    </div>
                    <div className="flex flex-col gap-4 text-xs">
                        <p>📅 - Ingresso no PET:    <span className={'text-black/50 dark:text-white/50 ' + (props.member.admission_year     ? "" : "glitch")}>{props.member.admission_year    ? props.member.admission_year            : "undefined"}</span></p>
                        <p>🏙️ - Naturalidade:       <span className={'text-black/50 dark:text-white/50 ' + (props.member.place_of_birth     ? "" : "glitch")}>{props.member.place_of_birth    ? props.member.place_of_birth            : "undefined"}</span></p>
                        <p>🏛️ - Área:               <span className={'text-black/50 dark:text-white/50 ' + (props.member.area               ? "" : "glitch")}>{props.member.area              ? props.member.area                      : "undefined"}</span></p>
                        <p>🎓 - Disciplinas         <span className={'text-black/50 dark:text-white/50 ' + (props.member.disciplines        ? "" : "glitch")}>{props.member.disciplines       ? props.member.disciplines.join(", ")    : "undefined"}</span></p>
                    </div>
                </div>
                <Link className={'flex justify-center max-w-60 px-8 py-4 text-black/80 bg-w95-light-grey border-4 border-solid border-w95-darker-grey items-center gap-4' + (props.member.email ? "hover:brightness-90" : " grayscale brightness-100")} href={props.member.email ? "mailto:"+props.member.email : ""}>
                    Contato
                    <Image
                    src="/images/email_icon.svg"
                    width={20}
                    height={20}
                    alt="Github's Logo"
                    />
                </Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <Image alt={"PET-SIMC's Photo"} src={props.member.photo ? ("data:image/jpeg;base64," + props.member.photo) : "/images/undefined_member.png"} width={300} height={300} className="aspect-square border-w95-grey border-8 border-solid"/>
                <div className="flex justify-between gap-2 flex-wrap">
                    <Link className={'bg-w95-grey border-4 border-solid border-w95-darker-grey p-2' + (props.member.github_url ? "hover:brightness-90" : " grayscale brightness-50")} href={props.member.github_url ? props.member.github_url : "https://github.com"}>
                        <Image
                        src="/images/github_logo.png"
                        width={40}
                        height={40}
                        alt="Github's Logo"
                        />
                    </Link>
                    <Link className={'bg-w95-grey border-4 border-solid border-w95-darker-grey p-2' + (props.member.linkedin_url ? "hover:brightness-90" : " grayscale brightness-50")} href={props.member.linkedin_url ? props.member.linkedin_url : "https://linkedin.com"}>
                        <Image
                        src="/images/linkedin_logo.png"
                        width={40}
                        height={40}
                        alt="Linkedin's Logo"
                        />
                    </Link>
                    <Link className={'bg-w95-grey border-4 border-solid border-w95-darker-grey p-2' + (props.member.lattes_url ? "hover:brightness-90" : " grayscale brightness-50")} href={props.member.lattes_url ? props.member.lattes_url : "https://www.lattes.cnpq.br"}>
                        <Image
                        src="/images/lattes_logo.png"
                        width={40}
                        height={40}
                        alt="Latte's Logo"
                        />
                    </Link>
                    <Link className={'bg-w95-grey border-4 border-solid border-w95-darker-grey p-2 ' + (props.member.instagram_url ? "hover:brightness-90" : "grayscale brightness-50")} href={props.member.instagram_url ? props.member.instagram_url : "https://instagram.com"}>
                        <Image
                        src="/images/instagram_logo.png"
                        width={40}
                        height={40}
                        alt="Instagram's Logo"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={props.onClickRight} className='h-60 w-12 flex justify-center items-center bg-w95-light-grey hover:bg-w95-light-grey/60 border-8 border-solid border-w95-grey'>
                    <Image 
                        src="/images/right_arrow.svg" 
                        alt="Next Member Icon"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}