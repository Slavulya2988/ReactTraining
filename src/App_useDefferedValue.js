// useDeferredValue - принимает в себя какое-то значение, которое потом будем немного отложено изменять
// т.е. снчала срочние рендери і апдейти і только потом етот
import data from './data';
import {useState, useMemo, useDeferredValue} from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const defferdValue = useDeferredValue(text);// отложенно значение по которому будем фльтровать і розедіняет рендери для большей оптимизації

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(defferdValue));
    }, [defferdValue]);

    const onValueChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
