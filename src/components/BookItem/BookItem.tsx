import "./BookItem.scss";
import { BookApiCallsType } from "../../types/BookApiCalls.type";
import erroNoBookCover from '/src/assets/Book_Cover_NotAvailable.png'
type BookItemProps = {
    bookData: BookApiCallsType;
};
export default function BookItem({ bookData }: BookItemProps) {

  //handleImageClick
  function handleImageClick(){
    window.open(bookData.volumeInfo.previewLink, '_blank')
  }  

    return (
        <>
            <div className="book-item-container">
                <img src={bookData.volumeInfo.imageLinks?.thumbnail || erroNoBookCover} alt={bookData.volumeInfo.title} onClick={handleImageClick}/>
            </div>
        </>
    );
}
