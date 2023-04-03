import { useRouter } from 'next/router'
import Layout from '../../components/layout'
export default function Read(){
    const router = useRouter();
    return <>
        <h2>Read</h2>
        Hello, Read {router.query.id}
    </>
}