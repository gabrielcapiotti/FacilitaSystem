interface ArrayType {
    taskId: string;
    taskName: string;
    taskDesc: string;
}

interface TaskType {
    taskId: string;
    taskName: string;
    taskDesc: string;
}

interface SubmissionType {
    TaskName: string;
    TaskDescription: string;
}


export type { ArrayType, TaskType, SubmissionType };