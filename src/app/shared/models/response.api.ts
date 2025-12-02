export interface DataTransferObject {
    [key: string]: any;
}

export interface ResponseApi<data = DataTransferObject> {
    success?: boolean;      // Para compatibilidade com respostas antigas
    sucesso?: boolean;      // Nome real da propriedade na API
    message?: string;       // Para compatibilidade com respostas antigas
    mensagem?: string;      // Nome real da propriedade na API
    data?: data | undefined;
    exceptionMessage?: string;
    excecaoMensagem?: string;  // Nome real da propriedade na API
}