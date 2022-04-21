type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="h-16 w-full bg-slate-700">
          <p className="text-4xl pl-6 pt-2 mr-5 text-stone-50 font-['Lobster']">
            CapTer
            <span className="w-3 h-3 ml-1 rounded-full inline-block border-t-2 border-l-2 border-teal-400"></span>
            <span className="w-3 h-3 -ml-1.5 rounded-full inline-block border-r-2 border-b-2 border-teal-400"></span>
          </p>
          <nav>
          </nav>
        </header>
        <main className="flex flex-grow bg-slate-600">{children}</main>
      </div>
    </>
  )
}

export default BlogLayout