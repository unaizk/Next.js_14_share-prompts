'use client';

import {useState} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/Form';

const CreatePrompt = () => {
    const [post,setPost] = useState({
        prompt : '',
        tag : ''
    })

    const [submitting,useSubmitting] = useState(false)

    const createPrompt = async (e) =>{

    }

  return (
    <Form 
     type='Create' 
     post = {post}
     setPost = {setPost}
     submitting = {submitting}
     handleSubmitting = {createPrompt}
    />
  )
}

export default CreatePrompt