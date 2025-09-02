function Footer(){
    return(
        <footer className="  border-t border-white/5 bg-[#24231D]">
            <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p>@ {new Date().getFullYear()} ShambaSpice</p>
                <p className="opacity-80">The future of farming</p>
            </div>
        </footer>
    )


}
export default Footer;