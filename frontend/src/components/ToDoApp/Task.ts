export interface Task {
    taskDescription: string,
    materialityOfTask?: MaterialityCategory,
    location?: string,
    date: Date,
}

export enum MaterialityCategory {
    important,
    standard,
    minor,
}