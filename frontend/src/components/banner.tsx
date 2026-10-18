import bannerSvg from "../assets/login-banner.svg";

export function Banner() {
    return (
        <div className="hidden md:flex md:w-1/2 bg-slate-100 items-center justify-center p-8 overflow-hidden">
            <img 
                src={bannerSvg} 
                alt="Authentication illustration" 
                className="max-w-full max-h-[85vh] object-contain drop-shadow-md"
            />
        </div>
    );
}