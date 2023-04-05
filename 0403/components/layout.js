import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import Container from '@mui/material/Container';
export default function Layout({children}) {
  const [topics, setTopics] = useState([]);
  const router = useRouter();
  useEffect(()=>{
    fetch('http://localhost:9999/topics')
      .then(resp=>resp.json())
      .then(result=>{
        console.log(result);
        setTopics(result);
      })
  },[router.asPath])
    const lis = topics.map((t)=>{
      return <li key={t.id}>
        <Link href={"/read/"+t.id}>{t.title}</Link>
      </li>
    });
    let contextUI = null;
    if(router.query.id !== undefined){
      contextUI = <>
        <li><Link href={`/update/${router.query.id}`}>Update</Link></li>
        <li><button onClick={evt=>{
          fetch('http://localhost:9999/topics/' + router.query.id, {
            method: 'DELETE'
          })
            .then((response) => response.json())
            .then((result) => {
              router.push('/');
            });
        }}>Delete</button></li>
      </>
    }
    return (
      <Container maxWidth="md">
        <h1><Link href="/">WEB App</Link></h1>
        <input type="text" placeholder="search" />
        <ol>
          {lis}
        </ol>
        <article>
            {children}
        </article>
        <ul>
          <li><Link href="/create">Create</Link></li>
          {contextUI}
        </ul>
      </Container>
    )
  }
  