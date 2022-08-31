import './OverviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OverviewCard() {
    const title = 'page views';
    const count = 300;
    const percentage = 3;
    return (
        <div className="col-sm-6 col-md-4 col-md-3">
            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                    <span className='text-secondary fw-bold'>{title}</span>
                    <FontAwesomeIcon icon='fa-brands fa-facebook' size='2x' />
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='light-text fw-bold fs-3'>{count}</span>
                    <FontAwesomeIcon icon="fa-sharp fa-solid fa-caret-up" />
                    <span className='green-text fw-bold'>{percentage}%</span>
                </div>
            </div>
        </div>
    )
}