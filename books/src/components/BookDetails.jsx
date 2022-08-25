
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function BookDetails() {
    const params = useParams();
    const [loading, setLoading] = useState('true');

    var bookData;
    function getBook() {
        fetch(`http://openlibrary.org/works/${params.bookId}.json`)
            .then(response => response.json())
            .then(data => {
                bookData = data;
                console.log(data);
                setLoading(false);
            });
    }


    useEffect(() => {
        setLoading(true);
        getBook();
    }, [])
    return loading
        ? <div className='spinner'></div>
        : <div>{bookData.title}</div>
}