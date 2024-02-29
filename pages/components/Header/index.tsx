type HeaderProps = {
    children: React.ReactNode
}
const Header = ({children}:HeaderProps) => {
    return (
        <header className='bg-gradient-to-r from-black to-slate-950 h-26'>
         {children}
        </header>
    )
}
export default Header