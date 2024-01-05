'use client';

import { contactText } from "@/app/assets/texts";
import { Aside } from "@/app/components/aside";
import { BreakWindow } from "@/app/components/break_window";
import { FolderButtonProps } from "@/app/components/folder_button";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { InfoContainer } from "@/app/components/info_container";
import { NavBar } from "@/app/components/nav_bar";
import { Window } from "@/app/components/window";
import { postData } from "@/app/helpers/postData";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

const folderButtons: FolderButtonProps[] = [
  {
    name: "info-text",
    title: "Contato",
    id: "contact",
    text: contactText,
    icon: {
      src: "/images/folder_yellow_file.png",
      alt: "Contact Icon",
      width: 75,
      height: 75
    },
  }
];

const messageSchema = z.object({
  name: z.string({ required_error: "A mensagem precisa conter um nome." }).min(1, "Nome não pode ser vazio."),
  email: z.string({ required_error: "A mensagem precisa conter um email." }).min(1, "Email não pode ser vazio.").email("Por favor, insira um e-mail valido."),
  content: z.string({ required_error: "A mensagem precisa conter um texto." }).min(1, "Mensagem não pode ser vazia."),
})

const Contact = () => {
  const mutation = useMutation({
    mutationFn: (data : FieldValues) => postData("/message", data)
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: zodResolver(messageSchema) });

  const onSubmit = async (data: FieldValues) => {
    await mutation.mutateAsync(data);
  }

  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-10 lg:px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />

          <div className='z-10 flex justify-center'>
            <Window>
              <InfoContainer content={folderButtons} custom='w-1/2 p-2' />
            </Window>
          </div>

          <BreakWindow />

          <div className='z-10 flex justify-center'>
            <Window>
              <div className='flex flex-col p-8 justify-between gap-8'>
                <h1 className='font-ps2p text-2xl max-w-lg'>Entrar em Contato</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col font-ps2p gap-4">
                  <div className="flex gap-8">
                    <label className="flex flex-col gap-2 w-1/3">Nome:
                      <input
                        className="bg-w95-light-grey p-1 border-4 border-w95-grey dark:bg-stone-950/10 dark:text-white/70 dark:backdrop-blur-lg"
                        {...register("name")}
                      />
                      {errors.name && <p className="text-xs text-red-900">{`${errors.name.message}`}</p>}
                    </label>
                    <label className="flex flex-col gap-2 grow">Email:
                      <input
                        className="bg-w95-light-grey p-1 border-4 border-w95-grey dark:bg-stone-950/10 dark:text-white/70 dark:backdrop-blur-lg"
                        {...register("email")}
                      />
                      {errors.email && <p className="text-xs text-red-900">{`${errors.email.message}`}</p>}
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">Mensagem:
                    <textarea
                      className="resize-none h-80 bg-w95-light-grey border-4 border-w95-grey dark:bg-stone-950/10 dark:text-white/70 dark:backdrop-blur-lg"
                      {...register("content")}
                      />
                      {(mutation.isError && (mutation.error instanceof AxiosError)) && <p className="text-xs text-red-900">Erro: {mutation.error.message}</p>}
                      {(mutation.isSuccess) && <p className="text-xs text-green-900">Sucesso - Mensagem Enviada!</p>}
                    {errors.content && <p className="text-xs text-red-900">{`${errors.content.message}`}</p>}
                  </label>
                  <div className="flex gap-2 items-center w-full justify-center">
                    <input type="submit" disabled={isSubmitting} className="dark:bg-stone-950/10 dark:text-white dark:backdrop-blur-lg bg-w95-light-grey border-4 border-w95-grey text-black text-lg hover:cursor-pointer p-4 px-20 disabled:opacity-20" />
                    <button className="bg-w95-light-grey text-black flex items-center p-3 border-4 border-w95-grey shadow dark:bg-stone-950/10 dark:backdrop-blur-lg" onClick={() => reset()}>
                      <div className="p-2 hover:cursor-pointer relative">
                        <Image
                          src="/images/trash_can.svg"
                          alt="Trash can Icon"
                          fill
                          className="dark:invert"
                        />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </Window>
          </div>


        </div>
        <Aside />
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Contact;
