import { useState } from "react";
import post from "../assets/img/post.svg"
import avatar from "../assets/img/avatar.svg"

const KEYS = ["avatar", "time", "image", "username", "content"];

const postsData = [
    {
        id: "id-01",
        avatar: avatar,
        time: "2 hours ago",
        image: post,
        username: "Elsa",
        content: "The weather is so nice!",
    },
    {
        id: "id-02",
        avatar: avatar,
        time: "3 hours ago",
        image: post,
        username: "Elsa",
        content: "The weather is so nice!",
    },
    {
        id: "id-03",
        avatar: avatar,
        time: "4 hours ago",
        image: post,
        username: "Elsa",
        content: "The weather is so nice!",
    },
];

const usePost = () => {
    const [posts, setPosts] = useState(postsData);

const create = (data) => {
    if (typeof data != "object") {
        alert("data is not corrected");
        return;
    }
    for (const key of KEYS) {
        if (!(key in data)) {
            alert(`Missing field ${key}`);
            return;
        }
    }

    setPosts((prev) => [...prev, data]);
}

const get = () => {
    return posts;
};

const update = (data) => {
    const updatedData = posts.map((item) => {
        if (item.id === data.id) {
            return data;
        }
        return item;
    });

    setPosts(updatedData);
};

const remove = (id) => {
    const updatedData = posts.filter((item) => item.id !== id)
    setPosts(updatedData);
}
return { create, update, get, remove };
};

export default usePost;