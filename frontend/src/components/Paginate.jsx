import { Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  const navigate = useNavigate();

  if (pages <= 1) return null; 

  return (
    <Pagination>
      {[...Array(pages).keys()].map((x) => {
        const pageNum = x + 1;
        const link = !isAdmin
          ? keyword
            ? `/search/${keyword}/page/${pageNum}`
            : `/page/${pageNum}`
          : `/admin/productlist/${pageNum}`;

        return (
          <Pagination.Item
            key={pageNum}
            active={pageNum === page}
            onClick={() => navigate(link)} 
          >
            {pageNum}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default Paginate;
