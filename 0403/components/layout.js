export default function Layout({children}) {
    return (
      <>
        <h1><a href="/">WEB App</a></h1>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
        <article>
            {children}
        </article>
        <ul>
          <li><a href="/create">Create</a></li>
          <li><a href="/update">Update</a></li>
          <li><a href="/delete">Delete</a></li>
        </ul>
      </>
    )
  }
  