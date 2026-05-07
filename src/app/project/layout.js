import Link from "next/link";
import "../globals.css";
export default function ProjectLayout({ children }) {
    return (
        <html>
            <body>

                <div className="flex gap-8">
                    <aside className="w-64 p-4 bg-gray-100 border border-r">
                        <h1 className="text-3xl font-bold mb-4">Important links</h1>
                        <ul>
                            <li className="py-2 px-4 bg-gray-200 mb-1 list-none"> <Link href="/project" className="hover:text-gray-300">
                                All Property
                            </Link></li>
                            <li className="py-2 px-4 bg-gray-200 mb-1 list-none">
                                <Link href="/project/add-property" className="hover:text-gray-300">
                                    Add Property
                                </Link>
                            </li>
                            <li className="py-2 px-4 bg-gray-200 mb-1 list-none"> <Link href="/project/manage-property" className="hover:text-gray-300">
                                Manage Property
                            </Link></li>
                        </ul>
                    </aside>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}