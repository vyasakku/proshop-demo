import React, { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber = '1', keyword = '' } = useParams();
  const pageNum = Number(pageNumber);

  const { data, isLoading, error, refetch } = useGetProductsQuery(
    { keyword, pageNumber: pageNum },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    refetch();
  }, [pageNum, keyword, refetch]);

  return (
    <>
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light mb-4'>Go Back</Link>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
