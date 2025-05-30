import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";
const GenderCollectionSection = () => {
    return (                        
        <section className="py-16 px-4 lg:px-0">
            <div className="mx-auto container flex flex-col md:flex-row gap-9"> 
                {/* Women's collection */}
                <div className="relative flex-1 ">
                    <img
                        src={womensCollectionImage}
                        alt="women's collection"
                        className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute bottom-8 left-8  bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Women's Collection
                        </h2>
                        <Link
                            to="/collections/all?gender=Women"
                            className=" text-gray-900 underline"
                        ><button className="bg-black text-white px-4 py-2 rounded-sm text-md hover:bg-red-500 hover:text-white">
                                Shop Now
                            </button> 
                        </Link>
                    </div>
                </div>

                {/* Men's collection */}
                <div className="relative flex-1 ">
                    <img
                        src={mensCollectionImage}
                        alt="Men's collection"
                        className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute bottom-8 left-8  bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Men's Collection
                        </h2>
                        <Link
                            to="/collections/all?gender=Men"
                            className=" text-gray-900 underline"
                        ><button className="bg-black text-white px-4 py-2 rounded-sm text-md hover:bg-amber-500 hover:text-white"> Shop Now </button>
                            
                        </Link>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default GenderCollectionSection;
