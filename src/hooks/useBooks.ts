import { useQuery } from "@tanstack/react-query";
import { BooksApiCall } from "../api/BooksApiCalls";



export default function useBooks(searchTerm:string) {
    return useQuery({
        queryKey:['books',searchTerm],
        queryFn: ()=> BooksApiCall.get(searchTerm),
    })
}
