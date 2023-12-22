# Todos

## Next steps

- Create chat page
- Create login page
- Create home page
- Create header (and maybe footer?)
- Add routing and create App component

## Improvements

- Organize todos somewhere besides a markdown file
- Allow message editing
- Handle whitespace in messages
  - How can newlines and additional whitespace be added into chat messages from the chat input?
  - How does it need to be parsed by the ChatMessage component?
- Sanitize chat messages
- Store message history?
  - Seems unnecessary for an app for talking to strangers
  - For long conversations may be a good way to prevent lag from long chat history.
  - I'm not 100% I actually want this to be chat for strangers
- Reorganize components?
  - I think it might make sense to set up a routes or pages directory for top level components like Chat
