
import OverviewCard from '../OverviewCard/OverviewCard';
export default function Overview(){
    return (
        <div className='container mt-5'>
            <h3>Overview - Today</h3>
            <div className="row mt-4">
                <OverviewCard title='page views' icon='fa-brands fa-facebook' count={300} percentage={3}/>
                <OverviewCard title='likes' icon='fa-brands fa-facebook' count={150} percentage={-20}/>
                <OverviewCard title='retweets' icon='fa-brands fa-twitter' count={33} percentage={12}/>
                <OverviewCard title='likes' icon='fa-brands fa-twitter' count={33} percentage={12}/>
                <OverviewCard title='likes' icon='fa-brands fa-instagram' count={300} percentage={3}/>
                <OverviewCard title='profile views' icon='fa-brands fa-instagram' count={150} percentage={-20}/>
                <OverviewCard title='comments' icon='fa-brands fa-pinterest' count={33} percentage={12}/>
                <OverviewCard title='total vies' icon='fa-brands fa-pinterest' count={33} percentage={12}/>
            </div>
        </div>
    )
}