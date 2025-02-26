import { Protect } from "@clerk/nextjs";

export default function ManagerLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Protect
            condition={(has) => has({ role: 'org:manager' }) || has({ role: 'org:member' })}
            fallback={<p>Only a manager or admin can view this page</p>}
        >
            Manager layout
            {children}
        </Protect>
    )
}