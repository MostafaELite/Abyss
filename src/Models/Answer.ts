import { User } from "./User";

export interface Answer {
    id: string;
    questionId: string;
    content: string;
    NumberOfLikes: number;
    NumberOfDislikes: number;
    isAcceptedAnswer: boolean;
    createdOn: Date;
    createdBy: User;
}