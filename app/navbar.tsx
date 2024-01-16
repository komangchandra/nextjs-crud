import Link from "next/link";
// import { useRouter } from "next/router";

const Navbar = () => {
  // const router = useRouter();

  return (
    <header className="sticky top-0 z-10 flex w-full items-center py-7 bg-gray-950">
      <div className="container w-9/12 mx-auto flex flex-row">
        <div className="uppercase text-lg basis-1/4">
          <Link href="/" className="font-extrabold">
            <span className="font-light">CRUD</span> next
            <span className="text-sm font-normal">.js</span>
          </Link>
        </div>
        <div className="lg:flex items-center justify-evenly basis-2/3 uppercase md:block ms-auto">
          <Link href="/" className="hover:text-white">
            home
          </Link>
          <Link href="/categories" className="hover:text-white">
            categories
          </Link>
          <Link href="/products" className="hover:text-white">
            products
          </Link>
          <Link href="/about" className="hover:text-white">
            about page
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
