import { Plus } from "lucide-react";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const NavBar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button variant="primary" size="sm" className="rounded-sm">
          <span className="hidden md:block h-auto px2 py-1.5">Create</span>
          <Plus className="block md:hidden h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
        hidePersonal
        afterCreateOrganizationUrl="/organization/:id"
        afterLeaveOrganizationUrl="/select-org"
        afterSelectOrganizationUrl="/organization/:id"
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          }
        }}
        />
        <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: {
              height: 30,
              width: 30,
            }
          }
        }}
        />
      </div>
    </nav>
  );
};



