import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Update() {
  const router = useRouter(); // 1. useRouter 훅을 사용하여 Next.js 라우터 객체를 가져옵니다.

  const [title, setTitle] = useState(''); // 2. useState를 사용하여 title 상태를 관리합니다.
  const [body, setBody] = useState(''); // 3. useState를 사용하여 body 상태를 관리합니다.

  // 4. useEffect를 사용하여 컴포넌트가 마운트되거나 router.query.id가 변경될 때마다 실행되는 코드를 정의합니다.
  useEffect(() => {
    if (router.query.id !== undefined) {
      // 5. id 값이 undefined가 아닐 때만 API 호출을 수행합니다.
      fetch('http://localhost:9999/topics/' + router.query.id)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title); // 6. 응답으로 받은 title 값을 title 상태에 저장합니다.
          setBody(data.body); // 7. 응답으로 받은 body 값을 body 상태에 저장합니다.
        });
    }
  }, [router.query.id]);

  // 8. 폼 제출 핸들러 함수를 정의합니다.
  const handler = (evt) => {
    evt.preventDefault(); // 9. 폼 제출 이벤트의 기본 동작인 페이지 리로드를 막습니다.

    const title = evt.target.title.value; // 10. 폼에서 입력된 title 값을 가져옵니다.
    const body = evt.target.body.value; // 11. 폼에서 입력된 body 값을 가져옵니다.

    const data = {
      title: title,
      body: body,
    };

    // 12. 입력된 데이터를 사용하여 서버에 PATCH 요청을 보냅니다.
    fetch('http://localhost:9999/topics/' + router.query.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        const last_id = result.id;
        router.push('/read/' + last_id); // 13. 응답으로 받은 id를 사용하여 해당 id의 페이지로 이동합니다.
      });
  };

  // 14. 폼을 렌더링합니다. 입력된 값들은 각 상태와 연결됩니다.
  return (
    <form onSubmit={handler}>
      <h2>Update</h2>

      <p>
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={title}
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />
      </p>

      <p>
        <textarea
          name="body"
          placeholder="본문"
          value={body}
          onChange={(evt) => {
            setBody(evt.target.value);
          }}
        ></textarea>
      </p>

      <p>
        <input type="submit" value="Update" />
      </p>
    </form>
  );
}
