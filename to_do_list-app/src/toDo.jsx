import React, { useEffect, useState } from 'react';
import todoimg from './Components/images/todoimg.png'
import ToDoForm from './Components/toDoForm';
import './Components/toDo.css';
import ToDoList from './Components/toDoList';

function ToDo() {
    const [currenttime, setCurrentTime] = useState('')
    useEffect(() => {
        const intervalId = setInterval(() => {
            let plus = 3; // Сколько времени прибавляем (+3 это время по Москве)
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/Moscow', false); // Делаем запрос по Лондону
            xhr.send(); // отправляем
            if (xhr.status !== 200) {
                console.log(xhr.status + ': ' + xhr.statusText); // Если статус не равен 200, то выводим ошибку.
            } else {
                let time = xhr.responseText;
                let z = JSON.parse(time).utc_datetime;
                let time1 = new Date(z).getTime();
                let timestampPlus = time1 + (3 * 60 * 60 * 1000);
                let timePlus = new Date(timestampPlus);
                let result = timePlus.toUTCString();
                let hours = timePlus.getHours();
                let minutes = timePlus.getMinutes();
                let ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12;
                let timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
                setCurrentTime(timeString);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const [posts, setPosts] = useState([
    ])
    function createPost(newPost) {
        if (newPost.title === '') {
            alert('Enter note text')
        } else {
            setPosts([...posts, newPost])
        }

    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <section className="todo__container">
            <h1 className='todo__title'>todo</h1>
            <section className="todo__content">
                <div className="todo__date_container">
                    <img src={todoimg} alt="" className="todo__img" />
                    <div className="todo__datatime_container">
                        <p className="todo__date">Thur 9</p>
                        <h1 className="todo__time">{currenttime}</h1>
                    </div>
                </div>
                <div className="todo__components">
                    <ToDoForm create={createPost} />
                    <ToDoList remove={removePost} posts={posts} />
                </div>
            </section>
        </section>
    );
}

export default ToDo;