import Link from "next/link"

const Header = () => {
  return (
    
        <header className="bg-[#C1FF72]">
            <nav className="grid grid-cols-4 p-6 lg:px-8">
            <div className="logo">
                <Link href='/'>Dish Discovery</Link>
            </div>
            <div className="col-span-2 justify-self-center space-x-4">
                <Link href='/recipes' className="hover:bg-lime-200 hover:text-white rounded-md px-3 py-2 font-medium">Recipes</Link>
                <Link href='/contact' className="hover:bg-lime-200  hover:text-white rounded-md px-3 py-2 font-medium">Contact</Link>
            </div>
            </nav>
        </header>
    
  )
}

export default Header