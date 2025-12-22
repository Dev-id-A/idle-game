export type ReactStateNumber = React.Dispatch<React.SetStateAction<number>>

export interface SendMailsStates{
    mailsSended: number,
    setMailsSended: ReactStateNumber
}