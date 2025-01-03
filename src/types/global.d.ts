declare global {
    interface Question {
        question: string,
        options: string[],
        answer: string
    }
    interface Topic {
        title: string,
        icon: string,
        questions?: Question[]
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
    const BASE_API = "https://9a625ec4-7011-41d9-9b74-d307758a8988.mock.pstmn.io/"
}
export { }