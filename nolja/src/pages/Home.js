import { Link } from 'react-router-dom';
import styles from './Photo.module.css'
function Home() {
    return (
        <div>
            <nav>
                {/* <Link to="/">HOME</Link><br/>
                <Link to="/recommend">여행지 후기</Link><br/>
                <Link to="/board">자유게시판</Link><br/>
                <Link to="/photo">포토갤러리</Link> */}
                <div className={ styles.home }>
                    {/* &emsp;&emsp;&emsp;&emsp; */}
                    <iframe width="660" height="400" src="https://www.youtube.com/embed/q-qsS09i5N4?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/><br/><br/>
                    {/* &emsp;&emsp;&emsp;&emsp; */}
                    <img src="images/1.PNG" width="300px" height="300px" />
                    &emsp;&emsp;&emsp;&emsp;
                    <img src="images/2.PNG" width="300px" height="300px" />
                    <br/><br/><br/><br/>
                    {/* &emsp;&emsp;&emsp;&emsp; */}
                    <img src="images/3.PNG" width="300px" height="300px" />
                    &emsp;&emsp;&emsp;&emsp;
                    <img src="images/4.PNG" width="300px" height="300px" />
                </div>
            </nav>
        </div>
    );
}
export default Home;