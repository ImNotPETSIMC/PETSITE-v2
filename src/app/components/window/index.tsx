import Image from 'next/image';

export const Window = () => {

    return (
        <>
            <div className="border-w95-grey border-2 border-solid w-fit">
                <div className="border-w95-grey border-b-2 border-solid w-full h-6 bg-[#593CFA] flex items-center justify-end gap-2 pl-10 pr-1">
                    <div className="flex items-center bg-w95-grey h-fit w-fit p-0.5">
                        <div className="border-b border-solid border-black h-3 w-3"></div>
                    </div>
                    <div className="flex items-center bg-w95-grey h-fit w-fit p-0.5">
                        <div className="border border-solid border-black h-3 w-3"></div>
                    </div>
                    <div className="bg-w95-grey h-4 w-4 flex items-center p-0.5">
                        <img src="/images/x_icon.svg" alt="X" />
                    </div>
                </div>
                <div className="bg-white">
                    content
                </div>
            </div>
        </>
    )
}