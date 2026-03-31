export default function HeroIllustration() {
return (
<div className="relative flex items-center justify-center">

{/* Glow */}  
  <div className="absolute w-[520px] h-[520px] bg-cyan-500/20 blur-3xl rounded-full" />  

  {/* Center Logo */}  
  <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-white shadow-2xl border-4 border-cyan-400/30">  
    <img  
      src="images/Logo.png"  
      alt="HireNest Workforce"  
      className="w-12 h-12 object-contain"  
    />  
  </div>  

  {/* Nodes */}  
  <div className="absolute w-[420px] h-[420px] rounded-full border border-cyan-400/20">  

    {/* Node 1 */}  
    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-sm font-medium px-4 py-24 lg:py-36 rounded-full shadow">  
      Global Talent  
    </div>  

    {/* Node 2 */}  
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-sm font-medium px-4 py-24 lg:py-36 rounded-full shadow">  
      Contract Hiring  
    </div>  

    {/* Node 3 */}  
    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-sm font-medium px-4 py-24 lg:py-36 rounded-full shadow">  
      IT Staffing  
    </div>  

    {/* Node 4 */}  
    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-sm font-medium px-4 py-24 lg:py-36 rounded-full shadow">  
      AI & Data  
    </div>  

  </div>  

</div>

);
}
