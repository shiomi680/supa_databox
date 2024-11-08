import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";

type SidebarProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
  title: string;
};

export const SidebarComponent = ({ children, footer, title }: SidebarProps) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h1>{title}</h1>
        </SidebarHeader>
        <SidebarContent>{children}</SidebarContent>
        <SidebarFooter>{footer}</SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};
