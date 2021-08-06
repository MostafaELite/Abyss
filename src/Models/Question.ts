import { User } from "./User";

export interface Question {
    title: string;
    content: string;
    hasAcceptedAnswer: boolean;
    createdOn: Date;
    createdBy: User;


}