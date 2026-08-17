import { getModel } from "../config/llmModels.js";

export const router = async (state) => {
  const llm = await getModel("router");
  const prompt = `You are an agent router. 
    
    available agents:
        -chat,
        -search
        -coding,
        -pdf,
        -ppt,
        -vision
        
        
        Rules:
        chat:
            General conversation,
            explanation,
            Learning,questions

        search:
            Current events,
            latest information,
            news, 
            recent development,
            internet lookup,
            
        coding:
            Generate code,
            debug code,
            build projects,
            architecture,
            API development
            
        pdf:
            questions about generate pdf,
            Document context,
            
        ppt:
            Questions about generate pdf,
            ppt context,
            
        vision:
            Generate image,
            create image,

        RETURN only one word:
         chat,search,coding,pdf,ppt,vision    
        
        
        user query:
            ${state.prompt}
                `;

  const response = await llm.invoke(prompt);

  return {
    ...state,
    agent: response.content.trim().toLowerCase(),
  };
};
