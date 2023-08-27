export type ContactFormT = {
    HeaderName: any;
    PlaceholderName: any;
    HeaderMail: any;
    PlaceholderMail: any;
    HeaderMessage: any;
    PlaceholderMessage: any;
    Submit: any;
    ModalMessageSuccess: any;
    ModalMessageFail: any;
}

export type ContactPageT = {
    Header: any;
    Content: any;
    _ContactFormT: ContactFormT;
}