const Content = () => {
  return (
    <main className="text-center p-8 flex flex-col gap-y-4 text-[13px] md:w-[50%] md:text-left md:p-10 lg:p-14 md:gap-y-12">
      <h2 className="text-2xl font-bold leading-7 text-white lg:text-3xl font-lexend">
        Get <span className="text-accent">insights</span> that help{" "}
        <br className="hidden md:block" />
        your business grow.
      </h2>
      <p className="tracking-wider text-[13px] text-neutral/[0.75] md:max-w-[350px]">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-6">
        <p className="flex flex-col">
          <span className="stat">10k+</span>
          COMPANIES
        </p>
        <p className="flex flex-col">
          <span className="stat">314</span>
          TEMPLATES
        </p>
        <p className="flex flex-col">
          <span className="stat">12M+</span>
          QUERIES
        </p>
      </div>
    </main>
  )
}
export default Content
