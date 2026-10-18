import bannerSvg from "../assets/404-notfound.svg";

export function Notfound() {
    return (
        <div className="flex min-h-screen w-full  items-center justify-center p-8 overflow-hidden">

            <img 
                src={bannerSvg} 
                alt="Authentication illustration" 
                className="max-w-full max-h-[85vh] object-contain"
            />
        </div>
    );
}