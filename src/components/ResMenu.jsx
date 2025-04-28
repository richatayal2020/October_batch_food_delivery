
import useResMenu from './useResMenu';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addIteam } from '../utils/CartSlice';



export const ResMenu = () => {

    const { resId } = useParams();
    const dispatchFunc = useDispatch()
    const handleAddtoCart = (item) => {
        dispatchFunc(addIteam(item))
    }
   const {resDetails , itemCards , loading} = useResMenu(resId)

    const { name, costForTwoMessage, cuisines, avgRating } = resDetails;

    // Guard against undefined resDetails or empty data
    if (loading) {
        return <h1 className="text-center text-2xl font-semibold">Loading...</h1>;
    }

    if (!resDetails) {
        return <h1 className="text-center text-2xl font-semibold">Restaurant not found</h1>;
    }


    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-semibold text-center text-gray-800">{name}</h1>
            <h2 className="text-2xl font-sans text-center text-gray-600 mt-2">{costForTwoMessage}</h2>
            <h3 className="text-xl text-center text-gray-500 mt-2">Average Rating: {avgRating}</h3>
            <p className="text-lg text-center text-gray-500 mt-2">Cuisines: {cuisines?.join(", ")}</p>

            <div className="mt-8">
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">Menu Items</h4>
                {itemCards.length === 0 ? (
                    <p className="text-lg text-center text-gray-600">No menu items found.</p>
                ) : (
                    <ul className="space-y-4">
                        {itemCards.map(item => {
                            const info = item?.card?.info;
                            return (
                                
                                <li key={info.id} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <h5 className="text-lg font-medium text-gray-800">{info?.name}</h5>
                        <p className="text-sm text-gray-500">{info?.description}</p>
                        <p className="text-sm text-gray-600 font-semibold mt-2">{info?.price / 100} INR</p>
                        <button onClick={() => {handleAddtoCart(info)}}>Add to Cart</button>
                    </li>

                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
