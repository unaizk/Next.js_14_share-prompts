# Promptia: Next.js Discover & Share

Promptia is an open-source AI prompting tool designed for the modern world, enabling users to discover, create, and share creative prompts effortlessly.

## Features

- Create, edit, and delete prompts seamlessly using Next.js 13.
- Utilizes a serverless backend for a smooth experience, with both frontend and backend running on a single port.
- Authentication powered by NextAuth with Google provider for easy Google account sign-ins.
- Search prompts by username, tag name, and prompt message.
- Tags are clickable, redirecting to the search bar for easy exploration.
- Copy prompt messages to the clipboard with a simple click.

## Usage

### Running the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/unaizk/next.js_14_share-prompts.git
   ```

2. Create a `.env` file in the project root with the following details:

   ```dotenv
   GOOGLE_ID=<Your Google ID>
   GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
   MONGODB_URI=<Your MongoDB URI>
   NEXT_AUTH_URL=http://localhost:3000
   NEXT_AUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=<Your NextAuth Secret>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

   The backend and frontend run on the same port. The serverless backend starts with a MongoDB connection function call.

## Live Project

Explore the live project: [Promptopia](https://promptopia.unaizk.com/)

## Contributing

Feel free to contribute to the development of Promptia. Create issues, submit pull requests, and let's make this tool even better together.

