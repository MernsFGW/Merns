import { Carousel } from 'antd';
import './carousel.css';

export const Slider = () => (
    <Carousel 
        style={{width: 389, borderRadius: 16}}
        autoplay
        className='poster-carousel'
    >
        <div>
            <img style={{ width: '100%', borderRadius: 16}} alt='poster' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb92d083092149.5d31700f864fa.png' />
        </div>
        <div>
            <img style={{ width: '100%', borderRadius: 16, height: '596.6px'}} alt='poster' src='https://i.pinimg.com/originals/b5/cc/f1/b5ccf1b698c7d6bae04e6a8a04e5d5d9.jpg' />
        </div> 
        <div>
            <img style={{ width: '100%', borderRadius: 16, height: '596.6px'}} alt='poster' src='https://www.bedfordshire.pcc.police.uk/wp-content/uploads/2022/02/Schools-Debate-Competition-March-22.png' />
        </div>
    </Carousel>
);