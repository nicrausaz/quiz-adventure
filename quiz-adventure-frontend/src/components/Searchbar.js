import {Input} from "@chakra-ui/react"
import { useState } from "react"

const SearchBar = () => {
   const [search, setSearch] = useState('')
   return (
      <>
      <Input placeholder="Rechercher un thème..." size="lg" onChange={event => setSearch(event.target.value)} />
      {search}
      </>
   )
}

export default SearchBar