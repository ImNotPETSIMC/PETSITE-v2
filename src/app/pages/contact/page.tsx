'use client';

import { Aside } from "@/app/components/aside";
import { BreakWindow } from "@/app/components/break_window";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { NavBar } from "@/app/components/nav_bar";

const Contact = () => {
  return (
    <>
      <main className="font-monda pb-10 gap-4 flex flex-col lg:flex-row px-2 items-center lg:items-start justify-between grow">
        <NavBar />
        <div className='flex flex-wrap flex-col gap-4 justify-center'>
          <Header />
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
