import { AxiosErrorType } from "../types/AxiosError.type";
import { BookApiCallsType } from "../types/BookApiCalls.type";
import axios, { Canceler } from "axios";
interface IBooksApiCalls {
    get(searchTerm: string): Promise<BookApiCallsType[]>;
    getCleaner: Canceler;
}

class BooksApiCalls implements IBooksApiCalls {
    getCleaner: Canceler = () => {};
    async get(searchTerm: string): Promise<BookApiCallsType[]> {
        if(!searchTerm) throw Error('No Search Term Value')
        try {
            const { data } = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&maxResults=40&startIndex=0&orderBy=relevance&key=
                ${import.meta.env.VITE_GOOGLE_BOOKS_API}`,
                {
                    cancelToken: new axios.CancelToken((c) => (this.getCleaner = c)),
                }
            );
            return data.items;
        } catch (error) {
            const _error = error as AxiosErrorType;
            throw Error(_error.response?.data.error.message || _error.message );
        }
    }
}
export const BooksApiCall = new BooksApiCalls();
