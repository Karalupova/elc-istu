import Solutions from "../Solutions/Solutions";
import Opencourses from "../OpenCourses/Opencourses";
import Opportunities from "../Opportunities/Opportunities";
import Lastnews from "../LastNews/Lastnews";
import Start from "../Start/Start";
import Advantages from "../Advantages/Advantages";
import Reviews from "../Reviews/Reviews";
import Header from "../Header/Header";


const Mainpage = () => {
    return (
        <div>
            <Header />
            <Solutions />
            <Lastnews />
            <Start />
            <Opencourses />
            <Opportunities />
            <Advantages />
            <Reviews />
        </div>
    );
}

export default Mainpage;
