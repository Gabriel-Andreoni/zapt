import './style.css';

export default function Loader() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#005C84] absolute inset-0">
            <div className="w-57 h-57 bg-transparent flex items-center justify-center -rotate-45">
                <div className="flex flex-col gap-0">
                    <div className="w-15 h-15 bg-[#BDD93E] animate-loader" style={{animationDelay: "350ms"}}></div>
                    <div className="w-15 h-15 bg-[#0095DA] animate-loader" style={{animationDelay: "450ms"}}></div>
                </div>
                <div className="-mt-30">
                    <div className="w-15 h-15 bg-[#E31E24] animate-loader" style={{animationDelay: "150ms"}}></div>
                    <div className="w-15 h-15 bg-[#BDD93E] animate-loader" style={{animationDelay: "250ms"}}></div>
                </div>
            </div>
        </div>
    )
}