import Link from 'next/link'
import { useEffect,useState } from 'react'
export default function Layout({children}) {
  const [topics, setTopics] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:9999/topics')
      .then(resp=>resp.json())
      .then(result=>{
        console.log(result);
        setTopics(result);
      })
  },[])
    const lis = topics.map((t)=>{
      return <li key={t.id}>
        <Link href={"/read/"+t.id}>{t.title}</Link>
      </li>
    });
    return (
      <>
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
          <li><Link href="/update">Update</Link></li>
          <li><Link href="/delete">Delete</Link></li>
        </ul>
      </>
    )
  }
  