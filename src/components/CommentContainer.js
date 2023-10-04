import React from 'react';

const commentsData = [
    {
        name: "PP",
        text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
        replies: [
            
        ]
    },
    {
        name: "PP",
        text: "This song is soo cool",
        replies: [
            {
                name: "PP",
                text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                replies: [
                    {
                        name: "PP",
                        text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                        replies: [
                            {
                                name: "PP",
                                text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                                replies: [
                                    {
                                        name: "PP",
                                        text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: "PP",
                text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                replies: []
            },
            {
                name: "PP",
                text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                replies: []
            },
        ]
    },
    {
        name: "PP",
        text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
        replies: [
            {
                name: "PP",
                text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
                replies: []
            },
        ]
    },
    {
        name: "KP",
        text: "OOPS this voideo is out so soon . I am just amazed to see that.",
        replies: []
    },
    {
        name: "PP",
        text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
        replies: []
    },
    {
        name: "PP",
        text: "Lorem Ipsum is this what you want to do. i am hrrexcvbn sdfghjrtyhj sdfghj",
        replies: []
    }
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 mt-2   p-1 rounded-lg'>
            <img className='w-8 h-8 mt-2' alt="user"
                src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" />
            <div className='ml-2 px-3'>
                <p className='font-bold'>@{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment,index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-8 ml-5  border border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ));
};

const CommentContainer = () => {
    return (
        <div className='m-2 p-5'>
            <h1 className='text-xl font-bold'> Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentContainer