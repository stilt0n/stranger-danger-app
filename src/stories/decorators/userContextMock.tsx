import { UserProvider } from "../../contexts/UserContext";

// This could probably be typed without any but I think it's
// not worth worrying too much about type safety here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContextMock = (Story: any) => (
  <UserProvider>
    <Story />
  </UserProvider>
);
