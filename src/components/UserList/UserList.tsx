import ReactPaginate from "react-paginate";
import { useState, useEffect, useMemo, ChangeEvent } from "react";
import { useAllUsersStore } from "../../lib/store/useAllUsers";
import Filter from '/assets/icons/filter.svg';
import UserRow from "./UserRow";
import './userlist.styles.scss';
import RightArrow from '/assets/icons/arrow-right.svg';
import LeftArrow from '/assets/icons/arrow-left.svg';
import DownArrow from '/assets/icons/select-down.svg';
import FilterForm from "../FilterForm/FilterForm";

const FilterButton = ({ onClick }: { onClick: () => void }) => (
  <div className="filter" onClick={onClick}>
    <img src={Filter} alt="filter button" />
  </div>
);

const UserTableHeader = ({ toggleForm }: { toggleForm: () => void }) => (
  <div className='headers'>
    {['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status'].map((header) => (
      <div key={header} className={header.toLowerCase().replace(/ /g, '-')}> 
        <p>{header}</p>
        <FilterButton onClick={toggleForm} />
      </div>
    ))}
  </div>
);

const UserList = () => {
  const userList = useAllUsersStore((state) => state.filteredUsers);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleForm = () => setShowForm((prev) => !prev);

  const handlePageChange = ({ selected }: { selected: number }) => setCurrentPage(selected);

  const handleUsersPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUsersPerPage(Number(e.target.value));
    setCurrentPage(0); // Reset to the first page when per-page changes
  };

  const pageCount = useMemo(() => Math.ceil(userList.length / usersPerPage), [userList.length, usersPerPage]);

  useEffect(() => {
    if (currentPage >= pageCount) {
      setCurrentPage(0);
    }
  }, [pageCount, currentPage]);

  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = userList.slice(startIndex, endIndex);

  const pageViewNumbers = [10, 20, 50, 100, 200];

  return (
    <div className="user-list">
      <div className={`filter-form-container ${showForm ? 'active' : ''}`}>
        <FilterForm formProps={{ toggleForm, setCurrentPage }} />
      </div>
      <div className="swipe-help">swipe horizontally to view more details</div>
      <section className="content">
        <section className="table">
          <UserTableHeader toggleForm={toggleForm} />
          <div className="results">
            {displayedUsers.length === 0 ? (
              <p className="error">No users with such records found</p>
            ) : (
              displayedUsers.map((user) => <UserRow key={user.id} userData={user} />)
            )}
          </div>
        </section>
      </section>
      <section className="pagination">
        <div className="page-guide">
          <span>Showing</span>
          <div className="select-container">
            <select value={usersPerPage} onChange={handleUsersPerPageChange}>
              {pageViewNumbers.map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <img src={DownArrow} alt='select' />
          </div>
          out of {userList.length}
        </div>
        <ReactPaginate
          previousLabel={<img src={LeftArrow} alt="previous button" />}
          nextLabel={<img src={RightArrow} alt="next button" />}
          breakLabel={"..."}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination-container"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"disabled"}
          activeClassName={"active-page"}
          breakClassName={"break"}
        />
      </section>
    </div>
  );
};

export default UserList;
