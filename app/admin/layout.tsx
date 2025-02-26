import { Protect } from "@clerk/nextjs";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Protect
            role="org:admin"
            fallback={<p>Only a admin can view this page</p>}
        >
            Admin layout
            {children}
        </Protect>
    )
}