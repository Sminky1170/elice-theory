import { useRouter } from "next/router";

export default function Create(){
    const router = useRouter();
    const handler = (evt) => {
        evt.preventDefault();
        const title = evt.target.title.value;
        const body = evt.target.body.value;
        const data = {
          title: title,
          body: body,
        };
        fetch('http://localhost:9999/topics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log('Success:', result);
            const last_id = result.id;
            router.push('/read/'+last_id);
          });
      };
    return ( 
        <form onSubmit={handler}>
            <h2>Create</h2>
            <p><input type="text" name="title" placeholder='제목' /></p>
            <p><textarea name="body" placeholder="본문"></textarea></p>
            <p><input type="submit" value="Create" /></p>
        </form>
    )
}