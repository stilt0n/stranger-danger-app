import { createContext, useContext, PropsWithChildren } from "react";
import { generateRandomUserName } from "../util";

// For now usernames are determined randomly using this process
// eventually this should be handled with login and if guests
// are implemented, they can enter a name or use a random one.
const userName = generateRandomUserName();

export interface IUserContext {
  userName: string;
}

const UserContext = createContext<IUserContext>({
  userName,
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: PropsWithChildren) => (
  <UserContext.Provider value={{ userName }}>{children}</UserContext.Provider>
);
