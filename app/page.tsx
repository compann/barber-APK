import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div> {/*Header*/}
      <Header />
      <div className="p-5">
      <h2 className="text-xl font-bold  ">Olá, Felipe</h2>
      <p> Segunda-feira, 05  de agosto. </p>

      <div className="flex items-center gap-2 mt-2">
        <Input placeholder="faça sua busca..."></Input>
        <Button size="icon">
          <SearchIcon />
        </Button>
      </div>

      <div className="relative w-full h-[150px]">
          <Image alt="agende com os melhores" src="/banner-01.png" fill className="object-cover  " />
      </div>
      </div>
    </div>
  )
}

export default Home