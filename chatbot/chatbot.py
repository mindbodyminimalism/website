import gradio as gr
from openai import OpenAI

client = OpenAI(api_key='YOUR_API_KEY')
messages = []

# Function to load brand knowledge base from a file
def load_brand_knowledge(file_path):
    knowledge_base = []
    with open(file_path, 'r') as file:
        knowledge_base = file.readlines()
    return knowledge_base

# Load your brand knowledge base
brand_knowledge_base = load_brand_knowledge('/chatbot/brand_knowledge.txt')

# Add the brand knowledge base to the messages list
messages.extend([{"role": "system", "content": msg.strip()} for msg in brand_knowledge_base])

def respond(history, new_message):
    messages.append({'role': 'user', 'content': new_message})

    # Format the prompt from the messages including the brand knowledge
    prompt_text = "\n".join([m['content'] for m in messages])

    response = client.completions.create(model='gpt-3.5-turbo', prompt=prompt_text)

    assistant_message = response.choices[0].text
    messages.append({'role': 'assistant', 'content': assistant_message})

    return history + [[new_message, assistant_message]]

with gr.Blocks() as my_bot:
    chatbot = gr.Chatbot()
    user_input = gr.Text()

    user_input.submit(respond, inputs=[chatbot, user_input], outputs=chatbot)

my_bot.launch()
