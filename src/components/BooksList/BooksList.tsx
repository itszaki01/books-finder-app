import { useEffect } from "react";
import BookItem from "../BookItem/BookItem";
import "./BooksList.scss";
import useBooks from "../../hooks/useBooks";
import { BooksApiCall } from "../../api/BooksApiCalls";
import { SpinnerCircular } from "spinners-react";

type BooksListProps = {
    searchTerm: string;
};

export default function BooksList({ searchTerm }: BooksListProps) {
    const { isSuccess, isLoading, data, isError, error } = useBooks(searchTerm);

    //Fetch Cancler
    useEffect(() => {
        return () => {
            BooksApiCall.getCleaner();
        };
    }, []);

    const booksList = data?.map((book) => <BookItem key={book.id} bookData={book} />);

    //Condetion Rendring Loader
    if (isLoading) {
        return (
            <div className="loader">
                <SpinnerCircular size={35} thickness={145} speed={145} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.46)" />
            </div>
        );
    }

    //If Error In Fetching
    if (isError) {
        return (
            <>
                <div className="books-list-is-error">
                    <h1>{`${error}`}</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="books-list-container">
                <div className="list-header">
                    {searchTerm && (
                        <h1>
                            40 Books Found About <span style={{ color: "red" }}>{searchTerm}</span>
                        </h1>
                    )}
                </div>

                {/* SHOW BOOKS LIST WHEN SECCUES */}
                <div className="list-content">{isSuccess && booksList}</div>
            </div>
        </>
    );
}
