import { useState, useEffect} from 'react'

export default function Pagination(props) {

    const pagination = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

    const pageNumberLimit = 5;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    useEffect(() => {


    }, [])

    const nextBtn = () => {
        props.setCurrentPage(props.currentPage + 1)
        if(props.currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const prevBtn = () => {
        props.setCurrentPage(props.currentPage - 1)
        if((props.currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    return (
        <div className="listPagination">
            {props.currentPage === 1 ? <button  className="switchPage" onClick={prevBtn} disabled >Prev</button> :
            <button  className="switchPage" onClick={prevBtn}>Prev</button>  }
            

            {pagination.map((num, index) => {
                if( num < maxPageNumberLimit+1 && num > minPageNumberLimit){
                    return (
                            <ul onClick={() => props.changePage(num)} key={index} className={ props.currentPage === num ? 'active pagination' : 'notActive pagination' } >
                                {num}
                            </ul>

                    )
                } else{
                    return null;
                }
            })}
            {props.currentPage === 34 ? <button className="switchPage" onClick={nextBtn} disabled>Next</button> : 
            <button className="switchPage" onClick={nextBtn}>Next</button> }
            
        </div>
    )
}
