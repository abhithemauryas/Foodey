const { Configuration, OpenAIApi } = require("openai");
async function generateCompletion(input) {
    try {
      const prompt = input;
      const maxTokens = 500;
      const n = 1;
  
      const configuration = new Configuration({
          apiKey: "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"
        });
      
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: maxTokens,
          n: n
        });
  
      const { choices } = response.data;
      if (choices && choices.length > 0) {
        const completion = choices[0].text.trim();
        return completion
      } else {
        return false
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  module.exports={
    generateCompletion
  }
