import React from "react";


const quizReducer = (data: Topic[], action: QuizAction): Topic[] => {
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

export const AppContext = React.createContext({ quiz: {} as Topic[], setQuiz: (() => { }) as Dispatch<QuizAction> })

const AppProvider: React.FC<AppProviderProps> = ({ children }): React.JSX.Element => {
    const topicData = React.useRef<Topic[]>({} as Topic[]);

    React.useEffect(() => {
        fetch(`${BASE_API}topics`).then(response => {
            if (!response.ok) return false
            return response.json()
        }).then((data: Topic[]) => { topicData.current = data })
    }, [])
    const [quiz, setQuiz] = React.useReducer(quizReducer, topicData.current ?? {} as Topic[])

    if (!topicData.current) return <p>Loading...</p>

    return <AppContext.Provider value={{ quiz, setQuiz }}>{children}</AppContext.Provider>
}
export default AppProvider