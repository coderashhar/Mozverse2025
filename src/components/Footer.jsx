import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="py-4 border-t md:px-0 px-3 bg-black/50 backdrop-blur-lg border-neutral-700/80">
            <p className="text-center text-gray-600 font-medium">
                © 2025 Mozilla Firefox Club. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
                <span className="text-red-500 hover:text-red-700">Contact Us</span>
            </div>
            <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                <span>Faculty Coordinators:</span>
                <span className="hover:text-red-500">Dr. Balaji A. </span>
                <span className="hover:text-red-500">Dr. Suresh Dara</span>
            </div>
            <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                <span>Student Coordinators:</span>
                <span className="hover:text-sky-500">Ankit: 9305441865</span>
                <span className="hover:text-pink-500">Shreya Raj Gupta: 8889345211</span>
                <span className="hover:text-sky-500">Ayush Monga: 9755544336</span>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://www.instagram.com/mozillafirefox.vitbhopal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                    <FaInstagram size={24} />
                </a>
                <a
                    href="https://x.com/MFCVITB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-white flex items-center"
                >
                    <svg
                        className="w-5 h-5 align-middle"
                        viewBox="0 0 1200 1227"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                    >
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/mozilla-firefox-club-vit-bhopal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
}