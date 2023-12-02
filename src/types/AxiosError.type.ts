export type AxiosErrorType = {
    message:string,
    response: {
        data: {
            error: {
                message: string;
            };
        };
    };
};
