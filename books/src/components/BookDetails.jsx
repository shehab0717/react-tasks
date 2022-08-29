
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
export default function BookDetails() {
    const params = useParams();
    const [loading, setLoading] = useState('true');
    const [bookData, setBookData] = useState();
    function getBook() {
        fetch(`http://openlibrary.org/works/${params.bookId}.json`)
            .then(response => response.json())
            .then(data => {
                setBookData(data);
                setLoading(false);
            });
    }


    useEffect(() => {
        setLoading(true);
        getBook();
    }, [])
    return loading
        ? <div className='spinner'></div>
        : <div>
            <Link className='btn btn-primary mt-5' to='/'>Home</Link>
            <div className='row mt-2'>
                <div className="col-12 col-sm-4 col-lg-3">
                    <img className='w-100' src={`https://covers.openlibrary.org/b/id/${bookData.covers[0]}.jpg`} />
                </div>
                <div className="col">
                    <h1>{bookData.title}</h1>
                    <p>
                        {bookData.description
                            ? bookData.description.value
                            : 'No description for this book!'}
                    </p>
                </div>
            </div>
        </div>
}