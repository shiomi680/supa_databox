import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarTrigger,
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
        <SidebarGroup>
          <SidebarHeader>
            <h1>{title}</h1>
          </SidebarHeader>
          <SidebarContent>{children}</SidebarContent>
          <SidebarFooter>{footer}</SidebarFooter>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  );
};
