import Layout from '../components/Layout'

import React from 'react'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


export default function Index(props) {
    return (
       <Layout>
           <div>
               <h1>
                   The Batman Tv Shows
               </h1>
              <ul>
                    {props.shows.map(show => (
                        <li key={show.id}>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a>
                                    {show.name}
                                </a>
                            </Link>

                        </li>
                    ))}
              </ul>
           </div>
       </Layout>
    );
}

Index.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};
