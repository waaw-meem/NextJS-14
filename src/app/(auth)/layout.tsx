'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"


const NavLink = [
    {name:'register',href:'/register'},
    {name:'login',href:'/login'},
    {name:'forgot password',href:'/forgotpassword'},
]
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const pathName = usePathname()
    return (
     <div>
            {NavLink.map((link)=>{
            const isActivePath = pathName.startsWith(link.href)
                return (
                    <Link 
                    href={link.href} 
                    key={link.name} className={isActivePath ? 'active-link' : ''}>
                        {link.name}</Link>
                )
            })}
  </div>
    )
  }
  