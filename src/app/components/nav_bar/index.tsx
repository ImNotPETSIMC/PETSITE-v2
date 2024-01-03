import { Window } from "../window"
import { NavItem, NavItemProps } from "../nav_item"

export const NavBar = () => {
    const NavItems : NavItemProps[] = [ 
        {
            url: "/",
            name: "Home",
            icon: {
                src: "/images/home_icon.png",
                alt: "Home Icon"
            }
        },
        {
            url: "/pages/news",
            name: "Notícias",
            icon: {
                src: "/images/news_icon.png",
                alt: "News Icon"
            }
        },
        {
            url: "/pages/projects",
            name: "Projetos",
            icon: {
                src: "/images/projects_icon.png",
                alt: "Projects Icon"
            }
        },
        {
            url: "/pages/members",
            name: "Membros",
            icon: {
                src: "/images/members_icon.png",
                alt: "Members Icon"
            }
        },
        {
            url: "/pages/history",
            name: "História",
            icon: {
                src: "/images/history_icon.png",
                alt: "History Icon"
            }
        },
        {
            url: "/pages/about",
            name: "Sobre",
            icon: {
                src: "/images/about_icon.png",
                alt: "About Icon"
            }
        },
        {
            url: "/pages/contact",
            name: "Contato",
            icon: {
                src: "/images/contact_icon.png",
                alt: "Contact Icon"
            }
        }
    ]
    
    return (
        <div className="sticky lg:top-4 z-10 h-fit flex justify-center p-2">
            <Window>
                <nav className='flex lg:flex-col gap-2 p-2'>
                    {NavItems.map((element : NavItemProps) => { return <NavItem key={element.url} {...element} />})}
                </nav>
            </Window>
        </div>
    )

}