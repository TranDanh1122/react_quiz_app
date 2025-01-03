import React from "react";
const quizReducer = (data: Quiz, action: QuizAction): Quiz => {
    switch (action.key) {
        case "topicCLick": return data;
        case "answerCLick": return data;
        default: return data;
    }
}
interface AppProviderProps {
    children: React.ReactNode
}
import { Dispatch } from "react";

export const AppContext = React.createContext({ quiz: {} as Quiz, setQuiz: (() => { }) as Dispatch<QuizAction> })

const AppProvider: React.FC<AppProviderProps> = ({ children }): React.JSX.Element => {
    const [quiz, setQuiz] = React.useReducer(quizReducer, {} as Quiz)

    if (!quiz) return <p>Loading...</p>

    return <AppContext.Provider value={{ quiz, setQuiz }}>{children}</AppContext.Provider>
}
export default AppProvider