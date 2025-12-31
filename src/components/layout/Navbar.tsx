import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
export const Navbar = () => {
    return (
        <header className="h-16.25 w-full bg-[#1E1B4D] px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-8 w-auto brightness-0 invert"/>
            </div>
                <button type="button" className='flex items-center justify-center w-9 h-9 '>
                    <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-full"/>
                </button>
        </header>
    )
}