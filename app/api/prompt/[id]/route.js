import Prompt from "@models/promptModel";
import { connectToDB } from "@utils/database";

//GET read
export const GET = async (request, { params }) => {
    try {
        console.log('Fetching prompt for ID:', params.id);
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');

        console.log('Fetched prompt:', prompt);

        if (!prompt) {
            return new Response('Prompt not found', { status: 404 });
        }

        return new Response(JSON.stringify(prompt), {
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching prompt:', error);
        return new Response('Failed to fetch prompt', {
            status: 500,
        });
    }
};

//PATCH (Update)
export const PATCH = async(request,{params}) =>{
    const {prompt,tag} =await request.json();

    console.log(prompt,tag,'jjjjjjjj');
    console.log(params.id,'xxxxxxxxxxxxxxx');

    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt){
            return new Response("Prompt not found",{status : 404})
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save()

        return new Response(JSON.stringify(existingPrompt),{
            status : 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts",{
            status : 500
        })
    }
}

//DELETE (Delete)
export const DELETE = async(request,{params}) =>{
    try {
        await connectToDB();
        console.log(params.id,'ffffffffffffffff');
        const res = await Prompt.findOneAndDelete({ _id: params.id });
  
        return new Response('Prompt deleted successfully',{
            status : 200
        })

    } catch (error) {
        return new Response("Failed to fetch all prompts",{
            status : 500
        })
    }
}