const Textlanding = () => {
  return (
    <div className="w-1/2 px-16 pt-24 hidden lg:inline-block">
      <blockquote className="ml-24 -skew-y-6 text-2xl leading-10 font-semibold italic text-justify text-stone-50 w-8/12">
        <span className="font-['Lobster'] font-light">CapTer</span> is a social
        network project based on RedWoodJS (V1.0). It's goal is to get myself to
        understand the in and out of the framework. And who is "myself" you may
        ask, well I'm
        <a href="">
          <span className="group ml-2 -mr-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-teal-400 relative inline-block">
            <span className="relative text-slate-700 group-hover:text-stone-50">
              Emile-G
            </span>
          </span>
        </a>
        , a software engineer who is trying to get more towards the front-end
        end of things.
      </blockquote>
    </div>
  )
}

export default Textlanding
