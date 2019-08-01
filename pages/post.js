import React from 'react'
import {useRouter} from'next/router'
import Layout from '../components/Layout';


export default function Post() {
    const router = useRouter();
    return (
        <div>
            <Layout >
                <h1>
                    {router.query.id}
                </h1>
                <p>
                    This is the post 
                </p>
            </Layout>
        </div>
    )
}
