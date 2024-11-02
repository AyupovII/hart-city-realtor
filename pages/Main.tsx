import Banner from "../components/Banner/Banner"
import Requests from "../components/Requests/Requests"
import Objects from "../components/Objects/Objects"
import CheckingClient from "../components/CheckingClient/CheckingClient"
import PersonManager from "../components/PersonManager/PersonManager"

const Main: React.FC = () => {
    return (
        <div>
            <Banner />
            <Objects />
            <Requests />
            <CheckingClient />
            <PersonManager />
        </div>
    )
}

export default Main