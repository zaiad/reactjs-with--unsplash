import { useState } from "react";
import { getPhotos } from "../api/unsplash";
import { Oval } from "react-loader-spinner";
import Image from "../components/Image";
import Search from "../components/Search";
import ReactPaginate from "react-paginate";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = async (data) => {
    setLoading(true);
    const newData = await getPhotos(query, currentPage);
    setTotalPages(newData.total_pages)
    setImages(newData.results);
    setCurrentPage(data.selected + 1)
    setLoading(false);
  };

  const getData = async () => {
    setLoading(true);
    const data = await getPhotos(query);
    setTotalPages(data.total_pages)
    setImages(data.results);
    setLoading(false);
  };

  return (
    <main className="flex flex-col gap-20 items-center justify-around">
      <Search setQuery={setQuery} getData={getData} />
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <section className="overflow-hidden text-neutral-700">
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
              {images.map(({ id, urls, alt_description }) => (
                <Image key={id} src={urls.small} alt={alt_description} />
              ))}
            </div>
          </div>
        </section>
      )}
      {totalPages > 0 && (
        <ReactPaginate
          pageCount={totalPages} // total number of pages
          pageRangeDisplayed={5} // number of pages to display in the pagination
          marginPagesDisplayed={2} // number of pages to display at the beginning and end of the pagination
          onPageChange={handlePageChange} // handle page change event
          containerClassName="pagination"
          activeClassName="active"
        />
      )}
    </main>
  );
}

export default Home;
