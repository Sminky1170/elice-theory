import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { useEffect, useState } from 'react';
export default function Read(){
    const router = useRouter();
    const [topic, setTopic] = useState({title:'', body:''});
    useEffect(()=>{
        if(router.query.id !== undefined) {
            fetch('http://localhost:9999/topics/' + router.query.id)
                .then((res) => res.json())
                .then((data) => {
                    setTopic(data);
                })
        }
    },[router.query.id]);
    return <>
        <h2>{topic.title}</h2>
        {topic.body}
    </>
}