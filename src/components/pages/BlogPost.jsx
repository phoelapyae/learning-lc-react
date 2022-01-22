import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const params = useParams();

    return <div className='container'>Blog Number - { params.id }</div>;
}
