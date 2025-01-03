import React from "react";
interface TopicProps {
    topic: Topic
}

const Topic: React.FC<TopicProps> = ({ topic }): React.JSX.Element => {

    return (
        <div className="bg-white flex flex-nowrap justify-start items-center gap-8">
            <span className={`p-3 bg-${TopicColor[topic.title]}/25`}>
                <i className={`block w-8 h-6 bg-${TopicColor[topic.title]}`} style={{ mask: `url(${topic.icon}) center / cover no-repeat`, WebkitMask: `url(${topic.icon}) center / cover no-repeat` }}></i>
            </span>
            <h2 className="text-heads">{topic.title}</h2>
        </div>
    )
}
export default Topic