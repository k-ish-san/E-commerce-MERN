import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";


const CollectionPage = () => {
  const { collection } = useParams();
  const [ searchParams ] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  

  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const queryParams = Object.fromEntries([...searchParams]);
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);

  const toggleSidebar = () => {
    
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // Close sidebar if clicked outside
      if (
          sidebarRef.current &&
          !sidebarRef.current.contains(e.target)
      ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add Event lister for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  
  
  return (
    <div className="flex flex-col lg:flex-row bg-gray-200">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border-4 border-fuchsia-800 p-2 flex justify-center items-center bg-black text-white font-sans"
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-72 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 `}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow border-4  border-rose-400 p-4 ">
        <h2 className="text-2xl text-center uppercase mb-4 font-sans">All Collection</h2>
        {/* Sort Options */}
        <SortOptions />
        {/* ProductGrid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
