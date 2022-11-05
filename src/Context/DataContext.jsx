import { useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [user, setUser] = useState({id: null, profile: null, scrablist: []})
    const value = {
        state: {user},
        action: {setUser}
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

const { Consumer: DataConsumer } = DataContext;

export { DataConsumer, DataProvider }
export default DataContext;