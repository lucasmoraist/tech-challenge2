interface IPost {
    title: string;
    createdAt: Date;
}

export interface ITeacher {
    id: number;
    name: string;
    school_subject: string;
    posts: IPost[];
}