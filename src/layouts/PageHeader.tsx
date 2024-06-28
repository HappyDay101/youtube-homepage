import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/Button";
import logo from "../assets/logo.png";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {/* Left side of header */}
      <div className="flex gap-4 items-center	flex-shrink-0">
        <Button variant="ghost" size="icon" className="m-10">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="Logo" className="h-6" />
        </a>
      </div>

      {/* mid-section of header */}
      <form className="md:flex hidden gap-4 flex-grow justify-center items-center">
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0" flex-shrink-0>
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      {/* Right Side of header */}
      <div className="flex flex-shrink-0 md:gap-2 items-center">
        <Button size="icon" variant="ghost" className="md:hidden">
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
