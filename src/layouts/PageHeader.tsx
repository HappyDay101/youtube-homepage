import { Bell, Menu, Upload, User } from "lucide-react";
import { Button } from "../components/Button";
import logo from "../assets/logo.png";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center	flex-shrink-0">
        <Button variant="ghost" size="icon" className="m-10">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="Logo" className="h-6" />
        </a>
      </div>
      <div></div>
      <div>
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
