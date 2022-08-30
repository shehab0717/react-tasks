import FollowersCard from '../FollowersCard/FollowersCard';
import './Followers.css';

export default function Followers(){
    return (
        <div className="Followers mt-5">
            <div className="container">
                <div className="row">
                    <FollowersCard borderClass='facebook'   title='facebook - @blooming' totalFollowers={32432} todayFollowers={711}/>
                    <FollowersCard borderClass='twitter' title='twitter - @blooming' totalFollowers={5698} todayFollowers={500}/>
                    <FollowersCard borderClass='instagram' title='instagram - @blooming' totalFollowers={8423} todayFollowers={211}/>
                    <FollowersCard borderClass='pinterest' title='pinterest - @blooming' totalFollowers={11223} todayFollowers={20}/>
                </div>
            </div>
        </div>
    )
}