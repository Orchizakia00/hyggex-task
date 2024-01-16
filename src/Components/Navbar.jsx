import logo from '../assets/Component 40.png'

const Navbar = () => {
    const bgStyle = {
        background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
    };

    const navItems = <div className='flex items-center'>
        <li><a>Home</a></li>
        <li><a>Flashcard</a></li>
        <li><a>Contact</a></li>
        <li><a>FAQ</a></li>
        <a className='btn text-white rounded-full px-8' style={bgStyle}>Login</a>
    </div>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;