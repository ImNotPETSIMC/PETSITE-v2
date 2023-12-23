import { Window } from "../window"
import { NavItem, NavItemProps } from "../nav_item"

export const NavBar = () => {
    const NavItems : NavItemProps[] = [ 
        {
            url: "/",
            name: "Home",
            icon: {
                src: "/images/home_icon.png",
                alt: "Home Icon",
                width: 24,
                height: 24
            }
        },
        {
            url: "/pages/news",
            name: "Notícias",
            icon: {
                src: "/images/news_icon.png",
                alt: "News Icon",
                width: 24,
                height: 24
            }
        },
        {
            url: "/pages/projects",
            name: "Projetos",
            icon: {
                src: "/images/projects_icon.png",
                alt: "Projects Icon",
                width: 24,
                height: 24
            }
        },
        {
            url: "/pages/members",
            name: "Membros",
            icon: {
                src: "/images/members_icon.png",
                alt: "Members Icon",
                width: 24,
                height: 24
            }
        },
        {
            url: "/pages/history",
            name: "História",
            icon: {
                src: "/images/history_icon.png",
                alt: "History Icon",
                width: 24,
                height: 24
            }
        },
        {
            url: "/pages/about",
            name: "Sobre",
            icon: {
                src: "/images/about_icon.png",
                alt: "About Icon",
                width: 24,
                height: 24
            }
        },
        {
            url: "/pages/contact",
            name: "Contato",
            icon: {
                src: "/images/contact_icon.png",
                alt: "Contact Icon",
                width: 24,
                height: 24
            }
        }
    ]
    
    return (
        <>
            <Window>
                <nav className='p-2 flex flex-col gap-2'>
                    {NavItems.map((element : NavItemProps) => { return <NavItem key={element.url} {...element} />})}
                </nav>
            </Window>
        </>
    )

}