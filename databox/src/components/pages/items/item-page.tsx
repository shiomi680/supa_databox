import { styled } from "@stitches/react"; // Adjusted import for Shadcn
import { Drawer as ShadcnDrawer } from "shadcn-ui"; // Import Shadcn Drawer
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Drawer = styled(ShadcnDrawer, {
  // Add your custom styles here
});

export function MenuBar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer open={open} onClose={toggleDrawer}>
      {/* Add your toolbar and other components here */}
      <Button onClick={toggleDrawer}>Toggle Drawer</Button>
      {children}
    </Drawer>
  );
}
