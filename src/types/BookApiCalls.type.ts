export type BookApiCallsType = {
    kind: string;
    id: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        publishedDate: string;
        imageLinks: {
            thumbnail: string | undefined;
        };
        previewLink: string;
    };
};
