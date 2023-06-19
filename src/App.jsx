import { Hero, Content, Footer } from "./components"
const App = () => {
  return (
    <div className="flex flex-col justify-between  w-screen h-screen items-center px-8 py-2">
      <div
        className="w-full max-w-[320px] mt-10 bg-primary pb-12 md:pb-0 rounded-md overflow-hidden md:flex md:max-w-[1020px]
      md:flex-row-reverse items-center md:min-h-[420px]  md:mt-32"
      >
        <Hero />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
export default App
