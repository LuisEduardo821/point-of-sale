import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function PosLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="bg-slate-100 min-h-full w-full my-2 mx-2 p-2 rounded-md shadow-md border">
        <SidebarTrigger />
        <div className="">{children}</div>
      </main>
    </SidebarProvider>
  );
}
