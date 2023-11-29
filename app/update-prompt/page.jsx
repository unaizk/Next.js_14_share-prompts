'use client';

import {useState, useEffect} from 'react'
import { useRouter , useSearchParams} from 'next/navigation';
import Form from '@components/Form';

const EditPrompt = () => {
    const [post,setPost] = useState({
        prompt : '',
        tag : ''
    })

    const [submitting,setSubmitting] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')
    
    useEffect(() => {
        console.log('Fetching prompt details for ID:', promptId);
    
        const getPromptsDetails = async () => {
            try {
                const response = await fetch(`/api/prompt/${promptId}`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch prompt: ${response.status}`);
                }
    
                const data = await response.json();
                console.log('Fetched prompt data:', data);
    
                setPost({
                    prompt: data.prompt,
                    tag: data.tag,
                });
            } catch (error) {
                console.error('Error fetching prompt:', error.message);
            }
        };
    
        if (promptId) {
            getPromptsDetails();
        }
    }, [promptId]);
    

    const updatePrompt = async (e) =>{
        e.preventDefault()
        setSubmitting(true);
        console.log('reaching');

        if(!promptId){
            return alert('Prompt ID is not found')
        }
        try {
            console.log(post);
            const response = await fetch(`/api/prompt/${promptId}`,{
                method : 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt : post.prompt,
                    tag : post.tag
                })
            })

            if(response.ok){
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        }finally{
            setSubmitting(false)
        }
    }

  return (
    <Form 
     type='Edit' 
     post = {post}
     setPost = {setPost}
     submitting = {submitting}
     handleSubmitting = {updatePrompt}
    />
  )
}

export default EditPrompt