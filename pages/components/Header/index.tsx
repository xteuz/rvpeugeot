type HeaderProps = {
    children: React.ReactNode
}
const Header = ({children}:HeaderProps) => {
    return (
        <header className='bg-black h-26'>
         {children}
        </header>
    )
}
export default Header