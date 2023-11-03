// useTransition - принимает в себя какое-то значение, которое потом будем немного отложено изменять
// т.е. снчала срочние рендери і апдейти і только потом етот
import data from './data';
import {useState, useMemo, useTransition} from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const [isPending, startTransition] = useTransition();
// isPending - позволяет отслеживть состояние єтого перехода,
// когда не время отрисоввивать, возвращает true

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text]);

    const onValueChange = (e) => {
        startTransition(() => {
            setText(e.target.value);
        })

    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
               {isPending ? <h4>Loading...</h4> :
               filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
