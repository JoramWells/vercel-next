import { GlobeIcon } from "@heroicons/react/solid";

export default function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-800 text-sm text-gray-500">
            <div className="px-8 py-3">
                <p>Joram Wells</p>
            </div>
            <div className="grid grid-cols-1">
                <div className="flex justify-center items-center md:col-span-2">
                    <GlobeIcon className="h-5 mr-1 text-green-700"/> Carbon neutral since 2007
                </div>
                <div className="flex justify-center space-x-4 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>
                <div className="flex justify-center space-x-4 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}
