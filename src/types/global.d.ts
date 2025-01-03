declare global {
    interface Question {
        id: number
        question: string,
        options: string[],
        answer: string
    }
    interface Topic {
        id: number,
        title: string,
        icon: string,
        questions?: Question[]
    }
    interface Quiz {
        topic: string,
        questions: Question[],
        length: number
        score: number,
        currentIndex: number
    }
    interface QuizAction {
        key: string,
        value: string
    }
    const TopicColor: { [key: string]: string } = {
        HTML: "red",
        CSS: "green",
        JavaScript: "blue",
        Accessibility: "puple",
    }
}
export { }