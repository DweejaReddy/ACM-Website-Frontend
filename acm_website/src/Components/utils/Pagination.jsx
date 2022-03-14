import React, { useState } from "react";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
	const [pages] = useState(Math.round(data.length / dataLimit));
	const [currentPage, setCurrentPage] = useState(1);

	const goToNextPage = () => {
		setCurrentPage((page) => page + 1);
	};

	const goToPreviousPage = () => {
		setCurrentPage((page) => page - 1);
	};

	const changePage = (e) => {
		const pageNumber = Number(e.target.textContent);
		setCurrentPage((page) => pageNumber);
	};

	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data.slice(startIndex, endIndex);
	};

	const getPaginationGroup = () => {
		const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
	};

	return (
		<div>
			{getPaginatedData().map((d, idx) => (
				<RenderComponent key={idx} data={d} />
			))}
			<nav aria-label="page navigation">
				<ul className="pagination justify-content-center">
					<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
						<span onClick={goToPreviousPage} className="page-link">
							Previous
						</span>
					</li>
					{getPaginationGroup().map((item, index) => (
						<li
							key={index}
							onClick={changePage}
							className={`page-item ${currentPage === item ? "active" : null}`}>
							<span className="page-link">{item}</span>
						</li>
					))}

					<li className={`page-item ${currentPage === pages ? "disabled" : ""}`}>
						<span onClick={goToNextPage} className="page-link">
							Next
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
