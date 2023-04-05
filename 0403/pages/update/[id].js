import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
export default function Update(){
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    useEffect(()=>{
        if(router.query.id !== undefined) {
            fetch('http://localhost:9999/topics/' + router.query.id)
                .then((res) => res.json())
                .then((data) => {
                    setTitle(data.title);
                    setBody(data.body);
                })
        }
    },[router.query.id]);
    const handler = (evt) => {
        evt.preventDefault();
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        const data = {
          title: title,
          body: body,
        };
        fetch('http://localhost:9999/topics/'+router.query.id, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            const last_id = result.id;
            router.push('/read/'+last_id);
          });
      };
    return ( 
        <form onSubmit={handler}>
            <h2>Update</h2>
            
            <p><input type="text" name="title" placeholder='제목' value={title} onChange={(evt)=>{
                setTitle(evt.target.value);
            }}/></p>

            <p><textarea name="body" placeholder="본문" value={body} onChange={evt=>{
                setBody(evt.target.value);
            }}></textarea></p>
            
            <p><input type="submit" value="Update" /></p>
        </form>
    )
}