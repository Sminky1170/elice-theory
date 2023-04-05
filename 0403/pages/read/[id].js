import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useEffect, useState } from 'react';

export default function Read() {
  const router = useRouter(); // 1. useRouter 훅을 사용하여 Next.js 라우터 객체를 가져옵니다.

  // 2. useState를 사용하여 topic 상태를 관리합니다. 초기 값은 {title: '', body: ''}입니다.
  const [topic, setTopic] = useState({ title: '', body: '' });

  // 3. useEffect를 사용하여 컴포넌트가 마운트되거나 router.query.id가 변경될 때마다 실행되는 코드를 정의합니다.
  useEffect(() => {
    if (router.query.id !== undefined) {
      // 4. id 값이 undefined가 아닐 때만 API 호출을 수행합니다.
      fetch('http://localhost:9999/topics/' + router.query.id)
        .then((res) => res.json())
        .then((data) => {
          setTopic(data); // 5. 응답으로 받은 데이터를 topic 상태에 저장합니다.
        });
    }
  }, [router.query.id]);

  // 6. 렌더링할 때, topic 상태의 title과 body 값을 사용합니다.
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
